<!-- TODO: template -->
<template>
  <div class="setting-container">
    <h1>환경설정</h1>

    <div class="box">
      <p>준비중인 페이지입니다.</p>
    </div>

    <ToHomeVue />
  </div>
</template>

<!-- TODO: script -->
<script>
import ToHomeVue from '@/components/ToHome.vue'

export default {
  name: 'UserSettingView',
  components: {
    ToHomeVue
  }
}
</script>

<!-- TODO: style -->
<style scoped>
.setting-container {
  position: relative;
  width: 900px;
  margin: 80px auto;
}

h1 {
  margin: 50px 0;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: #f5f5f5;
}

.box p {
  font-size: 1.5rem;
}
</style>
