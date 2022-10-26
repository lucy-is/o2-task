<!-- TODO: template -->
<template>
  <div>
    <button @click="backPage">prev</button>
    <button
      v-for="num in Math.ceil(userData.length / 3)"
      :key="num"
      @click="() => goToPage(num)"
    >
      {{ num }}
    </button>
    <button @click="nextPage">next</button>
  </div>
</template>

<!-- TODO: script -->
<script>
export default {
  props: {
    userData: Array
  }
  // data() {
  //   return {
  //     perpage: 3
  //   }
  // }
}
</script>
<!-- TODO: style -->
<style></style>
