<template>
    <div class="tab">
        <h2>Hey I am D-Tab</h2>
        <h4>It's model as prop way to change value.</h4>
        {{ model.content }}
        <div>
            <input type="name" v-model="model.content">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        model: {
            type: Object,
            default: () => {},
        },
    }   
}
</script>

<style lang="scss" scoped>
@import './../../assets/mixins';
.tab {
    @include tabStyle;
}
</style>