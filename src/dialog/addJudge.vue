<template>
    <div data-app>
      <v-container>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn id="btn" color="primary" dark v-bind="attrs" v-on="on">
              Hakem Ekle
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Hakem Bilgileri</span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="İsim*" v-model="judge.first_name" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Soyisim*" v-model="judge.last_name" required></v-text-field>
                </v-col>
                <v-container>
                  <p class="ml-2">Doğum Tarihi*</p>
                  <div>
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y
                      min-width="auto" :active-picker.sync="activePicker">
                      <template v-slot:activator="{ on, attrs }">
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="judge.birth_date" label="Doğum Tarihi" prepend-icon="mdi-calendar" readonly
                            v-bind="attrs" v-on="on">
                          </v-text-field>
                        </v-col>
                      </template>
                      <v-date-picker v-model="judge.birth_date"
                        :max="new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)"
                        min="1950-01-01" @change="handleChange"></v-date-picker>
                    </v-menu>
                  </div>
                </v-container>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Telefon No.*" type="number" v-model="judge.phone" pattern="[0-9]*"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field label="E-posta" type="email" v-model="judge.email" ></v-text-field>
                </v-col>
              </v-row>
              <p>*Doldurulması zorunlu alandır.</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                İptal
              </v-btn>
              <v-btn color="blue darken-1" text @click.prevent="addJudge">
                Kaydet
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "addJudgeDialog",
    data() {
      return {
        activePicker: false,
        menu: false,
        dialog: false,
        judge: {
          first_name: null,
          last_name: null,
          birth_date: null,
          phone: null,
          email: null,
        },
      };
    },
    watch: {
      menu(val) {
        val && setTimeout(() => (this.activePicker = "YEAR"));
      },
    },
  
  
  
    methods: {
      handleChange() {
        // handle change logic here
      },
      addJudge() {
        axios.post("http://127.0.0.1:8000/api/judge/", this.judge)
          .then(response => {
            this.judge.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
            location.reload()
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
  }
  
  </script>
  
  <style>
  .datetime {
    margin-right: 50px;
  }
  
  #btn {
    margin-top: 80px;
    justify-content: end;
  }
  </style>