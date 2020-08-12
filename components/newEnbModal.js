Vue.component('new-enbmodal',{
  /*html*/
  template:`
  <div id="newmodal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color: #7DB9DE;">
          <h5 class="modal-title"></h5>
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
                    <input type="text" v-model="param.cbsdsn"/>
                </div>
                <div class="inputText">
                    <label for="fccid">FCCID</label>
                    <input type="text" v-model="param.fccId"/>
                </div>
                <div class="inputText">
                    <label for="userid">userID</label>
                    <input type="text" v-model="param.userId"/>
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>GPS (Requierd)</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="lng">Longitude</label>
                    <input type="text" v-model="param.lng"/>
                </div>
                <div class="inputText">
                    <label for="lat">Latitude</label>
                    <input type="text" v-model="param.lat"/>
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>CPI INFO (Requierd)</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="cpiid">CPI ID</label>
                    <input type="text" v-model="param.cpiId"/>
                </div>
                <div class="inputText">
                    <label for="cpiname">CPI Name</label>
                    <input type="text" v-model="param.cpiName"/>
                </div>
                <div class="inputText">
                    <label for="ict">InstallCert. Time</label>
                    <input type="text" v-model="param.installCert"/>
                </div>
                <div class="inputText">
                    <label for="ph">ProtectedHeader</label>
                    <input type="text" v-model="param.protectedHeader"/>
                </div>
                <div class="inputText">
                    <label for="ecsd">EncodedCpiSignData</label>
                    <input type="text" v-model="param.encodedCpiSignData"/>
                </div>
                <div class="inputText">
                    <label for="ds">DigitalSignature</label>
                    <input type="text" v-model="param.digitalSignature"/>
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
                    <input type="text" v-model="param.callSign"/>
                </div>
                <div class="inputText">
                    <label for="cat">Category</label>
                    <input type="text" v-model="param.category"/>
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>CBSD installationParam</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="height">Height</label>
                    <input type="text" v-model="param.height"/>
                </div>
                <div class="inputText">
                    <label for="heighttype">HeightType</label>
                    <input type="text" v-model="param.heightType"/>
                </div>
                <div class="inputText">
                    <label for="ha">HorizontalAccuracy</label>
                    <input type="text" v-model="param.horizontalAccuracy"/>
                </div>
                <div class="inputText">
                    <label for="va">VerticalAccuracy</label>
                    <input type="text" v-model="param.verticalAccuracy"/>
                </div>
                <div class="inputText">
                    <label for="aa">AntennaAzimuth</label>
                    <input type="text" v-model="param.antennaAzimuth"/>
                </div>
                <div class="inputText">
                    <label for="ad">AntennaDowntilt</label>
                    <input type="text" v-model="param.antennaDowntilt"/>
                </div>
                <div class="inputText">
                    <label for="ag">AntennaGain</label>
                    <input type="text" v-model="param.antennaGain"/>
                </div>
                <div class="inputText">
                    <label for="ec">EirpCapability</label>
                    <input type="text" v-model="param.eirpCapability"/>
                </div>
                <div class="inputText">
                    <label for="ab">AntennaBeamwidth</label>
                    <input type="text" v-model="param.antennaBeamwidth"/>
                </div>
                <div class="inputText">
                    <label for="am">AntennaModel</label>
                    <input type="text" v-model="param.antennaModel"/>
                </div>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `,
  // props: [],
  data() {
    return {
      param: {
        cbsdsn: '',
        fccId: '',
        userId: '',
        lat: '',
        lng: '',
        cpiId: '',
        cpiName: '',
        installCert: '',
        protectedHeader: '',
        encodedCpiSignData: '',
        digitalSignature: '',
        callSign: '',
        category: '',
        height: '',
        heightType: '',
        horizontalAccuracy: '',
        verticalAccuracy: '',
        antennaAzimuth: '',
        antennaDowntilt: '',
        antennaGain: '',
        eirpCapability: '',
        antennaBeamwidth: '',
        antennaModel: ''
      }
    }
  },
  methods: {
    checkEnbAlive (cbsd) {
      const api = `http://10.101.129.48:5888/enbalive/?cbsd=${cbsd}`;
      axios.get(api).then((res) => {
        this.enbs = res.data;
      })
    }
  },
  watch: {
    
  },
});