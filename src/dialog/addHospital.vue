<template>
    <div data-app>
        <v-container>
            <v-dialog v-model="dialog" max-width="800px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn id="btn" style="background-color: #263A29;" dark v-bind="attrs" v-on="on">
                        Hastane Ekle
                    </v-btn>
                </template>
                <v-card style="background-color: #F2E3DB;">
                    <v-card-title>
                        <span class="text-h5">Hastane Bilgileri</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Hastane Adı*" v-model="hospital.name" required outlined ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Adres*" v-model="hospital.address" required outlined ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Telefon No.*" type="number" v-model="hospital.phone" pattern="[0-9]*"
                                    required outlined ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="city" item-value="id" item-text="name" label="Şehir"
                                    v-model="hospital.city" clearable outlined ></v-select>
                            </v-col>
                        </v-row>
                        <p>*Doldurulması zorunlu alandır.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            İptal
                        </v-btn>
                        <v-btn color="blue darken-1" text @click.prevent="addHospital">
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
    name: "addHospitalDialog",
    data() {
        return {
            menu: false,
            dialog: false,
            city: [],
            hospital: {
                name: null,
                address: null,
                phone: null,
                city: null,

            },
        };
    },

    methods: {
        handleChange() {
            // handle change logic here
        },
        addHospital() {
            axios.post("http://127.0.0.1:8000/api/hospital/", this.hospital)
                .then(response => {
                    this.hospital.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
                    location.reload()

                })

                .catch(error => {
                    console.log(error);
                });
        },
        getCity() {
            axios
                .get("http://127.0.0.1:8000/api/city/", this.city)
                .then((response) => {
                    this.city = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.getCity();
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