<template>
  <v-container fluid class="pl-10 pt-0" style="margin-top: 170px">
    <v-row class="align-center">
      <v-col cols="3" class="d-flex align-center gap-section">
        <span class="number-circle">02</span>
        <span class="middle-divider"></span>
        <v-chip
          class="pa-4 font-weight-medium"
          style="font-size: 15px; color: white; background-color: black"
        >
          Portfolio
        </v-chip>
      </v-col>

      <v-col cols="9" class="pl-16">
        <div class="text-content">
          <h1 style="font-size: 54px; color: #1f2a2e; max-width: 700px">
            Featured projects
          </h1>
          <p
            class="font-weight-medium mt-3"
            style="font-size: 20px; color: #858c8f; max-width: 620px"
          >
            A glimpse into our creativity—exploring innovative designs,
            successful collaborations, and transformative digital experiences.
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- Carousel -->
    <v-row>
      <UCarousel
        :items="items"
        dots
        :ui="{ item: 'basis-1/3' }"
        v-slot:default="{ item }"
      >
        <img :src="item" width="320" height="320" class="rounded-lg" />
      </UCarousel>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const value1 = ref(0);
const value2 = ref(0);
const value3 = ref(0);

let interval1 = -1;
let interval2 = -1;
let interval3 = -1;

onMounted(() => {
  interval1 = setInterval(() => {
    if (value1.value >= 40) {
      value1.value = 40;
      clearInterval(interval1);
      return;
    }
    value1.value += 1;
  }, 40);

  interval2 = setInterval(() => {
    if (value2.value >= 238) {
      value2.value = 238;
      clearInterval(interval2);
      return;
    }
    value2.value += 4;
  }, 25);

  interval3 = setInterval(() => {
    if (value3.value >= 3) {
      value3.value = 3;
      clearInterval(interval3);
      return;
    }
    value3.value += 0.5;
  }, 50);
});

onBeforeUnmount(() => {
  clearInterval(interval1);
  clearInterval(interval2);
  clearInterval(interval3);
});

const cards = ref([
  {
    id: 1,
    get title() {
      return `${Math.floor(value1.value)}K+`;
    },
    text: "People who have launched their websites",
  },
  {
    id: 2,
    get title() {
      return `${Math.floor(value2.value)}+`;
    },
    text: "Experienced professionals ready to assist",
  },
  {
    id: 3,
    get title() {
      return `${value3.value}M+`;
    },
    text: "Support through messages and live consultations",
  },
]);

const items = [
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
];
</script>

<style scoped>
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

/* Button styles (optional) */
.btn {
  background-color: #c1ff72;
  text-transform: none;
  margin-top: 40px;
  margin-left: 15px;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
  height: 65px;
  width: 230px;
  padding: 2px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.btn:hover {
  background-color: #000000de;
  color: white;
}

.btn-text,
.btn .img {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.btn .btn-text {
  transform: translateX(10px);
}

.btn .img {
  transform: translateX(15px);
}

.btn:hover .btn-text {
  transform: translateX(55px);
}

.btn:hover .img {
  transform: translateX(-140px);
  content: url("/images/svgs/arrow.png");
}
</style>
