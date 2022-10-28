<!-- TODO: template -->
<template>
  <div class="detail-container">
    <div class="detail-wrap" v-for="user in detailItem" :key="user?.id">
      <div class="detail-info-wrap">
        <h5>성명</h5>
        <p>{{ user?.name }}</p>
      </div>
      <div class="detail-info-wrap">
        <h5>회사명</h5>
        <p>{{ user?.company.name }}</p>
      </div>
      <div class="detail-info-wrap">
        <h5>주소</h5>
        <p>
          {{
            `${user?.address.city}, ${user?.address.street}, ${user?.address.suite} (${user?.address.zipcode})`
          }}
        </p>
      </div>
      <div class="detail-info-wrap">
        <h5>이메일</h5>
        <p>{{ user?.email }}</p>
      </div>
      <div class="detail-info-wrap">
        <h5>사업부문</h5>
        <p>{{ user?.company.bs }}</p>
      </div>

      <div class="btn-wrap">
        <button @click="closeBtn">닫기</button>
      </div>

      <div class="close-confirm-container" v-if="closeConfirm">
        <p>"{{ user?.name }}" 님의 정보조회를 마치시겠습니까?</p>
        <div class="confirm-btn-wrap">
          <button @click="cancelBtn">취소</button>
          <button @click="closeDetail">확인</button>
        </div>
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
  data() {
    return {
      closeConfirm: false
    };
  },
  methods: {
    closeBtn() {
      this.closeConfirm = true;
    },
    closeDetail() {
      this.$emit('closeDetail');
    },
    cancelBtn() {
      this.closeConfirm = false;
    }
  },
  components: {}
};
</script>

<!-- TODO: style -->
<style scoped>
.detail-container {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 1;
}

.detail-wrap {
  position: fixed;
  width: 400px;
  top: 10%;
  background-color: #f2f2f2;
  padding: 80px 50px 50px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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

.close-confirm-container {
  position: absolute;
  width: 500px;
  top: 30%;
  left: -12%;
  background-color: #fff;
  border: 1px solid #bcbcbc;
  padding: 60px 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.close-confirm-container > p {
  display: flex;
  justify-content: center;
  margin: 50px 0 50px;
}

.confirm-btn-wrap {
  display: flex;
  justify-content: end;
}

.confirm-btn-wrap > button {
  padding: 15px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.confirm-btn-wrap > button:nth-child(1) {
  background: #e2f1ff;
  margin-right: 10px;
}

.confirm-btn-wrap > button:nth-child(2) {
  background: #93cbff;
}
</style>
