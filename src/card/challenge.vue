<template>
    <div>
        <v-container class="my-10 mr-5 mt-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="challenge in challenges" :key="challenge.name">
                    <v-card color="#A8E890" elevation="5" flat :class="{ 'text-xs-center': true, 'ma-3': true }">
                        <v-container class="name">{{ challenge.name }}</v-container>
                        <v-card-text>
                            <p v-if="challenge.address">Adres: {{ challenge.address }}</p>
                            <p v-if="challenge.city">Şehir: {{ challenge.city.name }}</p>
                            <p v-if="challenge.country">Ülke: {{ challenge.country.name }}</p>
                            <template>
                                <div v-if="challenge.judge">
                                    <span>Hakemler: </span>
                                    <span v-for="(judge, index) in challenge.judge" :key="index">
                                        {{ judge.first_name }} {{ judge.last_name }}
                                        <span v-if="index < challenge.judge.length - 1">, </span>
                                    </span>
                                </div>
                            </template>
                            <template v-if="challenge.pet">
                                <div>
                                Katılan Hayvanlar
                                <span>{{ challenge.pet.map(p => p.name).join(", ") }}</span>
                            </div>
                            </template>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    name: "challengeCard",
    data() {
        return {
            challenges: [],
        };
    },
    methods: {
        getChallenge() {
            axios({
                method: "get",
                url: "http://127.0.0.1:8000/api/challenge/",
            }).then((response) => {
                this.challenges = response.data;
                console.log(response.data);
            });
        },
    },
    mounted() {
        this.getChallenge();
    },
};
</script>
  
<style>
.name {
    margin-left: 80px;
    font-size: large;
}
</style>
  