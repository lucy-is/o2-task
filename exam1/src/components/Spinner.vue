<template>
  <div class="spinner-container">
    <div class="spinner" />
  </div>
</template>

<style>
.spinner-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  background: rgba(190, 190, 190, 0.5);
  z-index: 9;
}

.spinner {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #f9d4ca;
  border-bottom: 5px solid #f25325;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
