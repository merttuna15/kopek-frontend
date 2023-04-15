<template>
    <div data-app>
      <v-container>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn id="btn" style="background-color: #263A29;" dark v-bind="attrs" v-on="on">
             Şehir Ekle
            </v-btn>
          </template>
          <v-card style="background-color: #F2E3DB;">
            <v-card-title>
              <span class="text-h5">Şehir Bilgileri</span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="İsim*" v-model="city.name" outlined  required></v-text-field>
                </v-col>
                <v-col  cols="12" sm="6" md="4">
                    <v-select :items="country" :key="city.country" item-value="id" label="Ülke*" v-model="city.country"
                  clearable item-text="name" outlined >
                </v-select>
                </v-col>
              </v-row>
              <p>*Doldurulması zorunlu alandır.</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                İptal
              </v-btn>
              <v-btn color="blue darken-1" text @click.prevent="addCity">
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
    name: "addCityDialog",
    data() {
      return {
        menu: false,
        dialog: false,
        country: [],
        city: {
          name: null,
          country: null,
        },
      };
    },
  
    methods: {
      handleChange() {
        // handle change logic here
      },
      addCity() {  
        axios.post("http://127.0.0.1:8000/api/city/", this.city)
          .then(response => {
            this.city.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
          location.reload()

          })
          .catch(error => {
            console.log(error);
          });
      },
      getCountry() {  
        axios.get("http://127.0.0.1:8000/api/country/", this.country)
          .then(response => {
            this.country = response.data;

          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    mounted () {
        this.getCountry()
    }
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