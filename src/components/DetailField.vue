
<template>
  <div>
    <label class="text-sm text-purple-400 block mb-1">{{ label }}</label>
    <p class="text-lg text-white font-semibold">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'DetailField',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
};
</script>