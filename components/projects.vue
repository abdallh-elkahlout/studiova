<template>
  <v-container fluid class="pa-0" style="margin-top: 170px">
    <v-row class="align-center pl-10">
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
    <v-row class="pt-16">
      <v-col cols="12" class="px-0">
        <v-slide-group class="project-slider" :show-arrows="false" loop>
          <v-slide-group-item v-for="(item, index) in items" :key="index">
            <div class="slide">
              <v-card elevation="0">
                <div class="image-wrapper position-relative">
                  <img
                    :src="item.image"
                    style="height: 370px; width: 100%; object-fit: cover"
                  />
                  <div class="overlay">
                    <button class="action-btn">
                      <v-icon icon="mdi-arrow-top-right"></v-icon>
                    </button>
                  </div>
                </div>
                <div class="mt-4">
                  <h3 class="text-h4 font-weight-bold mb-2">
                    {{ item.title }}
                  </h3>
                  <div class="d-flex flex-wrap" style="gap: 12px">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      variant="outlined"
                      class="font-weight-bold mt-3 pa-4"
                      style="
                        font-size: 14px;
                        border: #e0e0e0 solid 1px;
                        color: #1f2a2e;
                      "
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </div>
              </v-card>
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
const active = ref(1);

onMounted(() => {
  const slider = document.querySelector(
    ".project-slider .v-slide-group__content"
  );
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.style.cursor = "grabbing";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
});

const items = [
  {
    image: "/images/projects/project1.webp",
    title: "Pixelgorge",
    tags: ["UI/UX Design", "Web Development"],
  },
  {
    image: "/images/projects/project2.webp",
    title: "Transfermax",
    tags: ["Web Development", "Digital Design"],
  },
  {
    image: "/images/projects/project3.webp",
    title: "Digital Magazine",
    tags: ["Digital Design", "Web Development"],
  },
  {
    image: "/images/projects/project4.webp",
    title: "Amber Bottle",
    tags: ["Photography", "Studio"],
  },
  {
    image: "/images/projects/project5.webp",
    title: "BioTrack Lims",
    tags: ["Brand Identity", "Digital Design"],
  },
  {
    image: "/images/projects/snapclear.webp",
    title: "SnapClear",
    tags: ["UX Strategy", "UI Design"],
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

/* carousel */
.project-slider {
  margin-top: 50px;
  cursor: grab;
}

.project-slider:active {
  cursor: grabbing;
}

/* مهم: يسمح بالسحب */
.project-slider .v-slide-group__content {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
}

/* slide = 3 في الشاشة */
.slide {
  position: relative;
  flex: 0 0 25%;
  padding: 0 12px;
  height: auto;
  box-sizing: border-box;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* overlay (على أي صورة) */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(2, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slide:hover .overlay {
  opacity: 1;
}

/* زر */
.action-btn {
  width: 56px;
  height: 56px;
  background: #c1ff72;
  color: #000;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
