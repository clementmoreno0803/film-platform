<template>
  <div class="backdrop">
    <div class="modal">
      <button class="modal-close-button" @click="$emit('close')">X</button>
      <a :href="home.url" target="blank">
        <div
          class="card"
          :style="{
            'background-image': 'url(' + home.thumbnail + ')',
          }"
        ></div>
      </a>
      <div class="modal-infos">
        <div class="modal-infos-container">
          <h2 class="modal-infos__title">{{ home.title }}</h2>
          <div class="modal-isFav">
            <span
              class="material-symbols-outlined"
              :class="{ active: home.isFav }"
              @click="store.toggleFav(home.show_id)"
            >
              favorite
            </span>
          </div>
        </div>
        <div class="modal-bottom">
          <div class="modal-bottom-info">
            <div class="modal-bottom-info-duration">
              <span> {{ home.release_year }}</span>
              <h3>
                <b>{{ home.duration }}</b>
              </h3>
            </div>
            <h3>{{ home.description }}</h3>
          </div>
          <div class="modal-bottom-info-production-part">
            <br />
            <span><b>Categories:</b> {{ home.listed_in }}</span>
            <br />
            <span><b>Director: </b> {{ home.director }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHomeStore } from "../stores/home.js";
export default {
  props: ["home"],
  emits: ["close"],
  setup() {
    const store = useHomeStore();

    return { store };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: $left;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  z-index: 0;
}
.modal-close-button {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 9999;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  background: transparent;
  content: "x";
  border: 1px solid white;
  color: white;
  cursor: pointer;
}
.card {
  background-size: cover;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 60%;
  width: 100%;
  position: relative;
  box-shadow: 0px -172px 299px -27px rgba(0, 0, 0, 0.62) inset;
  -webkit-box-shadow: 0px -172px 299px -27px rgba(0, 0, 0, 0.62) inset;
  -moz-box-shadow: 0px -172px 299px -27px rgba(0, 0, 0, 0.62) inset;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 80%;
  z-index: 999;
  color: black;
  backdrop-filter: blur(10px);
  border-radius: 10px;
}
.modal-infos {
  position: relative;
  z-index: 999;
  @include flexBox(null, flex-start, column);
  font-size: 0.775rem;
  bottom: 60px;
  margin: 0 20px;
  h2 {
    color: white;
    font-size: 2.5em;
  }
  .modal-infos-container {
    @include flexBox(center, center, row);
  }
}
.modal-infos__title {
  color: white;
}
.modal-infos_description {
  color: white;
  @include flexBox(space-between, center, row);

  margin-bottom: 5px;
}

.card-topic {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 20px;
  padding: 2px 10px;
  margin-left: 5px;
}

.modal-isFav {
  cursor: pointer;
  color: rgb(0, 0, 0);
  border: 1px solid white;
  @include flexBox(space-between, null, column);
  padding: 3px;
  border-radius: 20%;
  margin-left: 15px;
  align-items: center;

  .material-symbols-outlined {
    color: white;
    font-weight: map-get($font-weigths, regular);
    font-size: 1.5rem;
    &.active {
      animation: addFavorite 0.6s ease-in-out forwards;
    }
  }
}
@keyframes addFavorite {
  0% {
    color: white;
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
    color: red;
  }
}

.modal-more-info {
  @include flexBox(space-between, null, row);
  gap: 40px;
  span {
    color: white;
    width: 70%;
  }
}
.modal-more-info-right-part {
  width: 100%;
}
.modal-bottom {
  @include flexBox(space-between, center, row);
  .modal-bottom-info {
    max-width: 70%;
    .modal-bottom-info-duration {
      @include flexBox(flex-start, center, row);
      color: white;
      span {
        margin-right: 10px;
      }
    }
  }
}
.modal-bottom-info-production-part {
  color: white;
}

.infos__title {
  color: rgb(0, 0, 0);
  overflow: hidden;
  font-weight: map-get($font-weigths, medium);
  white-space: break-spaces;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Number of lines to display */
  -webkit-box-orient: vertical;
  text-align: left;
}
@media (max-width: 768px) {
  .modal {
    width: 90%;
    height: 80%;
    .modal-infos {
      h2 {
        font-size: 2em;
      }
      .modal-bottom {
        @include flexBox(null, flex-start, column);
      }
      .modal-bottom-info {
        max-width: 100%;
        h3 {
          font-size: 0.8rem;
        }
      }
    }
    .card {
      height: 50%;
    }
  }
}
</style>