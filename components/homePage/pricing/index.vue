<template>
  <v-container
    fluid
    style="padding-top: 150px; padding-bottom: 140px; background-color: #f4f8fa"
  >
    <v-row class="align-center pl-10">
      <v-col cols="12" sm="3" class="d-flex align-center gap-section">
        <span class="number-circle">07</span>
        <span class="middle-divider"></span>
        <v-chip
          class="pa-4 font-weight-medium"
          style="font-size: 15px; color: white; background-color: black"
        >
          pricing
        </v-chip>
      </v-col>

      <v-col cols="12" sm="9" class="pl-sm-16">
        <h1 style="font-size: 54px; max-width: 700px">Affordable pricing</h1>
        <p
          class="font-weight-medium mt-3"
          style="font-size: 20px; color: #858c8f; max-width: 700px"
        >
          A glimpse into our creativity—exploring innovative designs, successful
          collaborations, and transformative digital experiences.
        </p>
      </v-col>
    </v-row>

    <v-row class="px-5 pt-10 align-stretch">
      <v-col cols="12" md="4">
        <HomePagePricingCard
          title="Launch"
          :price="699"
          description="Ideal for startups and small businesses taking their first steps online."
          :features="items"
        />
      </v-col>

      <v-col cols="12" md="4">
        <HomePagePricingCard
          title="Scale"
          :price="1699"
          :oldPrice="2199"
          :popular="true"
          description="Perfect for growing brands needing more customization and flexibility."
          :features="items"
        />
      </v-col>

      <v-col cols="12" md="4">
        <HomePagePricingCard
          title="Elevate"
          :price="3499"
          description="Best suited for established businesses wanting a fully tailored experience."
          :features="items"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="partners">More than 320 trusted partners & clients</p>
      </v-col>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="n in 5" :key="n">
            <v-sheet
              color="transparent"
              class="d-flex align-center justify-center py-15"
            >
              <v-img class="image" :src="`/images/pricing/partners-${n}.svg`" />
            </v-sheet>
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const items = [
  "Competitive research & insights",
  "Wireframing and prototyping",
  "Standard contact form integration",
  "Everything in the Launch Plan",
];

onMounted(() => {
  const swiper = new Swiper(".swiper", {
    modules: [Autoplay],
    loop: true,
    speed: 5000, // سرعة الحركة (كلما زاد الرقم قلت السرعة)
    autoplay: {
      delay: 0, // حركة مستمرة بدون توقف
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // يوقف الحركة عند الهوفر
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
</script>

<style scoped>
:deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}

.number-circle {
  background: #c1ff72;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #1f2a2e;
  font-size: 18px;
}

.gap-section {
  gap: 20px;
}

.middle-divider {
  height: 2px;
  background: #d3d4d6;
  width: 120px;
  display: block;
}
.partners {
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.image {
  transition: transform 0.3s ease-in-out;
  height: 40px;
}

.image:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}
</style>
