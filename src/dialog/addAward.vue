<template>
    <div data-app>
      <v-container>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn id="btn" style="background-color: #263A29;" dark v-bind="attrs" v-on="on">
             Ödül Ekle
            </v-btn>
          </template>
          <v-card style="background-color: #F2E3DB;">
            <v-card-title>
              <span class="text-h5">Ödül Bilgileri</span>
            </v-card-title>
            <v-card-text>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="İsim*" v-model="award.name" required outlined ></v-text-field>
                </v-col>
              <p>*Doldurulması zorunlu alandır.</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                İptal
              </v-btn>
              <v-btn color="blue darken-1" text @click.prevent="addAward">
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
    name: "addAwardDialog",
    data() {
      return {
        menu: false,
        dialog: false,
        award: {
          name: null,
        },
      };
    },
  
    methods: {
      handleChange() {
        // handle change logic here
      },
      addAward() {  
        axios.post("http://127.0.0.1:8000/api/award/", this.award)
          .then(response => {
            this.award.pk = response.data.pk; 
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