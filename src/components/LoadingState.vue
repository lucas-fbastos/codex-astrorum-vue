<template>
  <div class="min-h-screen flex items-center justify-center relative z-10">
    <div class="text-center">
      <div class="relative w-20 h-20 mx-auto mb-6">
        <div class="absolute inset-0 border-4 border-purple-500/30 rounded-full"></div>
        <div class="absolute inset-0 border-4 border-t-purple-400 rounded-full animate-spin"></div>
      </div>
      <p class="text-purple-200 text-lg">Loading cosmic data...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingState'
};
</script>