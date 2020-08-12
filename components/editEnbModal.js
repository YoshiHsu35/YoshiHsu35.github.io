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
                    <input type="text" id="cbsdsn" :value="cbsd"/>
                </div>
                <div class="inputText">
                    <label for="fccid">FCCID</label>
                    <input type="text" id="fccid" :value="detail.fccId"/>
                </div>
                <div class="inputText">
                    <label for="userid">userID</label>
                    <input type="text" id="userid" :value="detail.userId"/>
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>GPS (Requierd)</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="lng">Longitude</label>
                    <input type="text" id="lng" :value="detail.lng"/>
                </div>
                <div class="inputText">
                    <label for="lat">Latitude</label>
                    <input type="text" id="lat" :value="detail.lat"/>
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>CPI INFO (Requierd)</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="cpiid">CPI ID</label>
                    <input type="text" id="cpiid" :value="detail.cpiId"/>
                </div>
                <div class="inputText">
                    <label for="cpiname">CPI Name</label>
                    <input type="text" id="cpiname" :value="detail.cpiName"/>
                </div>
                <div class="inputText">
                    <label for="ict">InstallCert. Time</label>
                    <input type="text" id="ict" :value="detail.installCertificateTime"/>
                </div>
                <div class="inputText">
                    <label for="ph">ProtectedHeader</label>
                    <input type="text" id="ph" :value="detail.protectedHeader"/>
                </div>
                <div class="inputText">
                    <label for="ecsd">EncodedCpiSignData</label>
                    <input type="text" id="ecsd" :value="detail.encodedCpiSignData"/>
                </div>
                <div class="inputText">
                    <label for="ds">DigitalSignature</label>
                    <input type="text" id="ds" :value="detail.digitalSignature"/>
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
                    <input type="text" id="callsign" :value="detail.callSign"/>
                </div>
                <div class="inputText">
                    <label for="cat">Category</label>
                    <input type="text" id="cat" :value="detail.category"/>
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>CBSD installationParam</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="height">Height</label>
                    <input type="text" id="height" :value="detail.height"/>
                </div>
                <div class="inputText">
                    <label for="heighttype">HeightType</label>
                    <input type="text" id="heighttype" :value="detail.heightType"/>
                </div>
                <div class="inputText">
                    <label for="ha">HorizontalAccuracy</label>
                    <input type="text" id="ha" :value="detail.horizontalAccuracy"/>
                </div>
                <div class="inputText">
                    <label for="va">VerticalAccuracy</label>
                    <input type="text" id="va" :value="detail.verticalAccuracy"/>
                </div>
                <div class="inputText">
                    <label for="aa">AntennaAzimuth</label>
                    <input type="text" id="aa" :value="detail.antennaAzimuth"/>
                </div>
                <div class="inputText">
                    <label for="ad">AntennaDowntilt</label>
                    <input type="text" id="ad" :value="detail.antennaDowntilt"/>
                </div>
                <div class="inputText">
                    <label for="ag">AntennaGain</label>
                    <input type="text" id="ag" :value="detail.antennaGain"/>
                </div>
                <div class="inputText">
                    <label for="ec">EirpCapability</label>
                    <input type="text" id="ec" :value="detail.eirpCapability"/>
                </div>
                <!--div class="inputText">
                    <label for="ec">EirpCapability</label>
                    <input type="text" id="ec" :value="detail."/>
                </div-->
                <div class="inputText">
                    <label for="ab">AntennaBeamwidth</label>
                    <input type="text" id="ab" :value="detail.antennaBeamwidth"/>
                </div>
                <div class="inputText">
                    <label for="am">AntennaModel</label>
                    <input type="text" id="am" :value="detail.antennaModel"/>
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
  props: ['cbsd','detail'],
  data() {
    return {
    }
  },
  methods: {
  },
  watch: {  
  },
});