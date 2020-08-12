Vue.component('delete-enbmodal',{
  /*html*/
  template:`
  `,
  // props: [],
  data() {
    return {
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