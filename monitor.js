new Vue({
  el: '#app',
  data: {
    user: {
      uid: '',
      token: ''
    },
    enbs: [
      {
        ip: '10.101.129.1',
        cbsdsn: '0050BA-FAP-000H1148536',
        status: 'registered',
        RF_status: false,
        txpower: 1,
        maxeirp: 12,
        highfreq: 3570,
        lowfreq: 3550,
        bandwidth: 20,
        category: 'A',
        gps: {
          lng: 120.5510,
          lat: 24.3
        }
      },
      {
        ip: '10.101.129.2',
        cbsdsn: '0050BA-FAP-000H1148587',
        status: 'RF',
        RF_status: true,
        txpower: 5,
        maxeirp: 16,
        highfreq: 3570,
        lowfreq: 3550,
        bandwidth: 20,
        category: 'A',
        gps: {
          lng: 120.5490,
          lat: 24.3
        }
      }
    ],
    markers: [],
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
    this.getEnbs();
    setTimeout(this.initGMap, 500);
    // this.initGMap();
  },
  methods: {
    getEnbs () {
      const api = 'http://10.101.129.48:5888/enb/?cbsd=';
      axios.get(api).then((res) => {
        this.enbs = res.data;
        // console.log(res.data);
      })
    },
    calMapCenter() {
      let cenlat = 0;
      let cenlng = 0;
      this.enbs.forEach(el => {
        cenlat += el.latitude;
        cenlng += el.longitude;
      })
      cenlat = cenlat/this.enbs.length;
      cenlng = cenlng/this.enbs.length;
      return {lat: cenlat, lng: cenlng}
    },
    initGMap() {
      const center = this.calMapCenter();
      const gmap = new google.maps.Map(document.getElementById('gmap'), {
        center: { lat: center.lat, lng: center.lng},
        zoom: 12,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: false,
        mapTypeControl: false
      })
      this.enbs.forEach(el => {
        let status = el.status;
        console.log(status);
        let icon = '';
        if (status === 'unregistered') {
        // if (status === 'Offline') {
          icon = 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|5B5B5B';
        } else if (status === 'registered') {
          icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00FF00';
        } else if (status === 'Authorized') {
          icon = 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFFF37';
        } else if (status === 'RF') {
          icon = 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|0072E3';
        } else {
          icon = 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|EA0000';
        }
        let marker = new google.maps.Marker({
          icon: icon,
          position: {lat: el.latitude, lng: el.longitude},
          map: gmap
        });
        let infoWindow = new google.maps.InfoWindow({
          // content: `<h5 class="my-0">Txpower: ${el.txpower}</h5>
          // <h5 class="my-0">maxEirp: ${el.maxeirp}</h5>`
          content: `
          <table class="table table-borderless m-0">
            <tbody>
              <tr>
                <td style="padding:1px"><strong style="font-weight:600;">Txpower </strong></td>
                <td style="padding:1px"><strong>${el.txpower}</strong></td>
              </tr>
              <tr>
                <td style="padding:1px"><strong style="font-weight:600;">MaxEIRP </strong></td>
                <td style="padding:1px"><strong>${el.maxeirp}</strong></td>
              </tr>
            <tbody>
          </table>
          `
        });
        el.isclick = -1;
        marker.addListener('click', ()=> {
          el.isclick = el.isclick*-1;
          if (el.isclick > 0) {
            infoWindow.open(gmap, marker);
          } else {
            infoWindow.close();
          }
        });

        this.markers.push(marker);
        // console.log(marker);
      });
      // console.log(this.markers);
    }
  }
})