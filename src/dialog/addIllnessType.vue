<template>
    <div data-app>
      <v-container>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn id="btn" style="background-color: #263A29;" dark v-bind="attrs" v-on="on">
             Hastalık Tipi Ekle
            </v-btn>
          </template>
          <v-card style="background-color: #F2E3DB;"> 
            <v-card-title>
              <span class="text-h5">Hastalık Tipi Bilgileri</span>
            </v-card-title>
            <v-card-text>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="İsim*" v-model="illnesstype.name" required outlined ></v-text-field>
                </v-col>
              <p>*Doldurulması zorunlu alandır.</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                İptal
              </v-btn>
              <v-btn color="blue darken-1" text @click.prevent="addIllnessType">
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
    name: "addIllnessTypeDialog",
    data() {
      return {
        menu: false,
        dialog: false,
        illnesstype: {
          name: null,
        },
      };
    },
  
    methods: {
      handleChange() {
        // handle change logic here
      },
      addIllnessType() {  
        axios.post("http://127.0.0.1:8000/api/illnesstype/", this.illnesstype)
          .then(response => {
            this.illnesstype.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
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