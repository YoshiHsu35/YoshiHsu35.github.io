Vue.component('edit-enbmodal',{
  /*html*/
  template:`
  <div id="enbmodal" class="modal" tabindex="-1" role="dialog">
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
            <div class="col mx-0" style="padding-right: 5px">
              <table class="table table-striped table-border" style="width: 100%">
                <thead class="thead-dark table-custom">
                  <tr>
                    <th>INFO (Requierd)</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="cbsdsn">CBSD S/N</label>
                    <input type="text" id="cbsdsn" :value="cbsd" disabled>
                </div>
                <div class="inputText">
                    <label for="fccid">FCCID</label>
                    <input type="text" id="fccid" :value="detail.fccId" disabled>
                </div>
                <div class="inputText">
                    <label for="userid">userID</label>
                    <input type="text" id="userid" :value="detail.userId" disabled>
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>GPS (Requierd)</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="lng">Longitude</label>
                    <input type="text" id="lng" v-model="gps[0].value"/>
                    <!--input type="text" id="lng" :value="detail.lng"/-->
                </div>
                <div class="inputText">
                    <label for="lat">Latitude</label>
                    <input type="text" id="lat" v-model="gps[1].value"/>
                    <!--input type="text" id="lat" :value="detail.lat"/-->
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>CPI INFO (Requierd)</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="cpiid">CPI ID</label>
                    <input type="text" id="cpiid" :value="detail.cpiId" disabled>
                </div>
                <div class="inputText">
                    <label for="cpiname">CPI Name</label>
                    <input type="text" id="cpiname" :value="detail.cpiName" disabled>
                </div>
                <div class="inputText">
                    <label for="ict">InstallCert. Time</label>
                    <input type="text" id="ict" :value="detail.installCertificateTime" disabled>
                </div>
                <div class="inputText">
                    <label for="ph">ProtectedHeader</label>
                    <input type="text" id="ph" :value="detail.protectedHeader" disabled>
                </div>
                <div class="inputText">
                    <label for="ecsd">EncodedCpiSign</label>
                    <input type="text" id="ecsd" :value="detail.encodedCpiSignData" disabled>
                </div>
                <div class="inputText">
                    <label for="ds">DigitalSignature</label>
                    <input type="text" id="ds" :value="detail.digitalSignature" disabled>
                </div>
              </table>
            </div>
            <div class="col mx-0" style="padding-left: 5px">
              <table class="table table-striped table-border" style="width: 100%">
                <thead class="thead-dark">
                  <tr>
                    <th>CBSD INFO</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="callsign">callSign</label>
                    <input type="text" id="callsign" :value="detail.callSign" disabled>
                </div>
                <div class="inputText">
                    <label for="cat">Category</label>
                    <input type="text" id="cat" :value="detail.category" disabled>
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>CBSD installationParam</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="height">Height</label>
                    <input type="text" id="height" :value="detail.height" disabled>
                </div>
                <div class="inputText">
                    <label for="heighttype">HeightType</label>
                    <input type="text" id="heighttype" :value="detail.heightType" disabled>
                </div>
                <div class="inputText">
                    <label for="ha">HorizontalAccuracy</label>
                    <input type="text" id="ha" :value="detail.horizontalAccuracy" disabled>
                </div>
                <div class="inputText">
                    <label for="va">VerticalAccuracy</label>
                    <input type="text" id="va" :value="detail.verticalAccuracy" disabled>
                </div>
                <div class="inputText">
                    <label for="aa">AntennaAzimuth</label>
                    <input type="text" id="aa" :value="detail.antennaAzimuth" disabled>
                </div>
                <div class="inputText">
                    <label for="ad">AntennaDowntilt</label>
                    <input type="text" id="ad" :value="detail.antennaDowntilt" disabled>
                </div>
                <div class="inputText">
                    <label for="ag">AntennaGain</label>
                    <input type="text" id="ag" :value="detail.antennaGain" disabled>
                </div>
                <div class="inputText">
                    <label for="ec">EirpCapability</label>
                    <input type="text" id="ec" :value="detail.eirpCapability" disabled>
                </div>
                <div class="inputText">
                    <label for="ab">AntennaBeamwidth</label>
                    <input type="text" id="ab" :value="detail.antennaBeamwidth" disabled>
                </div>
                <div class="inputText">
                    <label for="am">AntennaModel</label>
                    <input type="text" :value="detail.antennaModel" disabled>
                </div>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" :disabled="isdis" @click="editEnbParam">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `,
  props: ['cbsd','detail'],
  created() {
    console.log('fuck edit')
  },
  data() {
    return {
      isdis: true,
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
  mounted() {
    // this.resetData();
  },
  methods: {
    editEnbParam () {
      const api = 'http://10.101.129.48:5888/enb/edit';
      const body = {
        cbsdsn: this.cbsd,
        param: {
          lat: this.gps[1].value,
          lng: this.gps[0].value
        }
      }
      console.log(JSON.stringify(body));
      if (body.param.lat !== undefined && body.param.lng !== undefined) {
        axios.post(api, body).then((res) => {
          console.log(res);
          $('#enbmodal').modal('hide');
        }).catch(e => {
          console.log(e);
        })
      } else {
        console.log('error');
      }
      
    },
    resetData () {
      console.log('小叮噹，我要進來囉');
      Object.assign(this.$data, this.getDefaultData());
      console.log(this.$data);
    },
    getDefaultData() {
      return {
        isdis: true,
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
    }
  },
  watch: {
    gps: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        // console.log(JSON.stringify(newValue));
        // console.log(JSON.stringify(oldValue));
        if (oldValue !== undefined) {
          if (oldValue[0].value !== undefined) {
            this.isdis = false;
          }
        }
      }
    }
  },
});