<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
  </div>
</template>

<script>
export default {
  name: 'CosmicBackground'
};
</script>

<style scoped>
@keyframes move-stars {
  from { transform: translateY(0); }
  to { transform: translateY(-2000px); }
}

.stars,
.stars2,
.stars3 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.stars {
  background-image: 
    radial-gradient(3px 3px at 20px 30px, #eee, rgba(0, 0, 0, 0)),
    radial-gradient(3px 3px at 60px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 50px 50px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(3px 3px at 90px 10px, #fff, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: move-stars 50s linear infinite;
  opacity: 0.3;
}

.stars2 {
  background-image: 
    radial-gradient(2px 2px at 100px 150px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 200px 200px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 50px 100px, #fff, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 300px 300px;
  animation: move-stars 75s linear infinite;
  opacity: 0.2;
}

.stars3 {
  background-image: 
    radial-gradient(2px 2px at 150px 250px, rgba(147, 51, 234, 0.5), rgba(0, 0, 0, 0)),
    radial-gradient(3px 3px at 350px 150px, rgba(139, 92, 246, 0.3), rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 500px 500px;
  animation: move-stars 100s linear infinite;
  opacity: 0.4;
}
</style>