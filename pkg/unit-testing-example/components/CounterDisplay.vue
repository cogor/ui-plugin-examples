<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { useCounter } from '../composables/useCounter';

export default defineComponent({
  name: 'CounterDisplay',

  props: {
    title: {
      type:    String as PropType<string>,
      default: 'Counter',
    },
    initial: {
      type:    Number as PropType<number>,
      default: 0,
    },
  },

  setup(props) {
    const {
      count,
      doubled,
      decrement,
      increment,
      reset,
    } = useCounter(props.initial);

    return {
      count,
      doubled,
      decrement,
      increment,
      reset,
    };
  },
});
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
