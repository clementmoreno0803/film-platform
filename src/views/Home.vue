<template>
  <div v-if="homeStore.home.length != []">
    <!-- Montrer seulement quand la barre de recherche est vide -->
    <div class="home" v-if="homeStore.filtered.length == ''">
      <section class="card-container">
        <h2>Comedies</h2>
        <div class="card-container-scroll">
          <!-- Permet de récupérer la slot et le design de Card pour pouvoir avoir le même design pour chaque carte -->
          <card v-for="home in homeStore.home" :key="home.id">
            <!-- Récupére la props pour afficher toutes les infos de la card -->
            <LibraryDetailVue :home="home" />
          </card>
        </div>
      </section>
      <section class="card-container">
        <h2>Thriller</h2>
        <div class="card-container-scroll">
          <!-- Permet de récupérer la slot et le design de Card pour pouvoir avoir le même design pour chaque carte -->
          <card v-for="home in homeStore.isAThriller" :key="home.id">
            <!-- Récupére la props pour afficher toutes les infos de la card -->
            <LibraryDetailVue :home="home" />
          </card>
        </div>
      </section>
      <section class="card-container">
        <h2>Action</h2>
        <div class="card-container-scroll">
          <!-- Permet de récupérer la slot et le design de Card pour pouvoir avoir le même design pour chaque carte -->
          <card v-for="home in homeStore.isAnAction" :key="home.id">
            <!-- Récupére la props pour afficher toutes les infos de la card -->
            <LibraryDetailVue :home="home" />
          </card>
        </div>
      </section>
      <section class="card-container">
        <h2>Horror</h2>
        <div class="card-container-scroll">
          <!-- Permet de récupérer la slot et le design de Card pour pouvoir avoir le même design pour chaque carte -->
          <card v-for="home in homeStore.isAHorror" :key="home.id">
            <!-- Récupére la props pour afficher toutes les infos de la card -->
            <LibraryDetailVue :home="home" />
          </card>
        </div>
      </section>
      <section class="card-container">
        <h2>Documentary</h2>
        <div class="card-container-scroll">
          <!-- Permet de récupérer la slot et le design de Card pour pouvoir avoir le même design pour chaque carte -->
          <card v-for="home in homeStore.isADocumentary" :key="home.id">
            <!-- Récupére la props pour afficher toutes les infos de la card -->
            <LibraryDetailVue :home="home" />
          </card>
        </div>
      </section>
      <section class="card-container">
        <h2>Drama</h2>
        <div class="card-container-scroll">
          <!-- Permet de récupérer la slot et le design de Card pour pouvoir avoir le même design pour chaque carte -->
          <card v-for="home in homeStore.isADrama" :key="home.id">
            <!-- Récupére la props pour afficher toutes les infos de la card -->
            <LibraryDetailVue :home="home" />
          </card>
        </div>
      </section>
      <section class="card-container">
        <h2>International Movies</h2>
        <div class="card-container-scroll">
          <!-- Permet de récupérer la slot et le design de Card pour pouvoir avoir le même design pour chaque carte -->
          <card v-for="home in homeStore.isAnInternationalMovie" :key="home.id">
            <!-- Récupére la props pour afficher toutes les infos de la card -->
            <LibraryDetailVue :home="home" />
          </card>
        </div>
      </section>
    </div>
    <div v-else>
      <FilteredCardVue />
    </div>
  </div>
  <div v-else>
    <img src="../assets/Spinner-0.8s-200px.png" alt="" />
  </div>
</template>

<script>
import { useHomeStore } from "../stores/home.js";
import { onMounted } from "vue";
import Card from "../ui/CardAll.vue";
import LibraryDetailVue from "../components/CardDetail.vue";
import FilteredCardVue from "../components/FilteredCard.vue";

export default {
  components: {
    Card,
    LibraryDetailVue,
    FilteredCardVue,
  },
  setup() {
    const homeStore = useHomeStore();

    onMounted(() => {
      homeStore.getNews();
    });

    return { homeStore };
  },
};
</script>
<style scoped lang="scss">
@import "../scss/main.scss";

h2 {
  color: $primary-color;
  text-align: left;
  font-size: 1.3rem;
}
.card-container {
  display: block;
}

.best-card-container {
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
}

.card-container-scroll {
  @include flexBox(flex-start, center, row);
  overflow: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>