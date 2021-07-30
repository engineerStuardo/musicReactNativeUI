import {View} from 'react-native';
import styled from 'styled-components/native';

export const MenuBottomContainer = styled(View)`
  border-top-color: #393e46;
  border-top-width: 1px;
  width: ${props => `${props.width}px`};
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const InnerContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;
