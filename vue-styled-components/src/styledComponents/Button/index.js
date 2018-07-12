import styled from 'vue-styled-components';

const properties = {
  outlined: Boolean,
};

const Button = styled('button', properties)`
  color: white;
  background-color: red;
  ${props => props.outlined ? 'outline: 2px solid black' : '' } 
`;

export default Button;
