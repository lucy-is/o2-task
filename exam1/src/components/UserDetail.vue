<!-- TODO: template -->
<template>
  <div class="detail-container" v-if="toggle">
    <div v-for="detail in detailItem" :key="detail.id">
      <div>
        <h4>성명</h4>
        <p>{{ detail?.name }}</p>
      </div>
      <div>
        <h4>회사명</h4>
        <p>{{ detail?.company.name }}</p>
      </div>
      <div>
        <h4>주소</h4>
        <p>
          {{
            `${detail?.address.city}, ${detail?.address.street}, ${detail?.address.suite} (${detail?.address.zipcode})`
          }}
        </p>
      </div>
      <div>
        <h4>이메일</h4>
        <p>{{ detail?.email }}</p>
      </div>
      <div>
        <h4>사업부문</h4>
        <p>{{ detail?.company.bs }}</p>
      </div>

      <button @click="close">닫기</button>
    </div>
  </div>
</template>

<!-- TODO: script -->
<script>
/**
 * @props userData (Array) - 유저정보, 검색한 유저정보 / UserInfo.vue
 * @props toggle (Boolean) - 유저정보 상세보기 on off / UserInfo.vue
 */
export default {
  name: 'UserDetail',
  props: {
    detailItem: Array,
    toggle: Boolean
  },
  methods: {
    close(e) {
      e.preventDefault()
      // this.toggle = false
    }
  }
}
</script>

<!-- TODO: style -->
<style scoped></style>
