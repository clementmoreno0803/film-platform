<template>
    <section class="card-container" v-if='homeStore.filtered !== []'>
      <h2>We found {{homeStore.filterCount}} result(s)</h2>
      <card v-for="home in homeStore.filtered" :key="home.id"> 
        <LibraryDetailVue :home="home" /> 
      </card> 
    </section>
    <h2 v-else>No result for this research. Try something diferent..</h2>
</template>

<script>
import { useHomeStore } from "../stores/home.js";
import LibraryDetailVue from "../components/CardDetail.vue";
import Card from "../ui/CardAll.vue";

export default {
  components: {
    LibraryDetailVue,
    Card,
  },
  setup() {
    const homeStore = useHomeStore();
    return { homeStore };
  },
};
</script>
