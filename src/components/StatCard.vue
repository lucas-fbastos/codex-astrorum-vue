<template>
  <div class="glass-card p-4 hover:scale-105 transition-transform duration-200">
    <div class="flex items-center justify-between mb-2">
      <span class="text-purple-300 text-sm">{{ label }}</span>
      <component :is="iconComponent" :class="iconColorClass" class="w-5 h-5" />
    </div>
    <div class="text-2xl font-bold text-white">{{ value }}</div>
    <div class="text-xs text-purple-400 mt-1">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'StatCard',
  props: {
    icon: {
      type: String,
      required: true,
      validator: (value) => ['alert', 'check', 'rocket', 'calendar'].includes(value)
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'purple',
      validator: (value) => ['red', 'green', 'blue', 'purple'].includes(value)
    }
  },
  computed: {
    iconComponent() {
      const icons = {
        alert: 'AlertIcon',
        check: 'CheckIcon',
        rocket: 'RocketIcon',
        calendar: 'CalendarIcon'
      };
      return icons[this.icon];
    },
    iconColorClass() {
      const colors = {
        red: 'text-red-400',
        green: 'text-green-400',
        blue: 'text-blue-400',
        purple: 'text-purple-400'
      };
      return colors[this.color];
    }
  },
  components: {
    AlertIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
        </svg>
      `
    },
    CheckIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
        </svg>
      `
    },
    RocketIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      `
    },
    CalendarIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" />
        </svg>
      `
    }
  }
};
</script>