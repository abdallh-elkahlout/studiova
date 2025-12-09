import { ref } from "vue";

// Shared state for navigation drawer
const drawer = ref(false);

export const useNavDrawer = () => {
  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };

  const closeDrawer = () => {
    drawer.value = false;
  };

  const openDrawer = () => {
    drawer.value = true;
  };

  return {
    drawer,
    toggleDrawer,
    closeDrawer,
    openDrawer,
  };
};
