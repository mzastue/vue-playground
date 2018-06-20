<template>
  <div class="tabs-container">
    <div>
      <p>This is tabsContainer.vue component!</p>
      <p>{{ content }}</p>
      <p>{{ modelForD.content }}</p>
      <button type="button" @click="restore">Restore</button>
    </div>

    <ATab :content="content" @input="onATabInput" />
    <BTab v-model="content" />
    <CTab :content="content" :callback="changeContent" />
    <DTab :model="modelForD" />
  </div>
</template>

<script>
import ATab from './tabs/ATab.vue';
import BTab from './tabs/BTab.vue';
import CTab from './tabs/CTab.vue';
import DTab from './tabs/DTab.vue';

const defaultContent = 'It comes from tabs container [tabsContainer.vue] component!';

export default {
  components: {
    ATab, BTab, CTab, DTab,
  },

  data () {
    return {
      content: defaultContent,
      modelForD: {
        content: defaultContent,
      }
    }
  },

  methods: {
    onATabInput (value) {
      this.content = value;
    },

    restore () {
      this.content = defaultContent;
      this.modelForD.content = defaultContent;
    },

    changeContent (newContent) {
      this.content = newContent;
    }
  }
};
</script>

<style lang="scss">
@import './../assets/mixins';
.tabs-container {
    @include tabStyle;
    padding: 20px;
}
</style>

