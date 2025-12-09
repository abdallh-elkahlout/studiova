<template>
  <div>
    <Transition name="navbar">
      <v-app-bar
        v-show="showNav"
        color="#c1ff72"
        style="
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
        elevation="0"
      >
        <HeaderActions
          variant="navbar"
          container-class="px-4"
          @toggle-drawer="toggleDrawer"
        />
      </v-app-bar>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useNavDrawer } from "~/composables/useNavDrawer";

const { toggleDrawer } = useNavDrawer();
const showNav = ref(false);

const handleScroll = () => {
  showNav.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Transition للظهور والاختفاء */
.navbar-enter-active,
.navbar-leave-active {
  transition: all 0.3s ease;
}

.navbar-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.navbar-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
