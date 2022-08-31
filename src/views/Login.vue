<template>
  <v-app class="login">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card class="card pt-6 px-12">
              <v-card-text>
                <v-img class="img" src="@/assets/dog.avif" />
                <v-form>
                  <v-text-field
                    v-model="credentials.username"
                    label="Kullanıcı Adı"
                    name="username"
                    prepend-icon="mdi-account"
                    type="username"
                    class="rounded-0"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="credentials.password"
                    label="Şifre"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    class="rounded-0"
                    outlined
                  ></v-text-field>
                  <v-btn
                    class="rounded-0"
                    color="#000000"
                    @click.prevent="authenticate"
                    x-large
                    block
                    dark
                    >Giriş Yap</v-btn
                  >
                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
                    Hesabınız yok mu?
                    <a
                      class="pl-2"
                      style="#000"
                      @click="$router.push('/register')"
                      >Kayıt ol</a
                    >
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>



<script>
import axios from "axios";

export default {
  name: "loginPage",
  data() {
    return {
      credentials: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    async authenticate() {
      axios
        .post("http://127.0.0.1:8000/api/login/", this.credentials)
        .then((response) => {
          console.log(this.credentials);
          this.$store.dispatch("updateToken", response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.img {
  border-radius: 5px;
  height: 180px;
  margin-bottom: 20px;
}

.login {
  background: url("@/assets/color.png");
  background-size: cover;
  height: 100vh;
}

.card {
  background-color: #ede6db;
}
</style>