<!-- TODO: template -->
<template>
  <div class="manage-container">
    <h1>사용자관리</h1>

    <ToHomeVue />

    <form class="search-wrap" @submit="search">
      <input
        class="search"
        type="text"
        placeholder="닉네임"
        v-model="searchUser"
      />
      <button type="submit" class="search-btn">검색</button>
      <p class="errorMsg">{{ errorMsg }}</p>
    </form>

    <UserInfoVue :userData="userData" />
  </div>
</template>

<!-- TODO: script -->
<script>
import axios from 'axios'

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
      searchUser: '',
      errorMsg: '',
      userData: []
    }
  },
  methods: {
    response() {
      /**
       * @description 초기 유저 정보 리스트 호출
       */
      const response = async () => {
        try {
          const { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
          )
          this.userData = data
        } catch (err) {
          alert(err.message)
        }
      }
      response()
    },
    search(e) {
      e.preventDefault()

      if (this.searchUser === '') {
        this.errorMsg = '성명을 입력해주세요.'
        setTimeout(() => {
          this.errorMsg = ''
        }, 2000)
        return false
      } else {
        /**
         * @description 검색한 유저 정보 호출
         */
        const searchData = async () => {
          try {
            const { data } = await axios.get(
              `https://jsonplaceholder.typicode.com/users?username=${this.searchUser}`
            )
            this.userData = data
          } catch (err) {
            alert(err.message)
          }
        }
        searchData()
      }
    }
  },
  mounted() {
    this.response()
  }
}
</script>

<!-- TODO: style -->
<style scoped>
.manage-container {
  position: relative;
  margin: 80px auto;
  width: 900px;
  height: 100vh;
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

.errorMsg {
  position: absolute;
  color: red;
  padding-top: 10px;
}
</style>
