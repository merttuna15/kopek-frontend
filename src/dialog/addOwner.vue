<template>
    <div data-app>
        <v-container>
            <v-dialog v-model="dialog" max-width="800px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn id="btn" style="background-color: #263A29;" dark v-bind="attrs" v-on="on">
                        Sahip Ekle
                    </v-btn>
                </template>
                <v-card style="background-color: #F2E3DB;">
                    <v-card-title>
                        <span class="text-h5">Sahip Bilgileri</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row align-start justify="start">
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="İsim*" v-model="owner.first_name" required outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Soyisim*" v-model="owner.last_name" required outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Telefon No.*" type="number" v-model="owner.phone" pattern="[0-9]*"
                                    outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="E-posta" type="email" v-model="owner.email" outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="T.C Kimlik No." v-model="owner.tc" outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Adres" v-model="owner.address" outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="city" v-model="owner.city" item-value="id" item-text="name"
                                    outlined label="Şehir"></v-select>
                            </v-col>
                        </v-row>
                        <p>*Doldurulması zorunlu alandır.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            İptal
                        </v-btn>
                        <v-btn color="blue darken-1" text @click.prevent="addOwner">
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
    name: "addOwnerDialog",
    data() {
        return {
            activePicker: false,
            menu: false,
            dialog: false,
            city: [],
            owner: {
                first_name: null,
                last_name: null,
                phone: null,
                email: null,
                tc: null,
                address: null,
                city: null,
            },
        };
    },



    methods: {
        addOwner() {
            axios.post("http://127.0.0.1:8000/api/owner/", this.owner)
                .then(response => {
                    this.owner.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
                    location.reload()
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getCity() {
            axios.get("http://127.0.0.1:8000/api/city/", this.city)
                .then(response => {
                    this.city = response.data; // pk değerini API'den aldığımız değerle güncelle
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted() {
    this.getCity();
    
  }
}

</script>
  
<style>

</style>