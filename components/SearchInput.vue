<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, required: true },
});

const emits = defineEmits<{
  (e: "update:modelValue", payload: string): void;
}>();

const inputValue = ref(props.modelValue)

const debouncedLocalValue = refDebounced(inputValue, 500)

watch(debouncedLocalValue, () => {
  emits('update:modelValue', inputValue.value)
})
</script>
<template>
  <div class="relative">
    <IconSearch
      class="w-3 absolute top-[50%] translate-y-[-50%] left-2 opacity-30"
    />

    <input
      type="text"
      placeholder="Search"
      class="pl-10 p-2 rounded"
      v-model="inputValue"
    />
  </div>
</template>
