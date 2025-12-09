<template>
  <v-container
    fluid
    class="pl-10 pt-0"
    style="
      margin-top: 170px;
      background-image: url('images/background/bg-astrisk-icon.svg');
      height: 1000px;
    "
  >
    <v-row>
      <v-col cols="1" class="number-label">
        <span
          style="
            border-radius: 50%;
            background-color: #c1ff72;
            padding: 10px;
            font-size: 18px;
            font-weight: 500;
          "
        >
          01
        </span>
      </v-col>
      <v-col cols="2" class="pl-13">
        <v-chip
          class="pa-4 font-weight-medium"
          style="font-size: 15px; color: white; background-color: black"
          >Stats & facts</v-chip
        >
      </v-col>
      <v-col cols="9" class="pl-16">
        <div class="text-content">
          <h1 style="font-size: 54px; color: #1f2a2e; max-width: 700px">
            High quality web design solutions you can trust.
          </h1>
          <p
            class="font-weight-medium mt-3"
            style="font-size: 20px; color: #858c8f; max-width: 620px"
          >
            When selecting a web design agency, it's essential to consider its
            reputation, experience, and the specific needs of your project.
          </p>
        </div>
        <v-row class="mt-14">
          <v-col cols="4" v-for="card in cards" :key="card.id">
            <v-card
              variant="none"
              style="border-top: 1px solid rgb(202, 200, 200)"
            >
              <v-card-title style="font-size: 65px; font-weight: 700">{{
                card.title
              }}</v-card-title>
              <v-card-text
                class="font-weight-light"
                style="font-size: 18px; color: #75797b"
              >
                {{ card.text }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div elevation="0" class="btn">
          Who We Are
          <v-img
            class="img"
            src="/images/svgs/arrow-icon.svg"
            width="60"
            height="60"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from "vue";
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
    value2.value += 4; // أو 5، المهم ما يفوتش كتير
  }, 25);

  interval3 = setInterval(() => {
    if (value3.value >= 3) {
      value3.value = 3;
      clearInterval(interval3);
      return;
    }
    value3.value += .5;
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
</script>
<style scoped>
.number-label span::after {
  content: "";
  position: absolute;
  width: 80px;
  left: 100px;
  bottom: 1020px;
  height: 1.4px;
  background-color: rgb(202, 200, 200);
}

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
  justify-content: center;
  border-radius: 40px;
  cursor: pointer;
}
</style>
