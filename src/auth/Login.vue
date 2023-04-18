<template>
  <div>
    <v-app class="login">
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center" dense>
            <v-col cols="12" sm="8" md="4" lg="4">
              <v-card class="card pt-6 px-12">
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="credentials.username" label="Kullanıcı Adı" name="username"
                      prepend-icon="mdi-account" type="username" class="rounded-0" outlined required dark></v-text-field>
                    <v-text-field v-model="credentials.password" label="Şifre" name="password" prepend-icon="mdi-lock"
                      type="password" class="rounded-0" outlined required dark></v-text-field>
                    <v-btn class="rounded-0" color="#000000" @click.prevent="authenticate" x-large block dark>
                      Giriş Yap
                    </v-btn>
                    <v-card-actions class="text--white">
                      <v-spacer></v-spacer>
                      <a style="color: white;"> Hesabınız yok mu? </a>
                      <a class="pl-2" style="#000" @click="$router.push('/register')">Kayıt ol</a>
                    </v-card-actions>
                  </v-form>

                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
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
  methods : {
  authenticate() {
    axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem("access")
    axios
      .post('http://127.0.0.1:8000/api/v1/jwt/create/', this.credentials)
      .then(response => {
        console.log(response)
        const access = response.data.access
        const refresh = response.data.refresh
        this.$store.commit('setRefresh', refresh)

        this.$store.commit('setAccess', access)
        axios.defaults.headers.common['Authorization'] = "JWT" + access

        localStorage.setItem("access", access)
        localStorage.setItem("refresh", refresh)

        this.$router.push("/")


      })
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
  background: url("@/assets/playingdogs.jpg");
  background-size: cover;
  height: 100vh;
}

.card {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>