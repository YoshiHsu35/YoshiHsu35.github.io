new Vue({
  el: '#app',
  data: {
    user: {
      uid: '',
      token: ''
    },
    icons: [
      {
        color: 'Grey',
        url: 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|5B5B5B',
        title: 'Offline'
      },
      {
        color: 'Green',
        url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00FF00',
        title: 'Registerd'
      },
      {
        color: 'Yellow',
        url: 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFFF37',
        title: 'Authorized'
      },
      {
        color: 'Blue',
        url: 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|0072E3',
        title: 'RF'
      },
      {
        color: 'Red',
        url: 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|EA0000',
        title: 'Error'
      }
    ]
  },
  mounted() {
    setTimeout(this.initGMap, 1000);
    // this.initGMap();
  },
  methods: {
    initGMap() {
      const gmap = new google.maps.Map(document.getElementById('gmap'), {
        center: { lat: 24.3, lng: 120.55},
        zoom: 15,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: false,
        mapTypeControl: false
      })

      // var legend = document.getElementById('legend');
      // this.icons.forEach(el => {
      //   let name = el.title;
      //   let icon = el.url;
      //   let div = document.createElement('div');
      //   div.innerHTML = `<img src='${icon}'> ${name}`
      //   legend.appendChild(div);
      // }); 
      // map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
    }
  }
})