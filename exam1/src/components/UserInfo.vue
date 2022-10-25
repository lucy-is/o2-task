<template>
  <div>
    <h2>사용자정보</h2>
    <table border="1">
      <thead>
        <tr>
          <th v-for="(infoTitle, i) in infoTitles" :key="i">{{ infoTitle }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.company.name }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>pagination</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'UserInfo',
  data() {
    return {
      infoTitles: ['#', '성명', '닉네임', '회사명'],
      users: []
    }
  },
  methods: {
    response() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          this.users = res.data
        })
        .catch((err) => console.log(err))
    },
    search() {}
  },
  setup() {},
  created() {
    this.response()
  }
}
</script>
<style></style>
