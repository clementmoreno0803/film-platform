<template>
  <div v-if="homeStore.filtered.length == '' && homeStore.isSeries">
    <section class="card-container">
      <h2>Nos Séries :</h2>
      <div class="card-container-scroll">
        <!-- Permet de récupérer la slot et le design de Card pour pouvoir avoir le même design pour chaque carte -->
        <card v-for="home in homeStore.isSeries" :key="home.id">
          <!-- Récupére la props pour afficher toutes les infos de la card -->
          <LibraryDetailVue :home="home" />
        </card>
      </div>
    </section>
  </div>
    <div v-else>
    <FilteredCardVue />
  </div>
</template>

<script>
import { useHomeStore } from "../stores/home.js";
import LibraryDetailVue from "../components/CardDetail.vue";
import Card from "../ui/CardAll.vue";
import FilteredCardVue from "../components/FilteredCard.vue";


export default {
  components: {
    LibraryDetailVue,
    Card,
    FilteredCardVue
  },
  setup() {
    const homeStore = useHomeStore()
    return{homeStore}
  },
}
</script>
