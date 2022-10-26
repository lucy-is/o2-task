<!-- TODO: template -->
<template>
  <div class="close-confirm-container" v-for="(user, i) in detailItem" :key="i">
    <p>"{{ user.name }}" 님의 정보조회를 마치시겠습니까?</p>
    <button>취소</button>
    <button>확인</button>
  </div>
</template>

<!-- TODO: script -->
<script>
export default {
  name: 'CloseConfirm',
  props: {
    detailItem: Array
  }
}
</script>

<!-- TODO: style -->
<style>
.close-confirm-container {
  z-index: 2;
}
</style>
