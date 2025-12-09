<template>
  <div
    class="hero-section"
    style="border-top: 5px solid #c1ff72; border-left: black solid 1px"
  >
    <!-- Video Background -->
    <video class="hero-video" autoplay loop muted playsinline>
      <source src="/video/banner-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="nav">
      <HeaderActions variant="hero" @toggle-drawer="toggleDrawer" />
    </div>
    <div class="hero-text pl-6" style="margin-top: 33vh">
      <div class="d-flex align-center" style="gap: 12px">
        <v-img
          class="icon-img mr-3"
          src="/images/svgs/astrisk-icon.svg"
          width="48"
          height="48"
        ></v-img>
        <p>
          We create
          <span style="color: #c1ff72">high-performing</span> digital designs
          that elevate brands and enhance conversions
        </p>
      </div>
      <div class="title d-flex align-center">
        <h1 class="text-white mt-0 mb-0" style="font-size: 140px">Studiova</h1>
        <div
          class="arrow"
          style="
            background-color: #c1ff72;
            width: 95px;
            height: 65px;
            display: flex;
            align-items: center;
            border-radius: 43px;
            padding-left: 35px;
            margin-left: 20px;
            margin-top: 70px;
          "
        >
          <v-img
            src="/images/svgs/arrow-icon.svg"
            width="85"
            height="85"
          ></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavDrawer } from "~/composables/useNavDrawer";

const { toggleDrawer } = useNavDrawer();
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 0;
  object-fit: cover;
  filter: brightness(40%);
}

.nav {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 1.5rem;
  position: relative;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.main {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.hero-text {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding: 2rem;
  gap: 16px;
}

.icon-img {
  flex-shrink: 0;
  display: block;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hero-text p {
  font-size: 20px;
  font-weight: 400;
  max-width: 500px;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.6);
}
</style>
