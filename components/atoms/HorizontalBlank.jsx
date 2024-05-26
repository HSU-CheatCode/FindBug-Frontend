// import {DimensionValue, View} from 'react-native';

// interface PropTypes {
//   height: DimensionValue;
// }
// const HorizontalBlank = (props: PropTypes) => {
//   return <View style={{marginTop: props.height}} />;
// };

// export default HorizontalBlank;
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const HorizontalBlank = ({ height }) => {
  return <View style={{ marginTop: height }} />;
};

HorizontalBlank.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default HorizontalBlank;
