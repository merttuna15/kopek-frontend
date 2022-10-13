<template>
  <div data-app>
    <v-container>
      <v-dialog max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn id="btn" color="primary" dark v-bind="attrs" v-on="on">
            Köpek Ekle
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Hayvan Bilgileri</span>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="İsim*"
                  v-model="pet.name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="color"
                  :key="color.name"
                  item-text="name"
                  label="Renk"
                  v-model="pet.color"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="size"
                  :key="pet.size"
                  item-text="size"
                  label="Boyut"
                  v-model="pet.size"
                >
                </v-select>
              </v-col>
              <v-container>
                <p class="ml-2">Doğum Tarihi*</p>
                <div>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="pet.birth_date"
                          label="Doğum Tarihi"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        >
                        </v-text-field>
                      </v-col>
                    </template>
                    <v-date-picker
                      v-model="pet.birth_date"
                      :active-picker.sync="activePicker"
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substr(0, 10)
                      "
                      min="1950-01-01"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </div>
              </v-container>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="owner"
                  :key="owner.first_name"
                  item-text="first_name"
                  label="Sahibi"
                  v-model="pet.owner"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="dog"
                  :key="pet.name"
                  item-text="name"
                  label="Annesi"
                  v-model="pet.parent"
                  clearable
                >
                </v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Irkı"
                  v-model="pet.race"
                  type="name"
                ></v-text-field>
              </v-col>
              <!-- HASTALIK -->
              <div>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    :items="illness"
                    :key="illness.name"
                    item-text="name"
                    label="Hastalık"
                    v-model="pet.illness"
                    clearable
                  >
                  </v-select>
                </v-col>
              </div>
              <!-- <div>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    :items="gadgettype"
                    :key="gadgettype.dress"
                    item-text="dress"
                    label="Elbise"
                    v-model="pet.gadgettype"
                    clearable
                  >
                  </v-select>
                </v-col>
              </div>
              <div>
                <v-col cols="15" sm="6" md="4">
                  <v-select
                    :items="gadgettype"
                    :key="gadgettype.shoes"
                    item-text="shoes"
                    label="Ayakkabı"
                    v-model="pet.gadgettype"
                    clearable
                  >
                  </v-select>
                </v-col>
              </div>
              <div>
                <v-col cols="15" sm="6" md="4">
                  <v-select
                    :items="gadgettype"
                    :key="gadgettype"
                    item-text="collet"
                    label="Tasma"
                    v-model="pet.gadgettype"
                    clearable
                  >
                  </v-select>
                </v-col>
              </div> -->
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
      illness: [],
      gadgettype: [],
      date: null,
      menu: false,
      dialog: false,
      dog: [],
      owner: [],
      color: [],
      size: [],
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
    addDog() {
      axios
        .post("http://127.0.0.1:8000/api/pet/", this.pet)
        .then(() => {
          this.$router.push("/dog");
        })
        .catch((error) => {
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
        .get("http://127.0.0.1:8000/api/owner/", this.color)
        .then((response) => {
          this.color = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSize() {
      axios
        .get("http://127.0.0.1:8000/api/owner/", this.size)
        .then((response) => {
          this.size = response.data;
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
  },
};
</script>

<style>
.datetime {
  margin-right: 50px;
}

#btn {
  margin-top: 80px;
  margin-left: 1030px;
}
</style>