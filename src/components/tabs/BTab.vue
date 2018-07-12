<template>
    <div class="tab">
        <h2>Hey I am B-Tab</h2>
        <h4>It's v-model way to change value.</h4>
        {{ value }}
        <div>
            <input type="name" :value="value" @input="$emit('input', $event.target.value)">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style lang="scss" scoped>
@import './../../assets/mixins';
.tab {
    @include tabStyle;
}
</style>