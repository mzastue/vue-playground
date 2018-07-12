<template>
  <div class="home">
    <img src="../assets/logo.png">
    <StyledButton>Styled button</StyledButton>
    <BlueButton outlined>Blue Styled button</BlueButton>
  </div>
</template>

<script>
import StyledButton from '@/styledComponents/Button';
import BlueButton from '@/styledComponents/Button/Blue';

export default {
  name: 'home',
  components: {
    StyledButton,
    BlueButton,
  },
};
</script>
