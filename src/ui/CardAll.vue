<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  width: 250px;
  height: 150px;
  -o-object-fit: cover;
  object-fit: cover;
  display: inline-table;
  border-spacing: 10px 0em;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>