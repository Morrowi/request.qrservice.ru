<template>
  <div class="bg_green"></div>
  <main>
    <div class="container">
      <div class="row justify-content-center warp_title">
        <div class="col-auto text-center" v-html="title_h1"></div>
      </div>
    </div>
    <div class="warp_middle">
      <div class="warp_data" >
       <div class="text_result"> В процессе рассмотрения заявки с Вами свяжется представитель банка для уточнения деталей и подписания договора обслуживания. После этого мы ждем
         Вас для начала работы!</div>
          <div class="row warp_btn_result">
            <div class="col">
              <button type="submit" class="bt" @click="logOut"><span v-show="loading" class="spinner-border spinner-border-sm"></span>Выйти из профиля</button>
            </div>
            <div class="col">
              <button type="submit" class="bt"><span v-show="loading2" class="spinner-border spinner-border-sm"></span>Главная страница профиля</button>
            </div>
          </div>
      </div>
    </div>
    <Contact/>
  </main>
</template>

<script>
import Contact from '../components/Contact'


/*import axios from 'axios';
import authHeader from "@/services/auth-header";
*/
export default {
  name: 'Result',

  components: {
    Contact
  },
  data() {

    return{
      title_h1:'Заявка отправлена',
      loading:false,
      loading2:false,
    }

  },

  methods: {
    logOut() {
      this.loading = true;
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },
  },

}
</script>

<style scoped>
.warp_btn_result{
  margin-left: -5px;
  margin-right: -5px;
}
.warp_btn_result > div{
  padding: 0 5px;
}

</style>