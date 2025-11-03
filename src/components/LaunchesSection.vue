<template>
  <section>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-white flex items-center gap-3">
        <span class="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
        Upcoming Launches
      </h2>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <LaunchCard
        v-for="launch in launches"
        :key="launch.id"
        :launch="launch"
      />
    </div>
  </section>
</template>

<script>
import LaunchCard from './LaunchCard.vue';

export default {
  name: 'LaunchesSection',
  components: {
    LaunchCard
  },
  props: {
    launches: {
      type: Array,
      required: true
    }
  }
};
</script>