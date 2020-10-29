Vue.component('delete-enbmodal',{
  /*html*/
  template:`
  <div id="delProductModal" class="modal fade" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span>刪除</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{cbsd}}</strong>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delenb()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
  `,
  // props: [],
  data() {
    return {
    }
  },
  props: ['cbsd'],
  methods: {
    resetData () {
      console.log('大雄，我要進來囉');
      Object.assign(this.$data, getDefaultData());
    },
    delenb() {
      const api = 'http://10.101.129.48:5888/enb/delete';
      const body = {
        cbsdsn: this.cbsd
      }
      axios.post(api, body).then((res) => {
        console.log(res);
        this.$emit('update');
      }).catch(e => {
        console.log(e);
      })
      $('#delProductModal').modal('hide');
    },
  },
  watch: {
    
  },
});