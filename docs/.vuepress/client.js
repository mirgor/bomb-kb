import { defineClientConfig } from "@vuepress/client";
import MyLayout from "./theme/layouts/MyLayout.vue";
import Carousel from "./components/Carousel.vue";
import Slide from "./components/Slide.vue";
import CarouselView from "./components/CarouselView.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("MyLayout", MyLayout);
    app.component("Carousel", Carousel);
    app.component("Slide", Slide);
    app.component("CarouselView", CarouselView);
  },
});
