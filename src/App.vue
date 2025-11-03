<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-950 to-violet-950">
    <CosmicBackground />
    
    <LoadingState v-if="loading" />
    <ErrorState v-else-if="error" :error="error" @retry="fetchData" />
    
    <div v-else class="relative z-10">
      <AppHeader />
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <StatsOverview 
          :hazardousCount="hazardousNEOs.length"
          :safeCount="safeNEOs.length"
          :launchesCount="launches.length"
          :datesCount="dates.length"
        />
        
        <HazardousObjectsSection
          :hazardousNEOs="hazardousNEOs"
          :safeNEOs="safeNEOs"
          :currentDate="currentDate"
          :dates="dates"
          :dateFilter="dateFilter"
          @update:dateFilter="dateFilter = $event"
          @select-neo="selectNEO"
        />
        
        <LaunchesSection :launches="launches" />
        
        <AppFooter />
      </div>
    </div>
    
    <NEODetailModal 
      v-if="selectedNEO" 
      :neo="selectedNEO" 
      @close="selectedNEO = null" 
    />
  </div>
</template>

<script>
import CosmicBackground from './components/CosmicBackground.vue';
import LoadingState from './components/LoadingState.vue';
import ErrorState from './components/ErrorState.vue';
import AppHeader from './components/AppHeader.vue';
import StatsOverview from './components/StatsOverview.vue';
import HazardousObjectsSection from './components/HazardousObjectsSection.vue';
import LaunchesSection from './components/LaunchesSection.vue';
import AppFooter from './components/AppFooter.vue';
import NEODetailModal from './components/NEODetailModal.vue';

export default {
  name: 'App',
  components: {
    CosmicBackground,
    LoadingState,
    ErrorState,
    AppHeader,
    StatsOverview,
    HazardousObjectsSection,
    LaunchesSection,
    AppFooter,
    NEODetailModal
  },
  data() {
    return {
      API_BASE_URL: 'http://localhost:8080',
      neoData: {
        hazardousObjects: {},
        nearEarthObjects: {}
      },
      launches: [],
      dateFilter: 0,
      selectedNEO: null,
      loading: true,
      error: null
    };
  },
  computed: {
    dates() {
      return Object.keys(this.neoData.hazardousObjects);
    },
    currentDate() {
      return this.dates[this.dateFilter] || this.dates[0];
    },
    hazardousNEOs() {
      return this.neoData.hazardousObjects[this.currentDate] || [];
    },
    safeNEOs() {
      return this.neoData.nearEarthObjects[this.currentDate] || [];
    }
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        this.error = null;

        const neoResponse = await fetch(`${this.API_BASE_URL}/neo`);
        if (!neoResponse.ok) {
          throw new Error(`NEO API error: ${neoResponse.status}`);
        }
        this.neoData = await neoResponse.json();

        const launchesResponse = await fetch(`${this.API_BASE_URL}/launches`);
        if (!launchesResponse.ok) {
          throw new Error(`Launches API error: ${launchesResponse.status}`);
        }
        const launchesJson = await launchesResponse.json();
        this.launches = launchesJson.results || [];

        this.loading = false;
      } catch (err) {
        console.error('Error fetching data:', err);
        this.error = err.message;
        this.loading = false;
      }
    },
    selectNEO(neo) {
      this.selectedNEO = neo;
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
/* Global styles */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(147, 51, 234, 0.5);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(147, 51, 234, 0.7);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}

.animate-slideUp {
  animation: slideUp 0.3s ease-out;
}
</style>