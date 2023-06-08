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
              <div class="form_toggle">
                <div class="form_toggle-item item-1-col-3">
                  <input id="fid-0-1" type="radio" name="opf" v-model="opf" value="12300"  />
                  <label for="fid-0-1">ООО</label>
                </div>
                <div class="form_toggle-item item-1-col-3">
                  <input id="fid-0-2" type="radio" name="opf" v-model="opf" value="50102" />
                  <label for="fid-0-2">ИП</label>
                </div>
                <div class="form_toggle-item item-1-col-3">
                  <input id="fid-0-3" type="radio" name="opf" v-model="opf" value="0" />
                  <label for="fid-0-3">СЗ</label>
                </div>
              </div>
            </div>

            <div class="col-12 position-relative">
              <label>ИНН</label>
              <Field name="inn" type="number" placeholder="7812345678" class="input-control"  :rules="validateINN" />
              <ErrorMessage class="input-error" name="inn" />
            </div>
            <div class="col-12 position-relative" v-if="opf !== '0'">
              <label>Наименование</label>
              <Field name="name" type="text" placeholder="обязателен для ИП и ООО" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="name" />
            </div>
            <div class="col-12 position-relative" v-if="opf !== '0'">
              <label>ОГРН</label>
              <Field name="ogrn" type="text" placeholder="1012345678910" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="ogrn" />
            </div>
            <div class="col-12 position-relative">
              <label>КПП</label>
              <Field name="kpp" type="text" placeholder="770201001" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="kpp" />
            </div>
            <div class="col-12 position-relative">
              <label>Фамилия</label>
              <Field name="personsData[surname]" type="text" placeholder="Иванов" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[surname]" />
            </div>
            <div class="col-12 position-relative">
              <label>Имя</label>
              <Field name="personsData[name]" type="text" placeholder="Иван" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[name]" />
            </div>
            <div class="col-12 position-relative">
              <label>Отчество</label>
              <Field name="personsData[patronymicName]" type="text" placeholder="Иванович" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[patronymicName]" />
            </div>
            <div class="col-12 position-relative">
              <label>Пол</label>
              <div class="form_toggle">
                <div class="form_toggle-item item-1">
                  <input id="fid-1" type="radio" name="gender" v-model="gender" value="male"  />
                  <label for="fid-1">Мужской</label>
                </div>
                <div class="form_toggle-item item-2">
                  <input id="fid-2" type="radio" name="gender" v-model="gender" value="female" />
                  <label for="fid-2">Женский</label>
                </div>
              </div>
            </div>
            <div class="col-12 position-relative">
              <label>Тип должностного лица</label>
              <div class="form_toggle">
                <div class="form_toggle-item item-1-col-4">
                  <input id="fid-1-1" type="radio" name="persontype" v-model="persontype" value="BENEFIZIAR "  />
                  <label for="fid-1-1">Бенефициар</label>
                </div>
                <div class="form_toggle-item item-1-col-4">
                  <input id="fid-1-2" type="radio" name="persontype" v-model="persontype" value="FOUNDER"  />
                  <label for="fid-1-2">Учредитель</label>
                </div>
                <div class="form_toggle-item item-1-col-4">
                  <input id="fid-1-3" type="radio" name="persontype" v-model="persontype" value="BOSS"  />
                  <label for="fid-1-3">Директор</label>
                </div>
                <div class="form_toggle-item item-1-col-4">
                  <input id="fid-1-4" type="radio" name="persontype" v-model="persontype" value="Self-employment"  />
                  <label for="fid-1-4">Самозанятый</label>
                </div>
              </div>
            </div>
            <div class="col-12 position-relative">
              <label>СНИЛС</label>
              <Field name="personsData[snils]" type="text" placeholder="222-233-445 85" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[snils]" />
            </div>
            <div class="col-12 position-relative">
              <label>Телефон</label>
              <Field name="personsData[phone]" type="text" placeholder="+7 "  class="input-control" v-maska data-maska="+7##########" :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[phone]" />
            </div>
            <div class="col-12 position-relative">
              <label>Электронная почта</label>
              <Field name="personsData[email]" type="email" placeholder="example@gmail.com" class="input-control"  :rules="validateEmail" />
              <ErrorMessage class="input-error" name="personsData[email]" />
            </div>
            <div class="col-12 position-relative">
              <label>Место рождения</label>
              <Field name="personsData[birthCity]" type="text" placeholder="город" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[birthCity]" />
            </div>
            <div class="col-12 position-relative">
              <label>Дата рождения</label>
              <Field name="personsData[birthDate]" type="text" placeholder="ДД.ММ.ГГГГ" class="input-control"  v-maska data-maska="##.##.####"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[birthDate]" />
            </div>
            <div class="col-12 position-relative">
              <label>Тип паспорта</label>
              <div class="form_toggle">
                <div class="form_toggle-item item-1">
                  <input id="fid-2-1" type="radio" name="personsData[document][documentType]" v-model="documentType" value="21"  />
                  <label for="fid-2-1">Паспорт гражданина РФ</label>
                </div>
                <div class="form_toggle-item item-2">
                  <input id="fid-2-2" type="radio" name="personsData[document][documentType]" v-model="documentType" value="10" />
                  <label for="fid-2-2">Иностранный паспорт</label>
                </div>
              </div>
            </div>
            <div class="col-12 position-relative" v-if="documentType !== '10'">
              <label>Серия документа</label>
              <Field name="personsData[document][docSeries]" type="text" placeholder="10 20" class="input-control" v-maska data-maska="## ##" :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[document][docSeries]" />
            </div>
            <div class="col-12 position-relative">
              <label>Номер документа</label>
              <Field name="personsData[document][docNumber]" type="text" placeholder="123 456" class="input-control"  v-maska data-maska="### ####" :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[document][docNumber]" />
            </div>
            <div class="col-12 position-relative">
              <label>Дата документа</label>
              <Field name="personsData[document][docDate]" type="text" placeholder="ДД.ММ.ГГГГ" class="input-control" v-maska data-maska="##.##.####"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[document][docDate]" />
            </div>
            <div class="col-12 position-relative" v-if="documentType !== '10'">
              <label>Место выдачи</label>
              <Field name="personsData[document][docCity]" type="text" placeholder="город" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[document][docCity]" />
            </div>
            <div class="col-12 position-relative" v-if="documentType !== '10'">
              <label>Кем выдан</label>
              <Field name="personsData[document][docPlace]" type="text" placeholder="000-000" class="input-control" v-maska data-maska="###-###"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[document][docPlace]" />
            </div>
            <div class="col-12 position-relative">
              <label>Регион</label>
              <Field name="personsData[adress][area]" type="text" placeholder="регион" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[adress][area]" />
            </div>
            <div class="col-12 position-relative">
              <label>Район</label>
              <Field name="personsData[adress][district]" type="text" placeholder="район" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[adress][district]" />
            </div>
            <div class="col-12 position-relative">
              <label>Город</label>
              <Field name="personsData[adress][city]" type="text" placeholder="город" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[adress][city]" />
            </div>
            <div class="col-12 position-relative">
              <label>Индекс</label>
              <Field name="personsData[adress][zip]" type="text" placeholder="196 191" class="input-control" v-maska data-maska="### ###"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[adress][zip]" />
            </div>
            <div class="col-12 position-relative">
              <label>Улица</label>
              <Field name="personsData[adress][street]" type="text" placeholder="улица" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[adress][street]" />
            </div>
            <div class="col-12 position-relative">
              <label>Номер дома</label>
              <Field name="personsData[adress][house]" type="text" placeholder="номер дома" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[adress][house]" />
            </div>
            <div class="col-12 position-relative">
              <label>Номер квартиры</label>
              <Field name="personsData[adress][flat]" type="text" placeholder="номер квартиры" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="personsData[adress][flat]" />
            </div>
            <div class="col-12 position-relative">
              <label>Информация по услуге</label>
              <Field name="informaciya_po_usluge" type="text" placeholder="минимум 1 услуга" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="informaciya_po_usluge" />
            </div>

            <div class="col-12 position-relative">
              <label>Тип услуги</label>
              <div class="form_toggle">
                <div class="form_toggle-item item-1">
                  <input id="fid-3-1" type="radio" name="services[type]" v-model="services_type" value="trade"  />
                  <label for="fid-3-1">trade – торговый эквайринг</label>
                </div>
                <div class="form_toggle-item item-2">
                  <input id="fid-3-2" type="radio" name="services[type]" v-model="services_type" value="itrade" />
                  <label for="fid-3-2">itrade – интернет эквайринг</label>
                </div>
              </div>
            </div>

            <div class="col-12 position-relative">
              <label>Подключить СБП</label>
              <div class="form_toggle">
                <div class="form_toggle-item item-1">
                  <input id="fid-4-1" type="radio" name="services[sbp]" v-model="services_sbp" value="true"  />
                  <label for="fid-4-1">Да</label>
                </div>
                <div class="form_toggle-item item-2">
                  <input id="fid-4-2" type="radio" name="services[sbp]" v-model="services_sbp" value="false" />
                  <label for="fid-4-2">Нет</label>
                </div>
              </div>
            </div>

            <div class="col-12 position-relative">
              <label>Подключить РКО</label>
              <div class="form_toggle">
                <div class="form_toggle-item item-1">
                  <input id="fid-5-1" type="radio" name="services[rko]" v-model="services_rko" value="true"  />
                  <label for="fid-5-1">Да</label>
                </div>
                <div class="form_toggle-item item-2">
                  <input id="fid-5-2" type="radio" name="services[rko]" v-model="services_rko" value="false" />
                  <label for="fid-5-2">Нет</label>
                </div>
              </div>
            </div>

            <div class="col-12 position-relative">
              <label>Номер счета</label>
              <Field name="nomer_scheta" type="text" placeholder="40802" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="nomer_scheta" />
            </div>
            <div class="col-12 position-relative">
              <label>БИК банка</label>
              <Field name="bik_banka" type="text" placeholder="в котором открыт счет" class="input-control"  :rules="validateText" />
              <ErrorMessage class="input-error" name="bik_banka" />
            </div>

            <div class="col-12 position-relative">
              <label>Комментарий для сотрудников банка</label>
              <Field v-slot="{ field }" v-model="kommentariy" name="kommentariy"   >
                <textarea v-bind="field" name="kommentariy" placeholder="введите комментарий" class="input-control"/>
              </Field>
            </div>
            <div class="col-12 position-relative">
              <label>Почта партнера</label>
              <Field name="pochta_partnera" type="text" placeholder="в случае необходимости связаться" class="input-control"  :rules="validateEmail" />
              <ErrorMessage class="input-error" name="pochta_partnera" />
            </div>

            <div class="col-12 position-relative">
              <label class="d-flex align-items-center checkBlockWrap" >
                <Field v-slot="{ field}" v-model="rule_cheked" name="rules"  :rules="validateChekbox" >
                <input v-bind="field" type="checkbox" name="rules" class="d-none" v-model="rule_cheked" checked  />
                  <div class="checkBloc ">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5.4L5.4 9.8L12 1" stroke="#9BBE42" stroke-width="2"/>
                    </svg>
                  </div>
                </Field>
                <span > Согласен на обработку <a href="#">персональных данных</a></span>
                <ErrorMessage class="input-error" name="rules" />
              </label>

            </div>


            <div class="col-12 mt-2">
              <button type="submit" class="bt"><span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
              ></span>Отправить заявку</button>
            </div>
            <div class="col-12">
              <div class="sub_text">Нажимая на кнопку вы подтверждаете правильность введенных данных</div>
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
import authHeader from "@/services/auth-header";

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
      opf:12300,
      gender:'male',
      persontype:'Бенефициар',
      documentType:'21',
      services_type:'trade',
      services_sbp: true,
      services_rko: true,
      kommentariy:'',
      rule_cheked: false

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

      values.pol = this.Pol;
      values.persontype = this.persontype;
      values.tip_pasporta = this.tip_pasporta;
      values.tip_uslugi = this.tip_uslugi;
      values.podklyuchit_sbp = this.podklyuchit_sbp;
      values.podklyuchit_rko = this.podklyuchit_rko;
      values.kommentariy = this.kommentariy;
      values.rule_cheked = this.rule_cheked;

      let dataPost = {
          url: 'send_form',
          data: values,
          headers: authHeader()
      };

      console.log('values', values);
      console.log('dataPost', dataPost);




/*      console.log(values, null, 2);
      values.email='dev@qrm.ooo';
      values.pin=11111;*/
      axios.post(
       'http://rurequest.qrservice.ru/post.php',
          dataPost,
        ).then((response) => {
          this.loading=false;
          let data = response.data;
          if(data.success ==='ok'){

            this.$router.push("/main");
          }
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
        return 'Поле не заполнено';
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

        this.error='';
        // if the field is empty

        if(value.length<10){
          return 'Слишком коротки ИНН';
        }
        if(value.length>12){
          return 'Слишком длинный ИНН';
        }
        if (!value) {
          return 'Введите ИНН';
        }
        return true;
      } else {
        return 'Поле не заполнено';
      }
    },
    validateChekbox(value) {
      if(!value){
        return 'Вы должны дать согласие на обработку данных.';
      }
      return true;
      //console.log(value);
    }

  },
  beforeCreate() {
    axios.post(
        'http://rurequest.qrservice.ru/post.php',
        {
          url: 'check',
          headers: authHeader()
        },
    ).then((response) => {
      console.log('response.data', response.data);
      if(response.data === true){
        this.$router.push("/result");
      }
    }).catch((error) => {
      console.log(error);
    });
  },

}
</script>
