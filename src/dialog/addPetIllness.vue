<template>
  <div data-app>
    <v-container>
      <v-dialog v-model="dialog" max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn id="btn" style="background-color: #263A29;" dark v-bind="attrs" v-on="on">
            Köpeğe Özel Hastalık Ekle
          </v-btn>
        </template>
        <v-card style="background-color: #F2E3DB;">
          <v-card-title>
            <span class="text-h5">Hastalık Bilgileri</span>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4" class="left-align">
                <v-select v-model="petillness.category" :items="category" label="Kategori" item-text="text"
                  item-value="value" outlined></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="left-align">
                <v-select :items="pet" :key="pet.id" item-text="name" item-value="id" label="Köpek"
                  v-model="petillness.pet" outlined  clearable>
                </v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="left-align">
                <v-select :items="type" :key="type.id" item-value="id" item-text="name" label="Irkı"
                  v-model="petillness.type" clearable outlined></v-select>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              İptal
            </v-btn>
            <v-btn color="blue darken-1" text @click.prevent="addPetIllness">
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
  name: "addPetIllnessDialog",
  data() {
    return {
      menu: false,
      dialog: false,
      category: [
        "Stomach",
        "Heart",
        "Bowel",
        "Brain",
        "Bone",
        "Muscle",
      ],
      type: [],
      pet: [], 
      petillness: {
        category: null,
        type: null,
        pet: null,
      },
    };
  },
  methods: {
    handleChange() {
      // handle change logic here
    },
    addPetIllness() {
      axios
        .post("http://127.0.0.1:8000/api/petillness/", this.petillness)
        .then((response) => {
          this.petillness.pk = response.data.pk; // pk değerini API'den aldığımız değerle güncelle
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getIllnessType() {
      axios
        .get("http://127.0.0.1:8000/api/illnesstype/")
        .then((response) => {
          this.type = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPet() {
      axios
        .get("http://127.0.0.1:8000/api/pet/")
        .then((response) => {
          this.pet = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getPet();
    this.getIllnessType();
  },
};
</script>

  
<style>

#btn {
  margin-top: 80px;
  justify-content: end;
}
</style>