import {Text} from 'react-native';
import styled from 'styled-components/native';

export const TextStyled = styled(Text)`
  font-size: ${props => `${props.size}px`};
  font-weight: ${props => `${props.weight}`};
  text-align: center;
  color: #eeeeee;
`;
