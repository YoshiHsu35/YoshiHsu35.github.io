new Vue({
  el: '#app',
  components: {
    'enbmodal': {
      /*html*/
      template: `
      <div id="enbmodal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header" style="background-color: #7DB9DE;">
              <!--h5 class="modal-title">新增基站</h5-->
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
                        <input type="text" id="cbsdsn"/>
                    </div>
                    <div class="inputText">
                        <label for="fccid">FCCID</label>
                        <input type="text" id="fccid"/>
                    </div>
                    <div class="inputText">
                        <label for="userid">userID</label>
                        <input type="text" id="userid"/>
                    </div>
                    <thead class="thead-dark">
                      <tr>
                        <th>GPS (Requierd)</th>
                      </tr>
                    </thead>
                    <div class="inputText">
                        <label for="lng">Longitude</label>
                        <input type="text" id="lng"/>
                    </div>
                    <div class="inputText">
                        <label for="lat">Latitude</label>
                        <input type="text" id="lat"/>
                    </div>
                    <thead class="thead-dark">
                      <tr>
                        <th>CPI INFO (Requierd)</th>
                      </tr>
                    </thead>
                    <div class="inputText">
                        <label for="cpiid">CPI ID</label>
                        <input type="text" id="cpiid"/>
                    </div>
                    <div class="inputText">
                        <label for="cpiname">CPI Name</label>
                        <input type="text" id="cpiname"/>
                    </div>
                    <div class="inputText">
                        <label for="ict">InstallCert. Time</label>
                        <input type="text" id="ict"/>
                    </div>
                    <div class="inputText">
                        <label for="ph">ProtectedHeader</label>
                        <input type="text" id="ph"/>
                    </div>
                    <div class="inputText">
                        <label for="ecsd">EncodedCpiSignData</label>
                        <input type="text" id="ecsd"/>
                    </div>
                    <div class="inputText">
                        <label for="ds">DigitalSignature</label>
                        <input type="text" id="ds"/>
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
                        <input type="text" id="callsign"/>
                    </div>
                    <div class="inputText">
                        <label for="cat">Category</label>
                        <input type="text" id="cat"/>
                    </div>
                    <thead class="thead-dark">
                      <tr>
                        <th>CBSD installationParam</th>
                      </tr>
                    </thead>
                    <div class="inputText">
                        <label for="height">Height</label>
                        <input type="text" id="height"/>
                    </div>
                    <div class="inputText">
                        <label for="heighttype">HeightType</label>
                        <input type="text" id="heighttype"/>
                    </div>
                    <div class="inputText">
                        <label for="ha">HorizontalAccuracy</label>
                        <input type="text" id="ha"/>
                    </div>
                    <div class="inputText">
                        <label for="va">VerticalAccuracy</label>
                        <input type="text" id="va"/>
                    </div>
                    <div class="inputText">
                        <label for="aa">AntennaAzimuth</label>
                        <input type="text" id="aa"/>
                    </div>
                    <div class="inputText">
                        <label for="ad">AntennaDowntilt</label>
                        <input type="text" id="ad"/>
                    </div>
                    <div class="inputText">
                        <label for="ag">AntennaGain</label>
                        <input type="text" id="ag"/>
                    </div>
                    <div class="inputText">
                        <label for="ec">EirpCapability</label>
                        <input type="text" id="ec"/>
                    </div>
                    <div class="inputText">
                        <label for="ec">EirpCapability</label>
                        <input type="text" id="ec"/>
                    </div>
                    <div class="inputText">
                        <label for="ab">AntennaBeamwidth</label>
                        <input type="text" id="ab"/>
                    </div>
                    <div class="inputText">
                        <label for="am">AntennaModel</label>
                        <input type="text" id="am"/>
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
      data() {
        return {
          text: 'shot up!'
        }
      }
    }
  },
  data: {
    user: {
      uid: '',
      token: ''
    },
    listhead: ['IP Address', 'CBSD S/N', 'status', 'RF status', 'TX/MaxEIRP', 'high/low(MHz)', 'Bandwidth(MHz)', 'Category', 'Detail','Edit/Delete'],
    enbs: [
      {
        ip: '10.101.129.1',
        cbsdsn: '0050BA-FAP-000H1148536',
        status: 'unregistered',
        RF_status: false,
        txpower: 1,
        maxeirp: 12,
        highfreq: 3570,
        lowfreq: 3550,
        bandwidth: 20,
        category: 'A'
      }
    ]
  },
  mounted() {
    
  },
  methods: {
    openModal () {
      $('#enbmodal').modal('show');
      // console.log('lalala');
    }
  }
})