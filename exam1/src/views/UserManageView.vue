<!-- TODO: template -->
<template>
  <div class="manage-container">
    <h1>사용자관리</h1>

    <ToHomeVue />

    <form class="search-wrap">
      <input
        class="search"
        type="text"
        placeholder="닉네임"
        v-model="searchUser"
      />
      <button class="search-btn">검색</button>
    </form>
    <p>{{ searchUser }}</p>

    <UserInfoVue />
  </div>
</template>

<!-- TODO: script -->
<script>
import ToHomeVue from '@/components/ToHome.vue'
import UserInfoVue from '@/components/UserInfo.vue'

export default {
  name: 'UserManageView',
  components: {
    ToHomeVue,
    UserInfoVue
  },
  data() {
    return {
      searchUser: ''
    }
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

.search-wrap {
  margin-bottom: 80px;
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
