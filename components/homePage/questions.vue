<template>
  <v-container fluid style="padding-top: 150px; padding-bottom: 140px">
    <v-row class="align-center pl-10">
      <v-col cols="12" sm="3" class="d-flex align-center gap-section">
        <span class="number-circle">08</span>
        <span class="middle-divider"></span>
        <v-chip
          class="pa-4 font-weight-medium"
          style="font-size: 15px; color: white; background-color: black"
        >
          FAQs
        </v-chip>
      </v-col>

      <v-col cols="12" sm="9" class="pl-sm-16">
        <h1 style="font-size: 54px; max-width: 800px">
          Frequently asked questions
        </h1>
        <p
          class="font-weight-medium mt-3"
          style="font-size: 20px; color: #858c8f; max-width: 800px"
        >
          Discover how we tailor our solutions to meet unique needs, delivering
          impactful strategies, personalized branding, and exceptional customer
          experiences.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9" offset="3">
        <div class="expansionPanel px-10">
          <v-expansion-panels variant="accordion" elevation="0">
            <v-expansion-panel
              collapse-icon="mdi-close"
              expand-icon="mdi-plus"
              v-for="i in panelTitle"
              :key="i"
              text="Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance."
              :title="i"
              class="panel py-5"
            ></v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const panelTitle = [
  "What Services does your agency offer?",
  "How long does a typical project take?",
  "Do you offer custom designs, or do you use templates?",
  "What's the cost of project?",
  "Do you provide ongoing support after project completion?",
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
.panel :deep(.v-expansion-panel-title) {
  font-size: 25px;
  font-weight: 700;
}
.panel :deep(.v-expansion-panel-text) {
  font-size: 20px;
}
.panel :deep(.v-expansion-panel-title__icon) {
  color: #1f2a2e;
  background-color: rgb(218, 217, 217);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
.panel :deep(.v-expansion-panel-title__overlay):hover {
  background-color: white;
}

.panel.v-expansion-panel--active :deep(.v-expansion-panel-title__icon) {
  background-color: #c1ff72;
}
</style>
