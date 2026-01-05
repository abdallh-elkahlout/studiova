<template>
  <v-container fluid style="padding-top: 150px; padding-bottom: 140px">
    <v-row class="align-center pl-10">
      <v-col cols="12" sm="3" class="d-flex align-center gap-section">
        <span class="number-circle">06</span>
        <span class="middle-divider"></span>
        <v-chip
          class="pa-4 font-weight-medium"
          style="font-size: 15px; color: white; background-color: black"
        >
          The team
        </v-chip>
      </v-col>

      <v-col cols="12" sm="9" class="pl-sm-16">
        <div class="text-content">
          <h1 style="font-size: 54px; max-width: 700px">Meet our team</h1>
          <p
            class="font-weight-medium mt-3"
            style="font-size: 20px; color: #858c8f; max-width: 700px"
          >
            Our team is committed to redefining digital experiences through
            innovative web solutions while fostering a diverse and collaborative
            environment.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="px-5 pt-10">
      <v-col cols="3" v-for="member in teamMembers" :key="member.name">
        <v-card elevation="0" variant="0">
          <v-img :src="member.image"></v-img>
          <v-card-title style="font-size: 29px; font-weight: 700">{{
            member.name
          }}</v-card-title>
          <v-card-text
            style="font-size: 16px; color: #778185; line-height: 1px"
            >{{ member.position }}</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const teamMembers = [
  {
    name: "Martha Finley",
    position: "Creative Director",
    image: "images/team/team-img-1.png",
  },
  {
    name: "Floyd Miles",
    position: "Marketing Strategist",
    image: "images/team/team-img-2.png",
  },
  {
    name: "Glenna Snyder",
    position: "Lead Designer",
    image: "images/team/team-img-3.png",
  },
  {
    name: "Albert Flores",
    position: "UX/UI Developer",
    image: "images/team/team-img-4.png",
  },
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
</style>
