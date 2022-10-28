<!-- TODO: template -->
<template>
  <div class="home-container">
    <h1 class="title">O2PLUSS</h1>
    <nav class="nav-wrap">
      <router-link to="/management">사용자관리</router-link>
      <router-link to="/setting">환경설정</router-link>
    </nav>
  </div>
</template>

<!-- TODO: script -->
<script>
export default {
  name: 'HomeView'
};
</script>

<!-- TODO: style -->
<style scoped>
.home-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.title {
  font-size: 50px;
  border: 1px solid #a0d1ff;
  color: #a0d1ff;
  padding: 10px 30px 5px;
  margin-bottom: 30px;
}

.nav-wrap {
  display: flex;
  flex-direction: column;
}

.nav-wrap a {
  font-size: 30px;
  font-weight: bold;
  color: #222;
  margin-bottom: 30px;
  cursor: pointer;
}
</style>
