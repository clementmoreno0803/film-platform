<template>
  <div id="nav">
    <span
      class="mobile-menu"
      @click="hamburgerMenu"
      :class="{ active: mobileMenu }"
    ></span>
    <div class="header-left-part" :class="{ active: mobileMenu }">
      <img
        src="../assets/logos/Netflix-Logo-HD.png"
        alt="netflix-logo"
        class="header-left-part-logo"
      />
      <ul>
        <li>
          <router-link to="/">Home</router-link>
          <router-link to="/Movies">Movies</router-link>
          <router-link to="/Series">Series</router-link>
          <router-link to="/Favorites">Favorites</router-link>
        </li>
      </ul>
    </div>
    <SearchBarVue />
  </div>
  <router-view />
</template>

<script>
import SearchBarVue from "../components/SearchBar.vue";
import { ref } from "vue";
export default {
  components: {
    SearchBarVue,
  },
  setup() {
    const mobileMenu = ref(false);

    const hamburgerMenu = () => {
      return (mobileMenu.value = !mobileMenu.value);
    };

    return { hamburgerMenu, mobileMenu };
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";

.mobile-menu {
  display: none;
}
#nav {
  padding: 30px 0;
  position: relative;
  @include flexBox(space-between, null, row);
}

.header-left-part {
  @include flexBox(null, center, row);
  .header-left-part-logo {
    width: auto;
    height: 30px;
  }
  ul li {
    list-style: none;
  }
  a {
    font-weight: map-get($font-weigths, regular);
    color: #2c3e50;
    text-decoration: none;
    &:not(:last-child) {
      margin-right: 15px;
    }

    &.router-link-exact-active {
      color: $primary-color;
      font-weight: map-get($font-weigths, medium);
    }
  }
}

@media (max-width: 768px) {
  .mobile-menu {
    display: block;
    height: 2px;
    width: 20px;
    background: red;
    position: relative;
    left: 0;
    top: 0;
    z-index: 99999;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &.active {
      transform: rotate(59deg);
      width: 23px;
      transition: all 0.3s ease-in-out;
      &::before {
        transform: rotate(30deg) translate(5.3px, -1px);
      }
      &::after {
        transform: rotate(30deg) translate(-2px, -1.3px);
      }
    }

    &::before {
      position: absolute;
      content: "";
      bottom: 7px;
      background: red;
      width: 20px;
      height: 2px;
      left: 0;
    }
    &::after {
      position: absolute;
      content: "";
      top: 7px;
      background: red;
      width: 20px;
      height: 2px;
      left: 0;
    }
  }

  #nav {
    align-items: center;
    .header-left-part {
      position: fixed;
      left: -150vw;

      &.active {
        @include flexBox(center, center, column);
        position: fixed;
        height: 100vh;
        background: black;
        left: 0;
        bottom: 0;
        z-index: 9999;
        width: 100%;
        opacity: 0.9;
        transition: all 1s ease;
        .header-left-part-logo {
          width: auto;
          height: 30px;
          margin-bottom: 50px;
        }
        ul {
          padding: 0;
          li {
            list-style: none;
          }
        }
      }
    }
  }
}
</style>
