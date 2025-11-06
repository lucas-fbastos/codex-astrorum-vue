<template>
  <div class="lg:col-span-1">
    <div class="glass-card p-6 sticky top-8">
      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
        </svg>
        Safe Objects
      </h3>
      <div class="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
        <div v-for="neo in neos" :key="neo.id"
          class="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer border border-white/5"
          @click="$emit('select-neo', neo)">
          <div class="flex items-start justify-between gap-2">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">{{ neo.name }}</p>
              <div class="grid grid-cols-2 gap-3 text-sm">
                <div class="flex items-center gap-2 text-purple-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ neo.closeApproach[0].date }}</span>
                </div>
              </div>
              <p class="text-xs text-purple-400 mt-1">{{ formatDiameter(neo) }}</p>
            </div>
            <svg class="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDiameter } from '../utils/neoFormatters';

export default {
  name: 'SafeNEOSidebar',
  props: {
    neos: {
      type: Array,
      required: true
    }
  },
  emits: ['select-neo'],
  methods: {
    formatDiameter
  }
};
</script>