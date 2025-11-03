<template>
  <div class="glass-card p-6 hover:bg-white/10 transition-all duration-200 cursor-pointer group" @click="$emit('click')">
    <div class="flex items-start gap-4">
      <div class="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-500/30">
        <svg class="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
        </svg>
      </div>
      
      <div class="flex-1 min-w-0">
        <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {{ neo.name }}
        </h3>
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div class="flex items-center gap-2 text-purple-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{{ closeApproachDate }}</span>
          </div>
          <div class="flex items-center gap-2 text-purple-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{{ speed }}</span>
          </div>
          <div class="flex items-center gap-2 text-purple-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>{{ size }}</span>
          </div>
          <div class="flex items-center gap-2 text-orange-400">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
            </svg>
            <span class="font-medium">Hazardous</span>
          </div>
        </div>
      </div>
      
      <svg class="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</template>

<script>
import { formatSize, formatSpeed } from '../utils/neoFormatters';

export default {
  name: 'NEOCard',
  props: {
    neo: {
      type: Object,
      required: true
    }
  },
  emits: ['click'],
  computed: {
    closeApproachDate() {
      return this.neo.closeApproach && this.neo.closeApproach[0] 
        ? this.neo.closeApproach[0].date 
        : 'N/A';
    },
    speed() {
      return formatSpeed(this.neo);
    },
    size() {
      return formatSize(this.neo);
    }
  }
};
</script>