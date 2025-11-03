<template>
  <div class="min-h-screen flex items-center justify-center relative z-10 p-4">
    <div class="glass-card p-8 max-w-md w-full text-center">
      <div class="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
        <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-white mb-2">Connection Error</h3>
      <p class="text-purple-200 mb-6">{{ error }}</p>
      <button @click="$emit('retry')"
        class="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
        Retry Connection
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorState',
  props: {
    error: {
      type: String,
      required: true
    }
  },
  emits: ['retry']
};
</script>