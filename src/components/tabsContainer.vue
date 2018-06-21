<template>
  <div class="tabs-container">
    <div>
      <p>This is tabsContainer.vue component!</p>
      <p>{{ model.content }}</p>
      <button type="button" @click="restore">Restore</button>
    </div>

    <ATab :content="model.content" @input="onATabInput" />
    <BTab v-model="model.content" />
    <CTab :content="model.content" :callback="changeContent" />
    <DTab :model="model" />
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
      model: {
        content: defaultContent,
      },
    }
  },

  methods: {
    onATabInput (value) {
      this.model.content = value;
    },

    restore () {
      this.model.content = defaultContent;
    },

    changeContent (newContent) {
      this.model.content = newContent;
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

