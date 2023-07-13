<template>
  <form @submit.prevent="homeStore.getNews(updateFilter)">
    <img
      src="../assets/icons/search.png"
      alt=""
      class="magnifizer"
      @click="toggleSearch"
    />
    <transition name="fade">
      <input
        v-if="show"
        type="text"
        id="filter-input"
        v-model="filterParams"
        placeholder="Search"
        class="search-bar"
        @keyup="homeStore.getNews(updateFilter)"
      />
    </transition>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import { useHomeStore } from "../stores/home.js";
export default {
  setup() {
    const homeStore = useHomeStore();
    const filterParams = ref("");

    const updateFilter = computed(() => {
      return filterParams.value;
    });

    const show = ref(false);

    const toggleSearch = () => (show.value = !show.value);

    return { homeStore, filterParams, toggleSearch, updateFilter, show };
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";

form {
  @include flexBox(center, center, row);

  position: relative;
}
.magnifizer {
  height: 16px;
  width: auto;
  position: relative;
  left: $left;
  z-index: 999;
  transition: all 0.5s;
  cursor: pointer;
}
.search-bar {
  position: relative;
  height: 30px;
  background: transparent;
  border: none;
  margin: 0 15px;
  width: 50px;
}
.search-bar:focus-visible {
  outline: none;
  color: $primary-color;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>