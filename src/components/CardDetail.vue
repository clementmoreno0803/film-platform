<template>
  <div class="card-container">
    <a :href="home.url" target="blank">
      <div
        class="card"
        @click="showModal = true"
        :style="{
          'background-size': 'cover',
          'background-position': 'center',
          'background-image': 'url(' + home.thumbnail + ')',
        }"
      ></div>
    </a>
    <div class="infos">
      <span class="infos__title"> {{ home.title }} </span>
      <button @click="showModal = true" class="infos__button__more">+</button>
    </div>
    <Teleport to="body">
      <modal-vue
        v-show="showModal"
        :home="home"
        @close="closeModal"
      ></modal-vue>
    </Teleport>
  </div>
</template>

<script>
import ModalVue from "../components/Modal.vue";
import { ref, Teleport } from "vue";

export default {
  props: ["home"],
  components: {
    ModalVue,
    Teleport,
  },

  setup() {
    const showModal = ref(false);
    const closeModal = () => {
      showModal.value = false;
    };

    return { showModal, closeModal };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

.card {
  img {
    width: 250px;
    height: 200px;
  }
}
.infos {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.775rem;
  margin-bottom: 30px;

  .infos__button__more {
    width: fit-content;
    background: transparent;
    color: white;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
  }
}
.infos_description {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  /* font-size: 0.775rem; */
}

.card-topic {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 20px;
  padding: 2px 10px;
  margin-left: 5px;
}

.infos__title {
  color: white;
  overflow: hidden;
  font-weight: map-get($font-weigths, medium);
  white-space: break-spaces;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Number of lines to display */
  -webkit-box-orient: vertical;
  text-align: left;
}
</style>