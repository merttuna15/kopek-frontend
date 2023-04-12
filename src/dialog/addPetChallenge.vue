<template>
    <div data-app>
        <v-container>
            <v-dialog v-model="dialog" max-width="800px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn id="btn" color="" dark v-bind="attrs" v-on="on">
                        Yarışma Ekle
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Yarışam Bilgileri</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="challenge" :key="petchallenge.challenge" item-value="id" item-text="name"
                                    label="Yarışma" v-model="petchallenge.challenge" multiple></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="pet" :key="petchallenge.pet" item-text="name" item-value="id"
                                    label="Katılan Hayvanlar" v-model="petchallenge.pet" clearable multiple>
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="race" :key="petchallenge.race" item-value="id" item-text="name"
                                    label="Irk" v-model="petchallenge.race" clearable></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="award" :key="petchallenge.award" item-value="id" item-text="name"
                                    label="Ödül" v-model="petchallenge.award" clearable></v-select>
                            </v-col>
                        </v-row>
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
    name: "addPetChallengeDialog",
    data() {
        return {
            menu: false,
            dialog: false,
            race: [],
            award: [],
            pet: [],
            challenge: [],
            petchallenge: {
                race: null,
                award: null,
                pet: null,
                challenge: null,
            },
        };
    },

    methods: {
        handleChange() {
            // handle change logic here
        },
        addAward() {
            axios.post("http://127.0.0.1:8000/api/petchallenge/", this.petchallenge)
                .then(response => {
                    this.petchallenge.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
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
        getRace() {
            axios
                .get("http://127.0.0.1:8000/api/race/", this.race)
                .then((response) => {
                    this.race = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getAward() {
            axios
                .get("http://127.0.0.1:8000/api/award/", this.award)
                .then((response) => {
                    this.award = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getChallenge() {
            axios
                .get("http://127.0.0.1:8000/api/challenge/", this.challenge)
                .then((response) => {
                    this.challenge = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.getPet();
        this.getRace();
        this.getAward();
        this.getChallenge();
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