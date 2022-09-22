# Vue SFC

__RFC NUM__: 05-01

## Summary

The BubblePod standard VUE SFC specification.

## Content

### Basic info about vue file
Each vue component MUST be a .vue file.
Each vue component SHOULD be written used Composition API over Option API.

# Naming conventions
Each vue component name MUST be composed by at least two words using the PascalCase notation.
Each vue component MUST be prefixed using `BP` (ex: BPButton) that stand for BubblePod: this is very useful for distinction between custom and library components.

### SFC

The structure of the vue SFC SHOULD be as follows:
```vue
<script lang="ts" setup>
// TYPESCRIPT CODE HERE.
</script>

<template>
  <!-- TEMPLATE CONTENT HERE. -->
</template>

<style lang="scss" scoped>
// SCSS CODE HERE.
</style>
```

Rules:
- __`<script>`__:
    - MUST be placed always at first;
    - MUST be written in Typescript;
    - SHOULD have setup flag (only for exceptional cases we can use Options API);
    - First line of code MUST start from position 0;

- __`<template>`__:
    - MUST be placed always in the middle;
    - MUST contains at least one HTML element, otherwise developer should delete it;
    - First line of code MUST start from position 2;

- __`<style>`__:
    - MUST be placed always at the end;
    - MUST be written in SCSS;
    - If no style is required developer should delete it;
    - First line of code MUST start from position 0;
