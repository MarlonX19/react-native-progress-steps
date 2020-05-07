import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 35 }}>
    <View style={{ bottom: 18 }}>{props.renderPreviousButton()}</View>
    <View style={{ bottom: 18 }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
