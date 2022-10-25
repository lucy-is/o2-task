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
          v-for="user in userData"
          :key="user.id"
          @click="detail"
          :data-id="user.id"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.company.name }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" v-if="userData.length > 1">pagination</td>
          <td colspan="4" v-else-if="userData.length === 0">
            조회할 데이터가 없습니다.
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  <p>{{ detailItem }}</p>
</template>

<!-- TODO: script -->
<script>
// import axios from 'axios'

/**
 * @props userData (Array) - 유저정보, 검색한 유저정보
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
      detailItem: {}
    }
  },
  methods: {
    detail(e) {
      const currentNum = e.currentTarget.dataset.id

      this.userData.forEach((user) => {
        return currentNum === user.id ? console.log('18') : null
      })
    }
  },
  setup() {}
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
