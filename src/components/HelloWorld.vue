<template>
<!-- <header id="header">{{aqure}}</header> -->

<body id="body">
  <v-card class="pa-4" flat height="300px">
    <v-toolbar dense floating>
      <v-text-field hide-details prepend-icon="検索" single-line></v-text-field>

      <v-btn icon>
        <v-icon>
          <a href></a>
        </v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>b</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>

  <div id="mymap"></div>
  <!-- {{ aqure }} -->
</body>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
// var shimarinIcon = L.icon.Default;
export default {
  async mounted() {
    // var shimarin = L.icon.Default;
    // ({
    //   iconUrl: "../../shimarin.png",
    //   iconSize: [38, 95],
    //   iconAnchor: [22, 94],
    //   popupAnchor: [-3, -76]
    // });

    var mymap = L.map("mymap").setView([35.6825, 139.752778], 11);
    var tileLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    );
    tileLayer.addTo(mymap);

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconRetinaUrl,
      iconUrl: iconUrl,
      shadowUrl: shadowUrl
    });

    await axios.get("http://localhost:3000/tokyo").then(response => {
      const aqure = response.data;
      Object.keys(aqure).forEach(key => {
        var marker = L.marker([aqure[key].lat, aqure[key].lon]);
        marker.bindPopup(aqure[key].name).addTo(mymap);
        // L.marker([35.6825, 139.752778], { icon: shimarin }).addTo(mymap);

        // var geojsonFeature = [
        //   {
        //     type: "Feature",
        //     geometry: {
        //       type: "Point",
        //       coordinates: [aqure[key].lat, aqure[key].lon] // 経度,緯度の順になるので注意！
        //     }
        //   }
        // ];
        // L.geoJson(geojsonFeature).addTo(mymap);
        // L.popup()
        //   .setLatLng([aqure[key].lat, aqure[key].lon])
        //   .setContent(aqure[key].name)
        //   .circle([aqure[key].lat, aqure[key].lon], {
        //     icon: shimarin
        //   })
        //   .addTo(mymap);
      });
      // for (const key in aqure) {
      //   L.marker([aqure[key].lat, aqure[key].lon], { icon: shimarin })
      //     .bindPopup(aqure[key].name)
      //     .addTo(mymap);
    });
  },

  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mymap {
  height: 500px;
  width: 80%;
  margin: 0 auto;
}
</style>
