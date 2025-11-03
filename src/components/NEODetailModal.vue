<template>
  <div @click="$emit('close')"
    class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
    <div @click.stop class="glass-card max-w-2xl w-full p-8 animate-slideUp">
      <div class="flex items-start justify-between mb-6">
        <div>
          <h2 class="text-2xl font-bold text-white mb-2">{{ neo.name }}</h2>
          <span 
            :class="hazardBadgeClass"
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border"
          >
            <span class="w-2 h-2 rounded-full" :class="hazardDotClass"></span>
            {{ hazardText }}
          </span>
        </div>
        <button @click="$emit('close')"
          class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-purple-300 hover:text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <DetailField label="Absolute Magnitude" :value="absoluteMagnitude" />
          <DetailField label="Estimated Diameter" :value="diameter" />
          <DetailField label="Relative Velocity" :value="velocity" />
        </div>
        <div class="space-y-4">
          <DetailField label="Close Approach Date" :value="approachDate" />
          <DetailField label="Miss Distance" :value="missDistance" />
          <DetailField label="Orbiting Body" :value="orbitingBody" />
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-white/10">
        <button @click="$emit('close')"
          class="w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DetailField from './DetailField.vue';
import { formatSizeDetail, formatVelocity, formatMissDistance } from '../utils/neoFormatters';

export default {
  name: 'NEODetailModal',
  components: {
    DetailField
  },
  props: {
    neo: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  computed: {
    hazardBadgeClass() {
      return this.neo.isPotentiallyHazardousAsteroid
        ? 'bg-red-500/20 text-red-400 border-red-500/30'
        : 'bg-green-500/20 text-green-400 border-green-500/30';
    },
    hazardDotClass() {
      return this.neo.isPotentiallyHazardousAsteroid ? 'bg-red-400' : 'bg-green-400';
    },
    hazardText() {
      return this.neo.isPotentiallyHazardousAsteroid 
        ? 'Potentially Hazardous' 
        : 'Safe Object';
    },
    absoluteMagnitude() {
      return this.neo.absoluteMagnitude || 'N/A';
    },
    diameter() {
      return formatSizeDetail(this.neo);
    },
    velocity() {
      return formatVelocity(this.neo);
    },
    approachDate() {
      return this.neo.closeApproach?.[0]?.date || 'N/A';
    },
    missDistance() {
      return formatMissDistance(this.neo);
    },
    orbitingBody() {
      return this.neo.closeApproach?.[0]?.orbitingBody || 'N/A';
    }
  }
};
</script>