<template >
    <nav class="navbar">
        <button class="toggle" @click="$store.commit('toggleButton')">
        <!-- https://fontawesome.com/icons/bars-staggered?f=classic&s=solid -->
        <font-awesome-icon class="icon" :icon="['fas', 'bars-staggered']" style="color:#000"/>
        <!-- class이름 부여 -->
        </button>
    </nav>
    <font-awesome-icon :icon="['fas', 'location-dot']" />
</template>
<script setup>

</script>
<style scoped lang="scss">
    .navbar {
    background: #fff;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: end;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }
    .icon {
      color: #333;
      font-size: 24px;
    }
  }

</style>