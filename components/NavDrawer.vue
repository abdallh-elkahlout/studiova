<template>
  <Transition name="menu-slide">
    <div v-if="drawer" class="menu-overlay" @click="closeDrawer">
      <div class="menu-container pa-3" @click.stop>
        <div class="menu-content" style="overflow: hidden;">
          <!-- Close Button -->
          <div
            class="menu-head d-flex justify-space-between align-center mb-4 pa-1"
          >
            <p class="text-h6 font-weight-light">Menu</p>
            <v-btn icon @click="closeDrawer" elevation="0">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-divider></v-divider>

          <!-- القائمة -->
          <v-list class="pt-4">
            <v-list-item
              v-for="item in menuItems"
              :key="item.title"
              :to="item.to"
              :class="{ 'active-item': $route.path === item.to }"
              class="menu-item"
              @click="closeDrawer"
            >
              <v-list-item-title class="text-h5">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <div
            class="btns d-flex justify-center align-center px-7"
            style="gap: 20px"
          >
            <v-btn rounded elevation="0" class="btn">Sign In</v-btn>
            <v-btn rounded elevation="0" class="btn">Sign Up</v-btn>
          </div>
          <div class="menu-footer px-5 py-5 d-flex flex-column">
            <a
              href="tel:+12123456789"
              class="font-weight-bold"
              style="
                font-size: 16px;
                color: rgba(121, 121, 121, 0.9);
                cursor: pointer;
                text-decoration: none;
              "
            >
              +1-212-345-6789
            </a>
            <a
              href="mailto:example@gmail.com"
              class="font-weight-bold"
              style="
                font-size: 25px;
                color: #1f2a2e;
                cursor: pointer;
                text-decoration: none;
              "
            >
              example@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { drawer, closeDrawer } = useNavDrawer();

const menuItems = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Projects", to: "/projects" },
  { title: "Blog", to: "/blog" },
  { title: "Contact", to: "/contact" },
];
</script>

<style scoped>
/* ============================
   OVERLAY + CONTAINER
============================ */
.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
}

.menu-container {
  position: absolute;
  top: 40px;
  right: 20px;
  width: 380px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.menu-content {
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
}

/* ============================
   MENU ITEMS
============================ */
.menu-item {
  position: relative;
  border-radius: 12px;
  padding: 12px 20px !important;
  transition: all 0.3s ease;
}

/* العنصر الدوار يظهر عند hover */
.menu-item:hover::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 15px; /* غيّرها حسب موقع الأيقونة */
  width: 18px;
  height: 18px;
  background-image: url("/images/svgs/dark-astrisk.svg");
  background-size: contain;
  background-position: center;
  transform: translateY(-50%);
  animation: spin 1s linear infinite;
  z-index: 1;
}

/* عنوان القائمة */
.menu-item .v-list-item-title {
  position: relative;
  color: #1f2a2e;
  font-weight: bolder;
  font-size: xx-large;
  transition: transform 0.3s ease;
}

/* العنوان يتحرك عند Hover */
.menu-item:hover .v-list-item-title {
  transform: translateX(20px);
}
.menu-item.active-item:hover {
  transform: none !important;
}
.menu-item.active-item:hover .v-list-item-title {
  transform: none !important;
}

/* ============================
   ACTIVE ITEM
============================ */
.active-item {
  padding-left: 40px !important;
}

/* الأيقونة بجانب العنصر النشط */
.active-item::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 15px;
  width: 18px;
  height: 18px;
  background-image: url("/images/svgs/dark-astrisk.svg");
  background-size: contain;
  background-position: center;
  transform: translateY(-50%);
  animation: spin 1s linear infinite;
  z-index: 1;
}

/* إزالة تأثير Vuetify الافتراضي */
.menu-item.v-list-item--active :deep(.v-list-item__overlay) {
  opacity: 0 !important;
}

.menu-item.v-list-item--active {
  background-color: transparent !important;
}
/* btns */
.menu-content .btns .btn {
  border: 1px solid #3e4142;
  width: 50%;
  height: 45px;
  font-size: 18px;
  text-transform: none;
  font-weight: bold;
  letter-spacing: 0.2px;
}
.menu-content .btns .btn:nth-child(2) {
  background-color: #1f2a2e;
  color: white;
}

/* menu footer */
.menu-footer a:nth-child(1) {
  transition: all 0.3s ease;
}

.menu-footer a:nth-child(1):hover {
  color: black !important;
  transition: all 0.3s ease;
}

/* ============================
   ANIMATIONS
============================ */
@keyframes spin {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}

/* Transition Animation */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.3s ease;
}

.menu-slide-enter-active .menu-container,
.menu-slide-leave-active .menu-container {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.menu-slide-enter-from {
  opacity: 0;
}

.menu-slide-enter-from .menu-container {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  transform-origin: top right;
}

.menu-slide-leave-to {
  opacity: 0;
}

.menu-slide-leave-to .menu-container {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  transform-origin: top right;
}
</style>
