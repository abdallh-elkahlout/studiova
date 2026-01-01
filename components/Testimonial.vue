<template>
  <v-container
    fluid
    style="padding-top: 150px; margin-top: 170px; background-color: #f4f8fa"
  >
    <v-row class="align-center pl-10">
      <v-col cols="12" sm="3" class="d-flex align-center gap-section">
        <span class="number-circle">05</span>
        <span class="middle-divider"></span>
        <v-chip
          class="pa-4 font-weight-medium"
          style="font-size: 15px; color: white; background-color: black"
        >
          Testimonial
        </v-chip>
      </v-col>

      <v-col cols="12" sm="9" class="pl-sm-16">
        <div class="text-content">
          <h1 style="font-size: 54px; max-width: 700px">
            Stories from clients
          </h1>
          <p
            class="font-weight-medium mt-3"
            style="font-size: 20px; color: #858c8f; max-width: 700px"
          >
            Real experiences, genuine feedback—discover how our creative
            solutions have transformed brands and elevated businesses.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="px-3">
      <v-col cols="3">
        <v-card
          style="background-color: #c1ff72; padding: 23px; height: 525px"
          class="cardOne"
          elevation="0"
        >
          <v-card-text style="font-size: 17px; font-weight: 400; color: #7d7d7d"
            >Hear from them</v-card-text
          >
          <v-card-text
            style="font-size: 32px; font-weight: 700; line-height: 35px"
            >Our website redesign was flawless. They understood our vision
            perfectly!</v-card-text
          >
          <div class="d-flex align-center pt-5" style="margin-top: 120px">
            <v-avatar size="70">
              <v-img src="/images/profile/testimonial_1.webp"></v-img>
            </v-avatar>
            <div class="ml-4">
              <div style="font-size: 20px; font-weight: 600; color: #1f2a2e">
                Albert Flores
              </div>
              <div style="font-size: 18px; color: #6b7280">MasterCard</div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          elevation="0"
          class="cardTwo"
          style="
            background-color: #1f2a2e;
            color: white;
            padding: 23px;
            height: 525px;
          "
        >
          <v-card-text style="font-size: 17px; font-weight: 400; color: #7d7d7d"
            >Hear from them</v-card-text
          >
          <v-card-text style="font-size: 29px; font-weight: 700">
            From concept to execution, they delivered outstanding results.
            Highly recommend their expertise!
          </v-card-text>
          <div
            class="rating"
            style="display: flex; align-items: center; gap: 10px"
          >
            <v-rating
              style="margin-left: 10px"
              :length="5"
              :size="25"
              v-model="rating"
              active-color="white"
              readonly
            />
            <span style="font-size: 18px">{{ rating.toFixed(1) }}</span>
          </div>
          <div
            class="card-footer d-flex align-center pt-5 pl-4"
            style="margin-top: 140px"
          >
            <v-avatar size="70">
              <v-img src="/images/profile/testimonial_2.webp" cover></v-img>
            </v-avatar>
            <div class="ml-4">
              <div style="font-size: 20px; font-weight: 400">Robert Fox</div>
              <div style="font-size: 18px; color: #6b7280">Mitsubishi</div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          style="padding: 23px; height: 525px"
          class="cardOne"
          elevation="0"
        >
          <v-card-text style="font-size: 17px; font-weight: 400; color: #7d7d7d"
            >Hear from them</v-card-text
          >
          <v-card-text
            style="font-size: 33px; font-weight: 700; line-height: 35px"
            >Super smooth process with incredible results. highly
            recommend!</v-card-text
          >
          <div class="d-flex align-center pt-5" style="margin-top: 120px">
            <v-avatar size="70">
              <v-img src="/images/profile/testimonial_3.webp"></v-img>
            </v-avatar>
            <div class="ml-4">
              <div style="font-size: 20px; font-weight: 600; color: #1f2a2e">
                Jenny Wilson
              </div>
              <div style="font-size: 18px; color: #6b7280">Pizza Hut</div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
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
.cardTwo::after {
  content: url("/images/svgs/quotes.svg");
  position: absolute;
  left: 620px;
  bottom: 46px;
}
</style>
<script setup>
import { ref } from "vue";
const rating = ref(4);
</script>
