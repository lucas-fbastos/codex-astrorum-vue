<template>
  <section>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-white flex items-center gap-3">
        <span class="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></span>
        Hazardous Near Earth Objects
      </h2>
      <div class="glass-card px-4 py-2">
        <span class="text-purple-300 text-sm">{{ currentDate }}</span>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <EmptyState v-if="hazardousNEOs.length === 0" />
        
        <div v-else class="space-y-4">
          <NEOCard
            v-for="neo in hazardousNEOs"
            :key="neo.id"
            :neo="neo"
            @click="$emit('select-neo', neo)"
          />
        </div>

        <DateSlider
          :dates="dates"
          :modelValue="dateFilter"
          @update:modelValue="$emit('update:dateFilter', $event)"
          class="mt-6"
        />
      </div>

      <SafeNEOSidebar
        :neos="safeNEOs"
        @select-neo="$emit('select-neo', $event)"
      />
    </div>
  </section>
</template>

<script>
import EmptyState from './EmptyState.vue';
import NEOCard from './NEOCard.vue';
import DateSlider from './DateSlider.vue';
import SafeNEOSidebar from './SafeNEOSidebar.vue';

export default {
  name: 'HazardousObjectsSection',
  components: {
    EmptyState,
    NEOCard,
    DateSlider,
    SafeNEOSidebar
  },
  props: {
    hazardousNEOs: {
      type: Array,
      required: true
    },
    safeNEOs: {
      type: Array,
      required: true
    },
    currentDate: {
      type: String,
      required: true
    },
    dates: {
      type: Array,
      required: true
    },
    dateFilter: {
      type: Number,
      required: true
    }
  },
  emits: ['select-neo', 'update:dateFilter']
};
</script>