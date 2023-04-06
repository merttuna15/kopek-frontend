<template>
  <div>
    <v-container>
      <v-carousel width="10" height="400" class="carousel">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "homePageCor",
  data() {
    return {
      items: [
        {
          src: "https://listelist.com/wp-content/uploads/2019/07/kopek_manset.jpg",
        },
        {
          src: "https://listelist.com/wp-content/uploads/2019/07/kopek_2.jpg",
        },
        {
          src: "https://listelist.com/wp-content/uploads/2019/07/kopek_7.jpg",
        },
        {
          src: "https://listelist.com/wp-content/uploads/2019/07/kopek_12.jpg"
        },
        {
          src: "https://listelist.com/wp-content/uploads/2019/07/kopek_15.jpg"
        },
        {
          src: "https://listelist.com/wp-content/uploads/2019/07/kopek_21.jpg"
        }
      ],
    };
  },
};
</script>

<style>
.carousel {
  margin-top: 110px;
  align-items: center;
  justify-content: center;
}
</style>