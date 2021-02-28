import {Dimensions} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

const guidelineBaseWidth = 375;

export const scale = (size) =>
  (dimensions.fullWidth / guidelineBaseWidth) * size;
