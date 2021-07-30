import {View, Image} from 'react-native';
import styled from 'styled-components/native';

export const MainContainer = styled(View)`
  width: ${props => `${props.width}px`};
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled(View)`
  width: 300px;
  height: 340px;
  align-items: center;
  margin-bottom: 25px;
  elevation: 5;
`;

export const ImageStyle = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  margin-bottom: 15px;
`;
