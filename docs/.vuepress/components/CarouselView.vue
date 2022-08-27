<template>
  <div class="home">
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <!-- <img :src="require(`./assets/${slide}.png`)" alt="" /> -->
          <img :src="$withBase(`./assets/${slide}.png`)" alt="foo">
          <!-- <img v-bind:src="`../public/assets/mon-50_1.png`" alt="" /> -->

          <!-- <img src="https://placeimg.com/400/300/animals" /> -->
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import Slide from "./Slide.vue";
export default {
  name: "Home",
  components: { Carousel, Slide },
  setup() {
    const carouselSlides = ["mon-50_1", "mon-50_2", "mon-50_3"];
    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>