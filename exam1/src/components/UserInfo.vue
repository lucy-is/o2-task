<!-- TODO: template -->
<template>
  <div>
    <h2>사용자정보</h2>
    <table>
      <thead>
        <tr>
          <th v-for="(infoTitle, i) in infoTitles" :key="i">{{ infoTitle }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="user-info-click"
          v-for="user in userData"
          :key="user.id"
          :data-id="user.id"
          @click="detail"
        >
          <td>{{ user?.id }}</td>
          <td>{{ user?.name }}</td>
          <td>{{ user?.username }}</td>
          <td>{{ user?.company.name }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" v-if="userData.length >= 1">pagination</td>
          <td colspan="4" v-else-if="userData.length === 0">
            조회할 데이터가 없습니다.
          </td>
        </tr>
      </tfoot>
    </table>
  </div>

  <UserDetail
    v-if="displayDetail"
    :detailItem="detailItem"
    @closeDetail="close"
  />

  <!-- <Spinner v-if="isLoading" /> -->
</template>

<!-- TODO: script -->
<script>
import axios from 'axios'

import UserDetail from '@/components/UserDetail.vue'
// import Spinner from './Spinner.vue'

/**
 * @props userData (Array) - 유저정보, 검색한 유저정보 / UserManageView.vue
 */
export default {
  name: 'UserInfo',
  props: {
    userData: Array
  },
  data() {
    return {
      infoTitles: ['#', '성명', '닉네임', '회사명'],
      users: [],
      detailItem: [],
      displayDetail: false,
      isLoading: false
    }
  },
  methods: {
    detail(e) {
      const currentNum = e.currentTarget.dataset.id
      this.displayDetail = true

      /**
       * @description userItem - 사용자 정보 클릭시 단일 데이터 호출
       */
      const userItem = async () => {
        try {
          this.$emit('loadingCtl', true)

          const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/users?id=${currentNum}`
          )
          this.detailItem = data
        } catch (err) {
          alert(err.message)
        } finally {
          this.$emit('loadingCtl', false)
        }
      }
      userItem()
    },
    close() {
      this.displayDetail = false
    }
  },
  setup() {},
  components: {
    UserDetail
  },
  emits: ['loadingCtl']
}
</script>

<!-- TODO: style -->
<style scoped>
h2 {
  margin-bottom: 20px;
}

table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}

.user-info-click {
  cursor: pointer;
}

.user-info-click:hover {
  background-color: #eee;
}

th {
  padding: 10px;
  border: 1px solid #222;
  background-color: #e5e5e5;
}

td {
  padding: 10px;
  border: 1px solid #222;
}
</style>
