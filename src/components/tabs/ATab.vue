<template>
    <div class="tab">
        <h2>Hey I am A-Tab</h2>
        <h4>It's event emmit way to change value.</h4>
        {{ content }}
        <div>
            <input type="text" :value="content" @input="onChange($event.target)">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
        }
    },

    methods: {
        onChange (target) {
            this.$emit('input', target.value);
        }
    }
}
</script>

<style lang="scss" scoped>
@import './../../assets/mixins';
.tab {
    @include tabStyle;
}
</style>
