<template>
  <v-row>
    <v-col>
      <v-sheet height="500">
        <v-calendar :now="today" :value="today" color="primary">
          <template v-slot:day="{ past, date }">
            <v-row class="fill-height">
              <template v-if="past && tracked[date]">
                <v-sheet
                  v-for="(percent, i) in tracked[date]"
                  :key="i"
                  :title="category[i]"
                  :color="colors[i]"
                  :width="`${percent}%`"
                  height="100%"
                  tile
                ></v-sheet>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name:"dogCalendar",
  data: () => ({
    return {
      dog: [],
    }
  }),

  methods: {
    getDog() {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/pet/",
      }).then((response) => {
        this.dog = response.data;
        console.log(response.data);
      });
    },
}
</script>