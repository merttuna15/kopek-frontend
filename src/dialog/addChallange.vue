<template>
    <div app-data>
        <v-container>
            <v-dialog v-model="dialog" max-width="800px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn id="btn" style="background-color: #263A29;" dark  v-bind="attrs" v-on="on">
                        Yarışma Ekle
                    </v-btn>
                </template>
                <v-card style="background-color: #F2E3DB;">
                    <v-card-title>
                        <span class="text-h5">Yarışma Bilgileri</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Yarışma Adı*" v-model="challenge.name" outlined  required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Adres*" v-model="challenge.address" required outlined ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="city" item-value="id" item-text="name" label="Şehir"
                                    v-model="challenge.city" clearable outlined ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="city" item-value="id" item-text="name" label="Ülke"
                                    v-model="challenge.country" clearable outlined ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="judge" item-value="id" item-text="full_name" label="Hakemler*"
                                    v-model="challenge.judge" clearable outlined  multiple>
                                    <template v-slot:item="{ item }">
                                        <span>{{ item.full_name }}</span>
                                    </template>
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="pet" item-value="id" item-text="name" label="Katılan Hayvanlar"
                                    v-model="challenge.pet" outlined  clearable multiple>
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
                        <v-btn color="blue darken-1" text @click.prevent="addChallenge">
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
    name: "addChallengeDialog",
    data() {
        return {
            menu: false,
            dialog: false,
            city: [],
            country: [],
            pet: [],
            judge: [],
            challenge: {
                name: null,
                address: null,
                country: null,
                city: null,
                judge: null,
                pet: null,
            },
        };
    },

    methods: {
        handleChange() {
            // handle change logic here
        },
        addChallenge() {
            axios.post("http://127.0.0.1:8000/api/challenge/", this.challenge)
                .then(response => {
                    this.challenge.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
                    location.reload()
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getPet() {
            axios
                .get("http://127.0.0.1:8000/api/pet/", this.pet)
                .then((response) => {
                    this.pet = response.data;
                })
                .catch((error) => {
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
        getCountry() {
            axios
                .get("http://127.0.0.1:8000/api/country/", this.country)
                .then((response) => {
                    this.country = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getJudge() {
            axios
                .get("http://127.0.0.1:8000/api/judge/", this.judge)
                .then((response) => {
                    // Transform each item in the array to include a `full_name` property
                    this.judge = response.data.map((item) => ({
                        ...item,
                        full_name: item.first_name + ' ' + item.last_name
                    }));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.getCountry()
        this.getCity()
        this.getJudge()
        this.getPet()
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