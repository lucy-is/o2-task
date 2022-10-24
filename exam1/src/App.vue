<!-- TODO: template -->
<template>
  <router-view />
</template>

<!-- TODO: script -->
<script>
export default {
  name: 'App'
}
</script>

<!-- TODO: style -->
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li,
ol {
  list-style: none;
}

input {
  outline: none;
}

.home-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.title {
  font-size: 50px;
  color: #a0d1ff;
  border: 1px solid #a0d1ff;
  padding: 5px 30px;
  margin-bottom: 30px;
}

.nav-wrap {
  display: flex;
  flex-direction: column;
}

.nav-wrap > a {
  font-size: 30px;
  font-weight: bold;
  color: #222;
  margin-bottom: 30px;
  cursor: pointer;
}
</style>
