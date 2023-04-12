<template>
    <div>
        <v-col>
            <v-container>
                <v-card-title>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Arama" single-line
                        hide-details></v-text-field>
                </v-card-title>
                <v-data-table :headers="headers" :items="illness" :search="search" class="elevation-10">
                </v-data-table>
            </v-container>
        </v-col>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    name: "illnessTable",
    data() {
        return {
            search: "",
            illness: [],
            headers: [
                {
                    text: "Hastalık",
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                {
                    text: "Branş",
                    value: "branch.name",
                },
                {
                    text: "İlaç gerektiriyor mu?",
                    value: "is_medicine",
                    formatter: (value) => {
                        return value ? "evet" : "hayır";
                    }
                },

            ],
        };
    },
    methods: {
        getIllness() {
            axios({
                method: "get",
                url: "http://127.0.0.1:8000/api/illness/",
            }).then((response) => {
                this.illness = response.data;
            });
        },
    },
    mounted() {
        this.getIllness();
    },
};
</script>
  