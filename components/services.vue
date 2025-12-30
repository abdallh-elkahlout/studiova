<template>
  <v-container
    fluid
    style="padding-top: 150px; margin-top: 170px; background-color: #1f2a2e"
  >
    <v-row class="align-center pl-10">
      <v-col cols="12" sm="3" class="d-flex align-center gap-section">
        <span class="number-circle">03</span>
        <span class="middle-divider"></span>
        <v-chip
          class="pa-4 font-weight-medium"
          style="font-size: 15px; color: black; background-color: white"
        >
          Services
        </v-chip>
      </v-col>

      <v-col cols="12" sm="9" class="pl-sm-16">
        <div class="text-content">
          <h1 style="font-size: 54px; color: white; max-width: 700px">
            What we do
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

    <v-row class="mt-10">
      <v-col cols="12" class="content-list-col pa-10">
        <div
          v-for="service in services"
          :key="service.id"
          @mouseover="setActiveService(service.id)"
          @mouseleave="resetActiveService()"
          :class="[
            'service-item position-relative',
            { 'active-item': activeServiceId === service.id },
          ]"
        >
          <v-row class="align-center">
            <v-col cols="12" md="4" class="position-relative d-none d-md-block">
              <div class="service-image-container">
                <v-scale-transition origin="center center">
                  <v-img
                    v-if="activeServiceId === service.id"
                    :src="service.imageUrl"
                    class="service-hover-image"
                    width="100%"
                    max-width="350"
                    cover
                  ></v-img>
                </v-scale-transition>
              </div>
            </v-col>
            <v-col cols="12" md="8">
              <v-row class="align-start">
                <v-col cols="12" sm="5">
                  <h2 class="text-h4 font-weight-bold my-4">
                    {{ service.title }}
                  </h2>
                </v-col>

                <v-col cols="12" sm="7" class="pl-sm-6">
                  <v-expand-transition>
                    <p
                      v-if="activeServiceId === service.id"
                      class="font-weight-medium mt-4 mt-sm-5"
                      style="font-size: 18px; color: #858c8f"
                    >
                      {{ service.description }}
                    </p>
                  </v-expand-transition>
                </v-col>
              </v-row>
              <v-divider class="my-6"></v-divider>
            </v-col>
          </v-row>
        </div>
        <v-col cols="12" offset="4">
          <div elevation="0" class="btn">
            <span class="btn-text">See Our Work</span>
            <v-img
              class="img"
              src="/images/svgs/arrow-icon.svg"
              width="60"
              height="60"
            ></v-img>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

const activeServiceId = ref(1);

const services = [
  {
    id: 1,
    title: "Brand identity",
    description:
      "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    imageUrl: "/images/projects/project3.webp",
  },
  {
    id: 2,
    title: "Web development",
    description:
      "A well-developed website ensures fast loading times, excellent user experience, and solid security.",
    imageUrl: "/images/projects/whychoose.png",
  },
  {
    id: 3,
    title: "Content creation",
    description:
      "Engaging content is key to attracting and retaining your audience, driving conversions.",
    imageUrl: "/images/projects/details/pd-43.webp",
  },
  {
    id: 4,
    title: "Motion & 3d modeling",
    description:
      "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    imageUrl: "/images/projects/whatwedo.jpg",
  },
];

const setActiveService = (id) => {
  activeServiceId.value = id;
};

const resetActiveService = () => {
  // يمكن ترك هذه الدالة فارغة للحفاظ على آخر صورة مرئية بعد إزالة التحويم.
};

// --- 3. تعريف القيم المحتسبة (Computed Properties) ---

// تجلب كائن الخدمة النشطة بالكامل
const activeServiceData = computed(() => {
  return services.find((s) => s.id === activeServiceId.value);
});

// تجلب مسار الصورة النشطة لعرضها في v-img
const activeImageUrl = computed(() => {
  const data = activeServiceData.value;
  return data ? data.imageUrl : "/images/projects/project1.webp";
});
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

/* 🖼️ تنسيقات الصورة */
.service-image {
  object-fit: cover;
  height: 100%;
}

/* 🖱️ تنسيقات تفاعل الـ Hover */
.service-item {
  cursor: pointer;
  padding: 10px 0;
  transition: all 0.3s ease-in-out;
  position: relative;
}

.service-image-container {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 200px; /* Increased height */
  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;
}

.service-hover-image {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.service-item h2 {
  color: #a0a0a0; /* اللون الافتراضي الرمادي */
  transition: color 0.3s ease;
}

.service-item:hover h2,
.service-item.active-item h2 {
  color: #6edb6e; /* اللون الأخضر عند التفاعل */
}

.btn {
  background-color: #c1ff72;
  text-transform: none;
  margin-top: 40px;
  margin-left: 15px;
  font-weight: 700;
  font-size: 18px;
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
  background-color: inherit;
  color: white;
  border: white 1px solid;
  font-size: 17px;
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
