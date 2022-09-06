<template>
    <div data-app>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="900px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mx-2" fab dark color="indigo" v-bind="attrs" v-on="on">
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Hayvan Bilgileri</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="İsim*" v-model="pet.name" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Renk" v-model="pet.color">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Boyut" v-model="pet.size" persistent-hint required>
                                    </v-text-field>
                                </v-col>
                                <v-container>
                                    <p>Doğum Tarihi*</p>
                                    <div>
                                        <div class="mb-6">Active picker: <code>{{ activePicker || 'null' }}</code></div>
                                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="auto">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="pet.birth_date" label="Birthday date"
                                                    prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                                </v-text-field>
                                            </template>
                                            <v-date-picker v-model="pet.birth_date" :active-picker.sync="activePicker"
                                                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                                min="1950-01-01" @change="save"></v-date-picker>
                                        </v-menu>
                                    </div>
                                </v-container>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Sahibi*" v-model="pet.owner" type="name" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Annesi" v-model="pet.parent" type="name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Irkı" v-model="pet.race" type="name"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-select @click="getIllness()" :items="getIllness.name" label="Hastalık" v-model="pet.illness" ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-autocomplete :items="['Elbise', 'Ayakkabı', 'Tasma']" label="Kıyafetler"
                                        v-model="pet.gadget" multiple></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-container>
                        <p>*Doldurulması zorunlu alandır. </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            İptal
                        </v-btn>
                        <v-btn color="blue darken-1" text @click.prevent="addDog">
                            Kaydet
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "addDogDialog",
    data() {
        return {
            activePicker: null,
            date: null,
            menu: false,
            dialog: false,
            pet: {
                name: null,
                color: null,
                size: null,
                birth_date: null,
                owner: null,
                parent: null,
                race: null,
                illness: null,
                gadget: null,

            },

        };
    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
    },
    methods: {
        addDog() {
            axios
                .post("http://127.0.0.1:8000/api/pet/", this.pet)
                .then(() => {
                    console.log(this.pet);
                    this.$router.push("/dog");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        save(date) {
            this.$refs.menu.save(date)
        },
        getIllness() {
            axios
                .get("http://127.0.0.1:8000/api/illness/", "name" )

        },
       
    }
}
</script>

  <style>
  .datetime {
      margin-right: 50px;
  }
  </style>