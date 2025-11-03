<template>
  <div class="glass-card p-6">
    <label class="block text-sm font-medium text-purple-300 mb-3">
      Observation Date
    </label>
    <input 
      type="range" 
      :min="0" 
      :max="dates.length - 1" 
      :value="modelValue"
      @input="$emit('update:modelValue', parseInt($event.target.value))"
      class="w-full h-2 bg-purple-900/50 rounded-lg appearance-none cursor-pointer slider" 
    />
    <div class="flex justify-between mt-2 text-xs text-purple-400">
      <span>{{ dates[0] }}</span>
      <span>{{ dates[dates.length - 1] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateSlider',
  props: {
    dates: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Number,
      required: true
    }
  },
  emits: ['update:modelValue']
};
</script>

<style scoped>
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
  cursor: pointer;
  box-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
  transition: all 0.2s;
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 20px rgba(147, 51, 234, 0.8);
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
  cursor: pointer;
  border: none;
  box-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
  transition: all 0.2s;
}

.slider::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 20px rgba(147, 51, 234, 0.8);
}
</style>