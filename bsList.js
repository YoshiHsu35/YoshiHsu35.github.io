new Vue({
  el: '#app',
  data: {
    user: {
      uid: '',
      token: ''
    },
    tempDetailEnb: {
      sn: '',
      detail: {}
    },
    isLoadIn: false,
    listhead: ['IP Address', 'CBSD S/N', 'status', 'RF status', 'TX/MaxEIRP', 'high/low(MHz)', 'Bandwidth(MHz)', 'Category', '詳細參數', 'Edit/Delete', '啟動CBRS'],
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
    this.getEnbs();
  },
  computed: {
    
  },
  methods: {
    getEnbDetail (cbsd) {
      return new Promise((resolve, reject) => {
        const api = `http://10.101.129.48:5888/enb/?cbsd=${cbsd}`;
        const vm = this;
        axios.get(api).then((result) => {
          const res = result.data;
          vm.tempDetailEnb.detail = null;
          vm.tempDetailEnb.detail = {};
          vm.tempDetailEnb.detail.fccId = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['FccId']['_value'];
          vm.tempDetailEnb.detail.fccId = 'DODODO';
          vm.tempDetailEnb.detail.userId = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['UserId']['_value'];
          vm.tempDetailEnb.detail.lat = res['Device']['X_VENDOR']['Location']['Latitude']['_value'];
          vm.tempDetailEnb.detail.lng = res['Device']['X_VENDOR']['Location']['Longitude']['_value'];
          vm.tempDetailEnb.detail.cpiId = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['ProfessionalInstallerData']['CpiId']['_value'];
          vm.tempDetailEnb.detail.cpiName = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['ProfessionalInstallerData']['CpiName']['_value'];
          vm.tempDetailEnb.detail.installCertificateTime = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['ProfessionalInstallerData']['InstallCertificationTime']['_value'];
          vm.tempDetailEnb.detail.protectedHeader = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['CpiSignatureData']['ProtectedHeader']['_value'];
          vm.tempDetailEnb.detail.encodedCpiSignData = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['CpiSignatureData']['EncodedCpiSignedData']['_value'];
          vm.tempDetailEnb.detail.digitalSignature = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['CpiSignatureData']['DigitalSignature']['_value'];
          vm.tempDetailEnb.detail.callSign = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['CallSign']['_value'];
          vm.tempDetailEnb.detail.category = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['CbsdCategory']['_value'];
          vm.tempDetailEnb.detail.height = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['InstallationParam']['Height']['_value'];
          vm.tempDetailEnb.detail.heightType = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['InstallationParam']['HeightType']['_value'];
          vm.tempDetailEnb.detail.horizontalAccuracy = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['InstallationParam']['HorizontalAccuracy']['_value'];
          vm.tempDetailEnb.detail.verticalAccuracy = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['InstallationParam']['VerticalAccuracy']['_value'];
          vm.tempDetailEnb.detail.antennaAzimuth = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['InstallationParam']['AntennaAzimuth']['_value'];
          vm.tempDetailEnb.detail.antennaDowntilt = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['InstallationParam']['AntennaDowntilt']['_value'];
          vm.tempDetailEnb.detail.antennaGain = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['InstallationParam']['AntennaGain']['_value'];
          vm.tempDetailEnb.detail.eirpCapability = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['InstallationParam']['EirpCapability']['_value'];
          vm.tempDetailEnb.detail.antennaBeamwidth = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['InstallationParam']['AntennaBeamwidth']['_value'];
          vm.tempDetailEnb.detail.antennaModel = res['Device']['Services']['FAPService']['1']['X_VENDOR_CBSD']['InstallationParam']['AntennaModel']['_value'];
          resolve(0);
        }).catch(err => {
          reject(err);
        })
      })
      
    },
    getEnbs () {
      const api = 'http://10.101.129.48:5888/enb/?cbsd=';
      axios.get(api).then((res) => {
        this.enbs = res.data;
      }).catch(e => {
        console.log(e);
      })
    },
    delEnb (cbsd) {
      const api = 'http://10.101.129.48:5888/enb/delete';
      const body = {
        cbsdsn: cbsd
      }
      axios.post(api, body).then((res) => {
        console.log(res);
        this.getEnbs();
      }).catch(e => {
        console.log(e);
      })
    },
    earfcnToFreq (earfcn, bandwidth) {
      let freq = 3400 + 0.1*( earfcn - 41590 );
      return [freq - bandwidth/2, freq + bandwidth/2];
    },
    openModal (mode, cbsd) {
      if (mode === 'edit') {
        const vm = this;
        vm.tempDetailEnb.sn = cbsd;
        this.getEnbDetail(cbsd).then(res => {
          console.log('this: ' + JSON.stringify(this.tempDetailEnb.detail));
          console.log('vm: ' + JSON.stringify(vm.tempDetailEnb.detail));
          // vm.isLoadIn = true;
          $('#enbmodal').modal('show');
          console.log('Modal Opened');
        }).catch(err => {
          console.log(err);
        })
      } else if (mode == 'new'){
        // const vm = this;
        $('#newmodal').modal('show');
      } else {
        $('#detailenbmodal').modal('show');
      }
    }
  }
})