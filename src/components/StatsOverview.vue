<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <StatCard
      icon="alert"
      label="Hazardous"
      :value="hazardousCount"
      subtitle="Active alerts"
      color="red"
    />
    <StatCard
      icon="check"
      label="Safe NEOs"
      :value="safeCount"
      subtitle="Monitored objects"
      color="green"
    />
    <StatCard
      icon="rocket"
      label="Launches"
      :value="launchesCount"
      subtitle="Upcoming missions"
      color="blue"
    />
    <StatCard
      icon="calendar"
      label="Observation"
      :value="datesCount"
      subtitle="Days tracked"
      color="purple"
    />
  </div>
</template>

<script>
import StatCard from './StatCard.vue';

export default {
  name: 'StatsOverview',
  components: {
    StatCard
  },
  props: {
    hazardousCount: {
      type: Number,
      required: true
    },
    safeCount: {
      type: Number,
      required: true
    },
    launchesCount: {
      type: Number,
      required: true
    },
    datesCount: {
      type: Number,
      required: true
    }
  }
};
</script>