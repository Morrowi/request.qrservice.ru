<template>
  <div class="bg_green"></div>
  <main>
    <div class="container">
      <div class="row justify-content-center warp_title">
        <div class="col-auto text-center" v-html="title_h1"></div>
      </div>
    </div>
    <div class="warp_middle">
      <div class="warp_data" id="step1" v-if="currentStep == 1">
        <div class="row"><div class="col f-bold fz-18 mb-4 text-center">Введите данные, указанные при регистрации аккаунта</div></div>
        <Form @submit="onSubmit">
          <div class="row flex-column align-items-center warp_statps_1">
            <div class="col-auto position-relative">
              <Field name="email" type="email" placeholder="E-mail" class="input-control"  :rules="validateEmail" />
              <ErrorMessage class="input-error" name="email" />
            </div>

            <div class="col-auto position-relative">
              <Field name="pin" type="text" placeholder="PIN-код" class="input-control"  :rules="validatePin" v-show="showPin"/>
              <Field name="pin" type="password" class="input-control" placeholder="PIN-код" v-show="!showPin"/>
              <ErrorMessage class="input-error" name="pin" />
              <div class="buttonShowPass" @click="showPassBt">

                <div class="hidePass" v-show="!showPin">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.00977 3.23535L16.309 16.7645" stroke="black" stroke-width="1.22993" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.2289 12.275C11.6255 12.8235 10.8289 13.1098 10.0144 13.071C9.19986 13.0321 8.43411 12.6714 7.88558 12.068C7.33705 11.4646 7.05066 10.668 7.08941 9.8535C7.12817 9.03897 7.48888 8.27319 8.09222 7.72461" stroke="black" stroke-width="1.22993" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.00884 5.43262C2.87489 7.01965 1.55078 9.99922 1.55078 9.99922C1.55078 9.99922 4.01064 15.5333 10.1603 15.5333C11.6011 15.5448 13.024 15.2129 14.3111 14.5651" stroke="black" stroke-width="1.22993" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.3567 13.1595C18.0326 11.6584 18.7697 10.0001 18.7697 10.0001C18.7697 10.0001 16.3098 4.46486 10.1602 4.46486C9.62755 4.46399 9.09577 4.50729 8.57031 4.59432" stroke="black" stroke-width="1.22993" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.7383 6.97949C11.3918 7.10498 11.987 7.43899 12.4347 7.93141C12.8823 8.42382 13.1582 9.0481 13.221 9.7106" stroke="black" stroke-width="1.22993" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="showPass" v-show="showPin">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1608 4.46387C4.01112 4.46387 1.55127 9.99914 1.55127 9.99914C1.55127 9.99914 4.01112 15.5332 10.1608 15.5332C16.3104 15.5332 18.7702 9.99914 18.7702 9.99914C18.7702 9.99914 16.3104 4.46387 10.1608 4.46387Z" stroke="#171717" stroke-width="1.22993" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.1608 13.0744C11.8589 13.0744 13.2356 11.6978 13.2356 9.99962C13.2356 8.30145 11.8589 6.9248 10.1608 6.9248C8.46258 6.9248 7.08594 8.30145 7.08594 9.99962C7.08594 11.6978 8.46258 13.0744 10.1608 13.0744Z" stroke="#171717" stroke-width="1.22993" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <button type="submit" class="bt btn-auth"><span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
              ></span>Дальше</button>
            </div>
          </div>
          <div class="row mt-5 justify-content-center" v-if="error !== ''">
            <div class="col-auto">
              <div class="alert alert-danger" role="alert">
                <div  v-for="(value,key) in error" :key="key">{{value}}</div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
    <Contact/>
  </main>
</template>

<script>
import Contact from '../components/Contact'
import { Field, Form, ErrorMessage } from 'vee-validate';

export default {
  name: 'HomePage',
  components: {
    Field,
    Form,
    ErrorMessage,
    Contact
  },
  data() {

    return{
      showPin:false,
      loading:false,
      showDate:true,
      error:'',
      tmpImg:'',
      attrs:{},
      warp_qr:'',
      title_h1:'Форма для отправки <br>в Другой Банк',
      step_2_email:'',
      step_2_first_name:'',
      step_2_last_name:'',
      subscription_expiration_date:'',
      unpaid_qrt:'',
      tarifs:[],
      allPrice:'',
      selectedTarif:'',

      currentStep: 1,
    }

  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/main");
    }
  },
  methods: {
    showPassBt(){
      this.showPin=!this.showPin;
    },
    goToStep: function(step) {
      this.currentStep = step;
    },
    onSubmit(values) {
      this.loading=true;
      console.log(values, null, 2);
      values.email='md@qrm.ooo';
      values.pin=11111;

      this.$store.dispatch("auth/login", values).then(
          (data) => {
            console.log(data);
            if (data.accessToken) {
              this.$router.push("/main");
            }

          },
          (error) => {
            this.loading = false;
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(error.response.data.error);
            this.error = error.response.data;

          }
      );



    },
    validateEmail(value) {
      this.error='';
      // if the field is empty
      if (!value) {
        return 'E-mail не заполнен';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'Не является email';
      } else {
        let myarr = value.split("@");
        if(myarr[0].length > 128 ||  myarr[1].length > 128){
          return 'Недопустимый формат email';
        } else {
          let firstPos = myarr[0].indexOf('.');
          if(firstPos !== -1){
            return 'email не может начинатся с "."';
          } else{
            /*let lastPos = myarr[1].lastIndexOf('.');
            console.log(lastPos);
            if(lastPos !== -1){
              return 'email не может оканчиваться  "."';
            }*/
          }

        }

      }

      // All is good
      return true;
    },
    validatePin(value) {

      if(value !== undefined){
        if( value.match(/[^0-9'".]/)){
          return 'Pin-код должен состоять только из цифр';
        }
        console.log(value);
        this.error='';
        // if the field is empty

        if(value.length!==5){
          return 'Pin-код должен состоять из 5 символов';
        }
        if (!value) {
          return 'Введите Pin-код';
        }
        return true;
      }
    }

  },

}
</script>
<style scoped>
.btn-auth{
  min-width: 235px;
}
</style>
