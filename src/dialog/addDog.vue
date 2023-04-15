<template>
  <div data-app>
    <v-container>
      <v-dialog v-model="dialog" max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn id="btn" style="background-color: #263A29;" dark v-bind="attrs" v-on="on">
            Köpek Ekle
          </v-btn>
        </template>
        <v-card style="background-color: #F2E3DB;">
          <v-card-title>
            <span class="text-h5">Hayvan Bilgileri</span>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="İsim*" v-model="pet.name" required outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select :items="color" :key="color.name" item-value="id" item-text="name" label="Renk"
                  v-model="pet.color" outlined></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select :items="size" :key="pet.size" item-text="name" item-value="id" label="Boyut" v-model="pet.size"
                  outlined>
                </v-select>
              </v-col>
              <v-container>
                <p class="ml-2">Doğum Tarihi*</p>
                <div>
                  <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y
                    min-width="auto" :active-picker.sync="activePicker">
                    <template v-slot:activator="{ on, attrs }">
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="pet.birth_date" label="Doğum Tarihi" prepend-icon="mdi-calendar" readonly
                          v-bind="attrs" v-on="on">
                        </v-text-field>
                      </v-col>
                    </template>
                    <v-date-picker v-model="pet.birth_date"
                      :max="new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)"
                      min="1950-01-01" @change="handleChange"></v-date-picker>
                  </v-menu>
                </div>
              </v-container>
              <v-col cols="12" sm="6" md="4">
                <v-select :items="owner" :key="owner.id" item-value="id" item-text="first_name" label="Sahibi"
                  v-model="pet.owner" outlined></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select :items="dog" :key="pet.parent" item-text="name" item-value="id" label="Annesi"
                  v-model="pet.parent" clearable outlined>
                </v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select :items="race" :key="pet.race" item-value="id" item-text="name" label="Irkı" v-model="pet.race"
                  clearable outlined></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select :items="illness" :key="pet.illness" item-text="name" item-value="id" label="Hastalık"
                  v-model="pet.illness" clearable outlined></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select :items="gadgettype" :key="pet.gadget" item-value="id" label="Kıyafet" v-model="pet.gadget"
                  clearable outlined>
                  <template #item="{ item }">
                    <div>{{ item.collet }}, {{ item.dress }}, {{ item.shoes }}</div>
                  </template>
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
            <v-btn color="blue darken-1" text @click.prevent="addDog">
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
  name: "addDogDialog",
  data() {
    return {
      activePicker: false,
      menu: false,
      dialog: false,
      dog: [],
      owner: [],
      color: [],
      size: [],
      race: [],
      illness: [],
      gadgettype: [],
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
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },



  methods: {
    handleChange() {
      // handle change logic here
    },
    addDog() {
      this.pet.parent = this.pet.id || null;
      this.pet.illness = this.pet.illness.id

      axios.post("http://127.0.0.1:8000/api/pet/", this.pet, { illness: this.pet.illness })
        .then(response => {
          this.pet.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
          location.reload()
        })
        .catch(error => {
          console.log(error);
        });
    },
    getIllness() {
      axios
        .get("http://127.0.0.1:8000/api/illness/", this.illness)
        .then((response) => {
          this.illness = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getGadget() {
      axios
        .get("http://127.0.0.1:8000/api/gadgettype/", this.gadgettype)
        .then((response) => {
          this.gadgettype = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDog() {
      axios
        .get("http://127.0.0.1:8000/api/pet/", this.dog)
        .then((response) => {
          this.dog = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOwner() {
      axios
        .get("http://127.0.0.1:8000/api/owner/", this.owner)
        .then((response) => {
          this.owner = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getColor() {
      axios
        .get("http://127.0.0.1:8000/api/color/", this.color)
        .then((response) => {
          this.color = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSize() {
      axios
        .get("http://127.0.0.1:8000/api/size/", this.size)
        .then((response) => {
          this.size = response.data;
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
  },
  mounted() {
    this.getIllness();
    this.getGadget();
    this.getDog();
    this.getOwner();
    this.getSize();
    this.getColor();
    this.getRace();
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