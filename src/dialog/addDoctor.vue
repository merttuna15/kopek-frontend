<template>
    <div data-app>
      <v-container>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn id="btn" color="" dark v-bind="attrs" v-on="on">
              Doktor Ekle
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Doktor Bilgileri</span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="İsim*" v-model="doctor.first_name" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Soyisim*"  v-model="doctor.last_name" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Telefon No.*" type="number" v-model="doctor.phone" pattern="[0-9]*"  required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field label="E-mail" type="email" v-model="doctor.email"  required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select :items="branch" item-text="name" item-value="id" label="Branş" v-model="doctor.branch"
                     clearable>
                  </v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select :items="hospital"  item-value="id" item-text="name" label="Hastane" v-model="doctor.hospital"
                    clearable></v-select>
                </v-col>
              </v-row>
              <p>*Doldurulması zorunlu alandır.</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                İptal
              </v-btn>
              <v-btn color="blue darken-1" text @click.prevent="addDoctor">
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
    name: "addDoctorDialog",
    data() {
      return {
        menu: false,
        dialog: false,
        dog: [],
        branch:[],
        hospital:[],
        doctor: {
          first_name: null,
          last_name: null,
          phone: null,
          email: null,
          branch: null,
          hospital: null,
          
        },
      };
    },
  
    methods: {
      handleChange() {
        // handle change logic here
      },
      addDoctor() {  
        axios.post("http://127.0.0.1:8000/api/doctor/", this.doctor)
          .then(response => {
            this.doctor.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
          location.reload()

          })
          .catch(error => {
            console.log(error);
          });
      },
      getBranch() {
        axios
          .get("http://127.0.0.1:8000/api/branch/", this.branch)
          .then((response) => {
            this.branch = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getHospital() {
        axios
          .get("http://127.0.0.1:8000/api/hospital/", this.hospital)
          .then((response) => {
            this.hospital = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted() {
      this.getBranch();
      this.getHospital();
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