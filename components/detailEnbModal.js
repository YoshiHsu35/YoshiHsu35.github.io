Vue.component('detail-enbmodal',{
  /*html*/
  template:`
  <div id="detailenbmodal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: #7DB9DE;">
          <h5 class="modal-title">{{cbsd}}</h5>
          <!--h5 class="modal-title">{{cbsd}}</h5-->
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" style="padding-bottom: 5px;">
          <div class="row">
            <div class="col mx-0" style="padding-right: 1px">
              <table class="table table-striped table-bordered" style="width: 100%">
                <thead class="thead-dark table-custom">
                  <tr>
                    <th>INFO (Requierd)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in info" :key="item.name">
                    <td style="display: flex; justify-content: space-between; height: 40px; padding: 3px"><label style="font-weight: normal">{{item.name}}:</label>{{item.value}}</td>
                  </tr>
                </tbody>
                <thead class="thead-dark">
                  <tr>
                    <th>GPS (Requierd)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in gps" :key="item.name">
                    <td style="display: flex; justify-content: space-between; height: 40px; padding: 3px"><label style="font-weight: normal;">{{item.name}}:</label>{{item.value}}</td>
                  </tr>
                </tbody>
                <thead class="thead-dark">
                  <tr>
                    <th>CPI INFO (Requierd)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cpiinfo" :key="item.name">
                    <td style="display: flex; justify-content: space-between; height: 40px; padding: 3px"><label style="font-weight: normal;">{{item.name}}:</label>{{item.value}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col mx-0" style="padding-left: 0px">
              <table class="table table-striped table-bordered" style="width: 100%;">
                <thead class="thead-dark">
                  <tr>
                    <th>CBSD INFO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cbsdinfo" :key="item.name">
                    <td style="display: flex; justify-content: space-between; height: 40px; padding: 3px"><label style="font-weight: normal;">{{item.name}}:</label>{{item.value}}</td>
                  </tr>
                </tbody>
                <thead class="thead-dark">
                  <tr>
                    <th>CBSD installationParam</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cbsdinstall" :key="item.name">
                    <td style="display: flex; justify-content: space-between; height: 40px; padding: 3px"><label style="font-weight: normal;">{{item.name}}:</label>{{item.value}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!--button type="button" class="btn btn-primary" @click="showdetail">Test</button-->
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `,
  props: ['cbsd','detail'],
  created() {
    // console.log('fuck you!');
  },
  // data() { return getDefaultData() },
  data() {
    return {
      info: [
        {name:'CBSD S/N', value: this.cbsd},
        {name:'FCCID', value: this.detail.fccId},
        {name:'userID', value: this.detail.userId}
      ],
      gps: [
        {name:'Longitude', value: this.detail.lng},
        {name:'Latitude', value: this.detail.lat}
      ],
      cpiinfo: [
        {name:'CPI ID', value: this.detail.cpiId},
        {name:'CPI Name', value: this.detail.cpiName},
        {name:'InstallCert. Time', value: this.detail.installCertificateTime},
        {name:'ProtectedHeader', value: this.detail.protectedHeader},
        {name:'EncodedCpiSignData', value: this.detail.encodedCpiSignData},
        {name:'DigitalSignature', value: this.detail.digitalSignature},
        
      ],
      cbsdinfo: [
        {name:'callSign', value: this.detail.callSign},
        {name:'Category', value: this.detail.category},
      ],
      cbsdinstall: [
        {name:'Height', value: this.detail.height},
        {name:'HeightType', value: this.detail.heightType},
        {name:'HorizontalAccuracy', value: this.detail.horizontalAccuracy},
        {name:'VerticalAccuracy', value: this.detail.verticalAccuracy},
        {name:'AntennaAzimuth', value: this.detail.antennaAzimuth},
        {name:'AntennaDowntilt', value: this.detail.antennaDowntilt},
        {name:'AntennaGain', value: this.detail.antennaGain},
        {name:'EirpCapability', value: this.detail.eirpCapability},
        {name:'AntennaBeamwidth', value: this.detail.antennaBeamwidth},
        {name:'AntennaModel', value: this.detail.callSign}
      ]
    }
  },
  methods: {
    resetData () {
      console.log('啊哈');
      Object.assign(this.$data, this.getDefaultData());
    },
    getDefaultData() {
      return {
        info: [
          {name:'CBSD S/N', value: this.cbsd},
          {name:'FCCID', value: this.detail.fccId},
          {name:'userID', value: this.detail.userId}
        ],
        gps: [
          {name:'Longitude', value: this.detail.lng},
          {name:'Latitude', value: this.detail.lat}
        ],
        cpiinfo: [
          {name:'CPI ID', value: this.detail.cpiId},
          {name:'CPI Name', value: this.detail.cpiName},
          {name:'InstallCert. Time', value: this.detail.installCertificateTime},
          {name:'ProtectedHeader', value: this.detail.protectedHeader},
          {name:'EncodedCpiSignData', value: this.detail.encodedCpiSignData},
          {name:'DigitalSignature', value: this.detail.digitalSignature},
          
        ],
        cbsdinfo: [
          {name:'callSign', value: this.detail.callSign},
          {name:'Category', value: this.detail.category},
        ],
        cbsdinstall: [
          {name:'Height', value: this.detail.height},
          {name:'HeightType', value: this.detail.heightType},
          {name:'HorizontalAccuracy', value: this.detail.horizontalAccuracy},
          {name:'VerticalAccuracy', value: this.detail.verticalAccuracy},
          {name:'AntennaAzimuth', value: this.detail.antennaAzimuth},
          {name:'AntennaDowntilt', value: this.detail.antennaDowntilt},
          {name:'AntennaGain', value: this.detail.antennaGain},
          {name:'EirpCapability', value: this.detail.eirpCapability},
          {name:'AntennaBeamwidth', value: this.detail.antennaBeamwidth},
          {name:'AntennaModel', value: this.detail.callSign}
        ]
      }
    },
    showdetail() {
      console.log(this.detail);
      console.log(JSON.stringify(this.info));
      console.log(JSON.stringify(this.gps));
      // console.log(this.cpiinfo);
      // console.log(this.cbsdinfo);
      // console.log(this.cbsdinstall);
    }
  },
  watch: {  
  },
});