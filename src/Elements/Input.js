import styled from 'styled-components';
import Theme from './Theme';

const Input = styled.input`
  ${Theme()};
  width: 100%;
  text-align: center;
  ::-webkit-input-placeholder {
    color: #444;
  }
`;

export default Input;
