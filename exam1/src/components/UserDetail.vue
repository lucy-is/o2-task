<!-- TODO: template -->
<template>
  <div class="detail-container">
    <div class="detail-wrap" v-for="detail in detailItem" :key="detail?.id">
      <div class="detail-info-wrap">
        <h5>성명</h5>
        <p>{{ detail?.name }}</p>
      </div>
      <div class="detail-info-wrap">
        <h5>회사명</h5>
        <p>{{ detail?.company.name }}</p>
      </div>
      <div class="detail-info-wrap">
        <h5>주소</h5>
        <p>
          {{
            `${detail?.address.city}, ${detail?.address.street}, ${detail?.address.suite} (${detail?.address.zipcode})`
          }}
        </p>
      </div>
      <div class="detail-info-wrap">
        <h5>이메일</h5>
        <p>{{ detail?.email }}</p>
      </div>
      <div class="detail-info-wrap">
        <h5>사업부문</h5>
        <p>{{ detail?.company.bs }}</p>
      </div>

      <div class="btn-wrap">
        <button @click="closeDetail">닫기</button>
      </div>
    </div>
  </div>
</template>

<!-- TODO: script -->
<script>
/**
 * @props userData (Array) - 유저정보, 검색한 유저정보 / UserInfo.vue
 */
export default {
  name: 'UserDetail',
  props: {
    detailItem: Array
  },
  methods: {
    closeDetail() {
      this.$emit('closeDetail')
    }
  }
}
</script>

<!-- TODO: style -->
<style scoped>
.detail-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: transparent;
  z-index: 9;
}

.detail-wrap {
  position: absolute;
  width: 45%;
  height: 85%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f2f2f2;
  padding: 10% 6%;
  border-radius: 20px;
}

.detail-wrap .detail-info-wrap {
  width: 100%;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #bcbcbc;
  padding: 10px;
}

.detail-wrap .detail-info-wrap h5 {
  margin-bottom: 5px;
}

.btn-wrap {
  text-align: end;
}

.btn-wrap button {
  background-color: #93cbff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
