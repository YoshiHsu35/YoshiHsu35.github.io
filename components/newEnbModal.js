function getDefaultData() {
  return {
    fontColor: {
      color: 'red'
    },
    // borderColor: {
    //   borderColor: 'green',
    //   borderWidth: '3px'
    // },
    cbsdsn: '',
    existed: 'Fill in SN',
    errormsg: '',
    inputdis: true,
    param: {
      // cbsdsn: '',
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
}

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
                    <label :style="fontColor">{{existed}}</label>
                    <input type="text" v-model="cbsdsn" >
                    <!--button class="btn-info" style="margin-left: 5px">check</button-->
                </div>
                <div class="inputText">
                    <label for="fccid">FCCID</label>
                    <input type="text" v-model="param.fccId" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="userid">userID</label>
                    <input type="text" v-model="param.userId" :disabled="inputdis">
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>GPS (Requierd)</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="lng">Longitude</label>
                    <input type="text" v-model="param.lng" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="lat">Latitude</label>
                    <input type="text" v-model="param.lat" :disabled="inputdis">
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>CPI INFO (Requierd)</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="cpiid">CPI ID</label>
                    <input type="text" v-model="param.cpiId" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="cpiname">CPI Name</label>
                    <input type="text" v-model="param.cpiName" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="ict">InstallCert. Time</label>
                    <input type="text" v-model="param.installCert" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="ph">ProtectedHeader</label>
                    <input type="text" v-model="param.protectedHeader" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="ecsd">EncodedCpiSignData</label>
                    <input type="text" v-model="param.encodedCpiSignData" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="ds">DigitalSignature</label>
                    <input type="text" v-model="param.digitalSignature" :disabled="inputdis">
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
                    <input type="text" v-model="param.callSign" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="cat">Category</label>
                    <input type="text" v-model="param.category" :disabled="inputdis">
                </div>
                <thead class="thead-dark">
                  <tr>
                    <th>CBSD installationParam</th>
                  </tr>
                </thead>
                <div class="inputText">
                    <label for="height">Height</label>
                    <input type="text" v-model="param.height" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="heighttype">HeightType</label>
                    <input type="text" v-model="param.heightType" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="ha">HorizontalAccuracy</label>
                    <input type="text" v-model="param.horizontalAccuracy" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="va">VerticalAccuracy</label>
                    <input type="text" v-model="param.verticalAccuracy" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="aa">AntennaAzimuth</label>
                    <input type="text" v-model="param.antennaAzimuth" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="ad">AntennaDowntilt</label>
                    <input type="text" v-model="param.antennaDowntilt" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="ag">AntennaGain</label>
                    <input type="text" v-model="param.antennaGain" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="ec">EirpCapability</label>
                    <input type="text" v-model="param.eirpCapability" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="ab">AntennaBeamwidth</label>
                    <input type="text" v-model="param.antennaBeamwidth" :disabled="inputdis">
                </div>
                <div class="inputText">
                    <label for="am">AntennaModel</label>
                    <input type="text" v-model="param.antennaModel" :disabled="inputdis">
                </div>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <label style="color: red">{{errormsg}}</label>
          <button type="button" class="btn btn-primary" @click="creatEnb(cbsdsn)">AddEnb</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `,
  data() { return getDefaultData() },
  methods: {
    resetData () {
      console.log('小夫，我要進來囉');
      Object.assign(this.$data, getDefaultData());
    },
    creatEnb (cbsd) {
      return new Promise((resolve, reject) => {
        const api = 'http://10.101.129.48:5888/enb/create';
        const body = {
          cbsdsn: cbsd,
        };
        if (typeof this.param !== undefined) {
          body.lat = this.param.lat;
          body.lng = this.param.lng;
        }
        axios.post(api, body).then((res) => {
          resolve(res);
          $('#newmodal').modal('hide');
          this.$emit('update');
        }).catch(err => {
          this.errormsg = 'This eNB has been existed in your system';
          console.dir(err);
          reject(err);
        })
      })
    },
    checkEnbAlive (cbsd) {
      return new Promise((resolve, reject) => {
        const api = `http://10.101.129.48:5888/enbalive/?cbsd=${cbsd}`;
        axios.get(api).then((res) => {
          const data = res.data;
          // console.log(data);
          this.param.lat = data.lat;
          this.param.lng = data.lng;
          this.inputdis = false;
          resolve(data);
        }).catch(err => {
          // console.log(err);
          reject(err);
        })
      })
    }
  },
  watch: {
    cbsdsn: {
      immediate: true,
      handler (newValue) {
        const arr = newValue.split('-');
        // console.log(arr);
        // var newStatus = newValue || 'no new value';
        // var oldStatus = oldValue || 'no old value';
        // console.log('old value: ' + oldStatus);
        // console.log('new value: ' + newStatus);
        if (arr.length === 3) {
          // console.log(this.cbsdsn);
          this.checkEnbAlive(this.cbsdsn).then(res => {
            if (res === 'non-alive') {
              console.log('non-alive');
              this.existed = 'Exist!';
              this.fontColor.color = 'green';
            } else {
              console.log('shit');
              this.existed = 'Exist!';
              this.fontColor.color = 'green';
              // this.$emit('update');
            }
          }).catch(err => {
            console.log('The eNB not existed, please check');
            this.existed = 'Not Exist';
            this.fontColor.color = 'red';

          })
          
        } else if (newValue === '') {
          this.existed = 'Fill in SN';
          this.fontColor.color = 'red';
        }
      }
    }
  },
});