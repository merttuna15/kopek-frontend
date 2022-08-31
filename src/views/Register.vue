<template>
  <v-app class="register">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card class="card pt-6 px-12">
              <v-card-text>
                <img class="img" src="@/assets/dog.avif" />
                <v-form @submit.prevent="submitForm">
                  <v-text-field
                    v-model="credentials.username"
                    label="Kullanıcı Adı"
                    name="username"
                    prepend-icon="mdi-account"
                    type="name"
                    class="rounded-0"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="credentials.name"
                    label="İsim"
                    name="name"
                    prepend-icon="mdi-account"
                    type="name"
                    class="rounded-0"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="credentials.email"
                    label="E-posta"
                    name="email"
                    prepend-icon="mdi-mail"
                    type="email"
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
                    x-large
                    block
                    dark
                    @click="registerForm"
                    >Kayıt ol</v-btn
                  >
                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
                    Hesabınız var mı?
                    <a class="pl-2" style="#000" @click="$router.push('/login')"
                      >Giriş yap</a
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
  name: "registerPage",
  data() {
    return {
      credentials: {
        username: null,
        password: null,
        name: null,
        email: null,
      },
    };
  },
  methods: {
    registerForm() {
      axios
        .post("http://127.0.0.1:8000/user/register/", {
          ...this.credentials,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/login");
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

.register {
  background: url("@/assets/color.png");
  background-size: cover;
  height: 100vh;
}

.card {
  background-color: #ede6db;
}
</style>