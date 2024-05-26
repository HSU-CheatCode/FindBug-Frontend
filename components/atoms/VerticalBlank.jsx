// import {DimensionValue, View} from 'react-native';

// interface PropTypes {
//   width: DimensionValue;
// }

// const VerticalBlank = (props: PropTypes) => {
//   return <View style={{marginLeft: props.width}} />;
// };

// export default VerticalBlank;

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const VerticalBlank = ({ width }) => {
  return <View style={{ marginLeft: width }} />;
};

VerticalBlank.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default VerticalBlank;

