new Vue({
  el: '#app',
  data: {
    fileArr: [],
    dragging: false,
    cfg: {},
    sasport: 5888,
    sasip: '',
    saschanged: false,
    cpi: false,
    cpichanged: false,
    user: {
    }
  },
  created() {
    this.getDpConfig();
  },
  methods: {
    getDpConfig(){
      const api = `http://10.101.129.48:5888/sys/getConfig`;
        const vm = this;
        axios.get(api).then((res) => {
          vm.cfg = res.data;
          vm.sasip = vm.cfg.sas.ip;
          vm.cpi = vm.cfg.cpiEnable;
          // console.log(vm.cfg.mysql.user);
        });
    },
    rootCaUpload(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        this.dragging = false;
        return;
      }
      let changed = false;
      // this.createFile(files[0]);
      this.fileArr.forEach((el) => {
        if (el.fileName === 'rootCA') {
          el.file = files[0];
          changed = true;
          console.log('File changed!');
        }
      });
      if (changed === false) {
        this.fileArr.push({
          'fileName': 'rootCA',
          'file': files[0]
        });
      }
      
      // console.log('HELLO!!!!');
      console.log(this.fileArr);
    },
    createFile() {
      // if (!file.type.match('text.*')) {
      //   alert('please select txt file');
      //   this.dragging = false;
      //   return;
      // }
      // this.fileArr = file;
      this.dragging = false;
      let files = new FormData();
      this.fileArr.forEach(el => {
        const name = el.fileName;
        const file = el.file;
        console.log(`name: ${name}, file: ${file}`);
        files.append(name, file);
        console.log(files);
        // console.log('APPEND!!');
      });
      // files.append('uploadFile', this.file)
      // axios.post('http://localhost:5888/upload',{
      //   headers: {'Content-Type': 'multipart/form-data'}
      //   }).then(res => {
      //     if (res.data !== null && res.data.length > 1) {
      //         console.log(res.data)
      //     }
      //   });
      return files;
    },
    dpPrivateKeyUpload(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        this.dragging = false;
        return;
      }
      // console.log('HELLO!!!!');
      let changed = false;
      this.fileArr.forEach((el) => {
        if (el.fileName === 'dpPrivKey') {
          el.file = files[0];
          changed = true;
          console.log('File changed!');
        }
      });
      if (changed === false) {
        this.fileArr.push({
          'fileName': 'dpPrivKey',
          'file': files[0]
        });
      }
      console.log(this.fileArr);
    },
    dpCertUpload(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        this.dragging = false;
        return;
      }
      // console.log('HELLO!!!!');
      let changed = false;
      this.fileArr.forEach((el) => {
        if (el.fileName === 'dpCert') {
          el.file = files[0];
          changed = true;
          console.log('File changed!');
        }
      });
      if (changed === false) {
        this.fileArr.push({
          'fileName': 'dpCert',
          'file': files[0]
        });
      }
      console.log(this.fileArr);
    },
    cpiCertKeyUpload(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        this.dragging = false;
        return;
      }
      // console.log('HELLO!!!!');
      let changed = false;
      this.fileArr.forEach((el) => {
        if (el.fileName === 'cpiCert') {
          el.file = files[0];
          changed = true;
          console.log('File changed!');
        }
      });
      if (changed === false) {
        this.fileArr.push({
          'fileName': 'cpiCert',
          'file': files[0]
        });
      }
      console.log(this.fileArr);
    },
    applyConfig(){
      // console.log(this.fileArr);
      if (this.saschanged) {
        const api = 'http://10.101.129.48:5888/sys/updateConfig';
        const body = {
          sas: this.sasip
        }
        axios.post(api, body).then((res) => {
          console.log(res);
          this.getDpConfig();
        }).catch(e => {
          console.log(e);
        })
      }

      if (this.cpichanged) {
        const api = 'http://10.101.129.48:5888/sys/updateConfig';
        const body = {
          cpi: this.cpi
        }
        console.log(`CPI: ${this.cpi}`);
        axios.post(api, body).then((res) => {
          console.log(res);
          this.getDpConfig();
        }).catch(e => {
          console.log(e);
        })
      }

      if (this.fileArr.length > 0) {
        axios.post('http://10.101.129.48:5888/sys/uploadFile', this.createFile(),{
        headers: {'Content-Type': 'multipart/form-data'}
        }).then(res => {
          if (res.data !== null && res.data.length > 1) {
              console.log(res.data)
          }
        });
        console.log(this.createFile());
      }
    }
  },
  watch: {
    sasip: {
      immediate: true,
      handler() {
        console.log('SAS config changed')
        this.saschanged = true;
      }
    },
    cpi: {
      handler() {
        console.log('CPI config changed')
        this.cpichanged = true;
      }
    }
  },
})