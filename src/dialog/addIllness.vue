<template>
    <div data-app>
      <v-container>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn id="btn" color="" dark v-bind="attrs" v-on="on">
             Hastalık Ekle
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Hastalık Bilgileri</span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="İsim*" v-model="illness.name" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select :items="branch" :key="illness.branch" item-value="id" label="Branş" v-model="illness.branch" item-text="name"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-switch label="İlaç kullanılarak mı tedavi ediliyor?" v-model="illness.is_medicine"></v-switch>
                </v-col>
              </v-row>
              <p>*Doldurulması zorunlu alanlar işaretlidir.</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                İptal
              </v-btn>
              <v-btn color="blue darken-1" text @click.prevent="addIllness">
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
    name: "addIllnessDialog",
    data() {
      return {
        menu: false,
        dialog: false,
        branch: [],
        illness: {
          name: null,
          is_medicine: false,
          branch: null,
        },
      };
    },
  
    methods: {
      addIllness() {
        axios
          .post("http://127.0.0.1:8000/api/illness/", this.illness)
          .then((response) => {
            this.illness.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getBranch() {
        axios
          .get("http://127.0.0.1:8000/api/branch/")
          .then((response) => {
            this.branch = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted() {
      this.getBranch();
    },
  };
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
  