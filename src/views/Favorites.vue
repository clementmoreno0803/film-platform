<template>
    <section class="card-container">
      <h2>Vos Films et Séries favorites :</h2>
      <div class="card-container-scroll">
        <!-- Permet de récupérer la slot et le design de Card pour pouvoir avoir le même design pour chaque carte -->
        <card v-for="home in homeStore.isFav" :key="home.id">
          <!-- Récupére la props pour afficher toutes les infos de la card -->
          <LibraryDetailVue :home="home" />
        </card>
      </div>
    </section>
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
    const homeStore = useHomeStore()
    return{homeStore}
  },
}
</script>
<style scoped lang='scss'>
@import "../scss/main.scss";

.card-container-scroll {
  @include flexBox(flex-start, center, row);
  flex-wrap: wrap;
}
</style>