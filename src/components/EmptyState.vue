<template>
  <div class="glass-card p-12 text-center">
    <svg class="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h3 class="text-xl font-semibold text-white mb-2">All Clear</h3>
    <p class="text-purple-300">No hazardous objects detected for this date</p>
  </div>
</template>

<script>
export default {
  name: 'EmptyState'
};
</script>