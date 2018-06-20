<template>
    <div class="tab">
        <h2>Hey I am C-Tab</h2>
        <h4>It's callback way to change value.</h4>
        {{ content }}
        <div>
            <input type="name" value="content" @input="callback($event.target.value)">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: String },
        callback: { type: Function },
    }   
}
</script>

<style lang="scss" scoped>
@import './../../assets/mixins';
.tab {
    @include tabStyle;
}
</style>