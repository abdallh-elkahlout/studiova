<template>
  <v-app>
    <appNav />
    <NavDrawer />
    <slot></slot>
    <appFooter />
  </v-app>
</template>

<style scoped>
.navbar-overlay {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999 !important;
}
</style>
