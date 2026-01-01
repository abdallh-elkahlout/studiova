<template>
  <v-container fluid class="pa-0" style="margin-top: 170px">
    <v-row class="align-center pl-10">
      <v-col cols="3" class="d-flex align-center gap-section">
        <span class="number-circle">04</span>
        <span class="middle-divider"></span>
        <v-chip
          class="pa-4 font-weight-medium"
          style="font-size: 15px; color: white; background-color: black"
        >
          About Us
        </v-chip>
      </v-col>
    </v-row>
    <v-row class="pl-10">
      <v-col cols="4">
        <div class="text-content">
          <h1 style="font-size: 54px; color: #1f2a2e; max-width: 700px">
            Why choose us
          </h1>
        </div>
      </v-col>
      <v-col cols="12">
        <p class="mt-3" style="font-size: 20px; color: #858c8f">
          We blend creativity with strategy to craft unique digital experiences
          that make an impact. With a focus on innovation, attention to details.
        </p>
      </v-col>
    </v-row>
    <v-row class="pl-10 pr-10">
      <v-col cols="4">
        <v-card
          style="background-color: #c1ff72; padding: 23px; height: 560px"
          class="cardOne"
          elevation="0"
          ><v-rating
            style="margin-left: 10px;"
            :length="5"
            readonly
            :size="32"
            :model-value="3"
            active-color="black"
          />
          <v-card-text
            style="margin-bottom: 200px; font-size: 19px; font-weight: 500"
            >The team exceeded our expectations with a stunning brand
            identity.</v-card-text
          >
          <div class="title">
            <v-card-title
              style="font-size: 50px; font-weight: 700; line-height: 50px"
              >98.6%</v-card-title
            >
            <v-card-text
              style="font-size: 18px; font-weight: 400; color: #7d7d7d"
              >Customer satisfaction</v-card-text
            >
          </div>
          <v-divider></v-divider>
          <div class="d-flex align-center pt-5">
            <v-avatar size="70">
              <v-img src="/images/profile/user.svg" cover></v-img>
            </v-avatar>
            <div class="ml-4">
              <div style="font-size: 20px; font-weight: 600; color: #1f2a2e">
                Wade Warren
              </div>
              <div style="font-size: 18px; color: #6b7280">Bank of America</div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-row>
          <v-col cols="12">
            <v-img src="/images/projects/whychoose.png"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div
              class="completedProjects"
              style="
                background-color: #1f2a2e;
                color: white;
                padding: 30px;
                height: 230px;
              "
            >
              <h1 style="font-size: 50px; font-weight: 700">500+</h1>
              <p style="font-size: 18px; font-weight: 500; color: #cbcbcb">
                Successful projects completed
              </p>
              <div class="avatars" style="margin-top: 20px">
                <v-avatar-group>
                  <v-avatar size="40" style="border: 3px #1f2a2e solid">
                    <v-img src="/images/profile/avatar_1.jpg" alt="Avatar 1" />
                  </v-avatar>
                  <v-avatar
                    size="40"
                    style="right: 7px; border: 3px #1f2a2e solid"
                  >
                    <v-img src="/images/profile/avatar_2.jpg" alt="Avatar 2" />
                  </v-avatar>
                  <v-avatar
                    size="40"
                    style="right: 15px; border: 3px #1f2a2e solid"
                  >
                    <v-img src="/images/profile/avatar_3.jpg" alt="Avatar 3" />
                  </v-avatar>
                  <v-avatar
                    size="40"
                    style="right: 23px; border: 3px #1f2a2e solid"
                  >
                    <v-img src="/images/profile/avatar_4.jpg" alt="Avatar 4" />
                  </v-avatar>
                </v-avatar-group>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-card class="cardThree pa-4" style="height: 560px">
          <v-card-title style="font-size: 50px; font-weight: 700"
            >238+</v-card-title
          >
          <v-card-text
            style="font-size: 20px; font-weight: 400; line-height: 10px"
            >Brand Served Worldwide</v-card-text
          >
          <v-img
            src="/images/logos/DarkLogo2.svg"
            width="200px"
            style="margin-top: 200px; margin-left: 15px"
          ></v-img>
          <v-card-text style="font-size: 21px; font-weight: 400"
            >Our global reach allows us to create unique, culturally relevant
            designs for businesses across different industries.</v-card-text
          >
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
.cardOne {
  position: relative;
  padding: 20px;
}
.cardOne::after {
  content: url("/images/background/bg-ellipse.svg");
  position: absolute;
  right: 0px;
  top: 32%;
}
.cardThree {
  background-image: url("/images/background/bg-ring.svg");
}
</style>
