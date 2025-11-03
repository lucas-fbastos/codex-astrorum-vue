<template>
  <div
    class="glass-card overflow-hidden group hover:scale-105 transition-all duration-300"
  >
    <div
      class="h-48 bg-gradient-to-br from-purple-900/50 to-blue-900/50 relative overflow-hidden"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :alt="rocketName"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <svg class="w-20 h-20 text-purple-400/30" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
          />
        </svg>
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"
      ></div>
    </div>

    <div class="p-5">
      <div class="flex items-start justify-between mb-3">
        <h3 class="text-lg font-semibold text-white leading-tight">
          {{ rocketName }}
        </h3>
        <span
          v-if="statusName"
          :class="statusColorClass"
          class="px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ml-2"
        >
          {{ statusName }}
        </span>
      </div>

      <p class="text-purple-300 text-sm mb-4">
        <span v-if="missionName">{{ missionName }}</span>
        <span v-if="providerName" class="text-purple-400"> • {{ providerName }}</span>
      </p>

      <div class="space-y-2 text-sm mb-4">
        <div v-if="launchDate" class="flex items-center gap-2 text-purple-300">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{{ launchDate }}</span>
        </div>
        <div v-if="padName" class="flex items-center gap-2 text-purple-300">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span class="truncate">{{ padName }}</span>
        </div>
        <div v-if="orbitName" class="flex items-center gap-2 text-purple-300">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{{ orbitName }}</span>
        </div>
      </div>

      <button
        class="w-full px-4 py-2 bg-purple-600/50 hover:bg-purple-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        View Details
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { getStatusColor, formatDate } from "../utils/launchFormatter";

export default {
  name: "LaunchCard",
  props: {
    launch: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      return this.launch.image?.image_url;
    },
    rocketName() {
      return this.launch.rocket?.configuration?.name || this.launch.name;
    },
    statusName() {
      return this.launch.status?.name;
    },
    statusColorClass() {
      return getStatusColor(this.statusName);
    },
    missionName() {
      return this.launch.mission?.name;
    },
    providerName() {
      return (
        this.launch.launchServiceProvider?.abbreviation ||
        this.launch.launchServiceProvider?.name
      );
    },
    launchDate() {
      return formatDate(this.launch.net);
    },
    padName() {
      return this.launch.pad?.name;
    },
    orbitName() {
      return this.launch.mission?.orbit?.name;
    },
  },
};
</script>
