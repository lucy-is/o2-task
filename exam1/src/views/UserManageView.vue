<!-- TODO: template -->
<template>
  <div class="manage-container">
    <h1>사용자관리</h1>

    <div>
      <input class="search" type="text" placeholder="닉네임" />
      <button class="search-btn">검색</button>
    </div>

    <ToHomeVue />
  </div>
</template>

<!-- TODO: script -->
<script>
import ToHomeVue from '@/components/ToHome.vue'

export default {
  name: 'UserManageView',
  components: {
    ToHomeVue
  }
}
</script>

<!-- TODO: style -->
<style scoped>
.manage-container {
  position: absolute;
  width: 900px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  margin: 50px 0;
}

.search {
  width: 200px;
  padding: 10px;
  margin-right: 20px;
}

.search-btn {
  padding: 12px 20px;
  background-color: #93cbff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease;
}

.search-btn:active {
  transform: scale(0.9, 0.9);
}
</style>
