<script setup lang="ts">
import { useCounter } from '../composables/useCounter';

const props = withDefaults(defineProps<{
  title?: string;
  initial?: number;
}>(), {
  title:   'Counter',
  initial: 0,
});

const {
  count,
  doubled,
  decrement,
  increment,
  reset,
} = useCounter(props.initial);
</script>

<template>
  <div class="counter-display">
    <h1 class="title">
      {{ title }}
    </h1>
    <p data-testid="count">
      {{ count }}
    </p>
    <p data-testid="doubled">
      {{ doubled }}
    </p>
    <button
      data-testid="btn-increment"
      @click="increment"
    >
      +
    </button>
    <button
      data-testid="btn-decrement"
      @click="decrement"
    >
      -
    </button>
    <button
      data-testid="btn-reset"
      @click="reset"
    >
      Reset
    </button>
  </div>
</template>
