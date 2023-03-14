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
       <div class="sub_title"> который поможет принимать платежи через СБП без открытия расчетного счета</div>
        <Form @submit="onSubmit">
          <div class="row flex-column align-items-center warp_statps_1">
            <div class="col-12 position-relative">
              <label>ИНН</label>
              <Field name="inn" type="number" placeholder="7812345678" class="input-control"  :rules="validateINN" />
              <ErrorMessage class="input-error" name="inn" />
            </div>
            <div class="col-12 position-relative">
              <label>Наименование</label>
              <Field name="Naimenovanie" type="text" placeholder="обязателен для ИП и ООО" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="Naimenovanie" />
            </div>
            <div class="col-12 position-relative">
              <label>ОГРН</label>
              <Field name="OGRN" type="text" placeholder="1012345678910" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="OGRN" />
            </div>
            <div class="col-12 position-relative">
              <label>ОПФ</label>
              <Field name="OPF" type="text" placeholder="50102" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="OPF" />
            </div>
            <div class="col-12 position-relative">
              <label>КПП</label>
              <Field name="KPP" type="text" placeholder="770201001" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="KPP" />
            </div>
            <div class="col-12 position-relative">
              <label>Фамилия</label>
              <Field name="Familiya" type="text" placeholder="Иванов" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="Familiya" />
            </div>
            <div class="col-12 position-relative">
              <label>Имя</label>
              <Field name="Imya" type="text" placeholder="Иван" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="Imya" />
            </div>
            <div class="col-12 position-relative">
              <label>Отчество</label>
              <Field name="Otchestvo" type="text" placeholder="Иванович" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="Otchestvo" />
            </div>
            <div class="col-12">
              <button type="submit" class="bt"><span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
              ></span>Дальше</button>
            </div>
          </div>
          <div class="row mt-5 justify-content-center" v-if="error !== ''">
            <div class="col-12">
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
import axios from 'axios';

export default {
  name: 'Main',
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

  methods: {
    showPassBt(){
      this.showPin=!this.showPin;
    },
    goToStep: function(step) {
      this.currentStep = step;
    },
    onSubmit(values) {
      this.loading=true;
/*      console.log(values, null, 2);
      values.email='dev@qrm.ooo';
      values.pin=11111;*/
      axios.post(
       'http://rurequest.qrservice.ru/post.php',
      {
          url:'auth',
          email: values.email,
          pin: values.pin,
          },

        ).then((response) => {
        this.loading=false;
        let data = response.data;
        console.log(data);

        }).catch((error) => {
            console.log(error);
        });



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
    validateText(value) {
      this.error='';
      // if the field is empty
      if (!value) {
        return 'Поле не заполнен';
      }
      if(value.length > 128 ||  value.length > 128){
        return 'Недопустимый формат';
      }

      return true;
    },
    validateINN(value) {

      if(value !== undefined){
        if( value.match(/[^0-9'".]/)){
          return 'ИНН должен состоять только из цифр';
        }
        console.log(value);
        this.error='';
        // if the field is empty

        if(value.length<10){
          return 'Слишком коротки ИНН';
        }
        if (!value) {
          return 'Введите ИНН';
        }
        return true;
      }
    }

  },

}
</script>
