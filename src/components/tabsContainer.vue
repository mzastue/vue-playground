<template>
  <div class="tabs-container">
    <div>
      <p>This is tabsContainer.vue component!</p>
      {{ content }}
      <button type="button" @click="restore">Restore</button>
    </div>

    <ATab :content="content" @input="onATabInput" />
    <BTab v-model="content" />
    <CTab :content="content" :callback="changeContent" />
  </div>
</template>

<script>
import ATab from './tabs/ATab.vue';
import BTab from './tabs/BTab.vue';
import CTab from './tabs/CTab.vue';

const defaultContent = 'It comes from tabs container [tabsContainer.vue] component!';

export default {
  components: {
    ATab, BTab, CTab,
  },

  data () {
    return {
      content: 'It comes from tabs container [tabsContainer.vue] component!',
    }
  },

  methods: {
    onATabInput (value) {
      this.content = value;
    },

    restore () {
      this.content = defaultContent;
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

