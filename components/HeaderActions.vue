<template>
  <div
    class="d-flex justify-space-between align-center w-100"
    :class="containerClass"
  >
    <!-- Logo -->
    <img :src="logoSrc" alt="Sudiova Logo" width="215" />

    <!-- Icons -->
    <div class="icons">
      <v-btn
        :class="`text-none bg-transparent mr-7 ${iconColor}`"
        icon
        @click="toggleTheme"
      >
        <v-icon size="40px">{{
          theme.global.current.value.dark
            ? "mdi-weather-sunny"
            : "mdi-weather-night"
        }}</v-icon>
      </v-btn>

      <!-- Menu Button -->
      <v-app-bar-nav-icon
        size="55px"
        :style="`background-color: ${menuBgColor}; font-size: 24px; color: ${menuIconColor}`"
        @click="$emit('toggle-drawer')"
      ></v-app-bar-nav-icon>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";

const props = defineProps({
  variant: {
    type: String,
    default: "hero",
  },
  containerClass: {
    type: String,
    default: "",
  },
});

defineEmits(["toggle-drawer"]);

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

const logoSrc =
  props.variant === "hero"
    ? "/images/logos/WhiteLogo.svg"
    : "/images/logos/DarkLogo.svg";

const iconColor = props.variant === "hero" ? "text-white" : "text-black";

const menuBgColor = "white";
const menuIconColor = "black";
</script>
