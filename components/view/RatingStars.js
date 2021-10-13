import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';
import { FontAwesome } from '@expo/vector-icons';

export default function RatingStars({ size, style }) {
  return (
    <View style={[style, styles.container]}>
      <FontAwesome
        style={styles.star}
        name="star"
        size={size}
        color={AppConstant.COLOR_PRIMARY}
      />
      <FontAwesome
        style={styles.star}
        name="star"
        size={size}
        color={AppConstant.COLOR_PRIMARY}
      />
      <FontAwesome
        style={styles.star}
        name="star"
        size={size}
        color={AppConstant.COLOR_PRIMARY}
      />
      <FontAwesome
        style={styles.star}
        name="star-half-empty"
        size={size}
        color={AppConstant.COLOR_PRIMARY}
      />
      <FontAwesome
        style={styles.star}
        name="star-o"
        size={size}
        color={AppConstant.COLOR_PRIMARY}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  star: {
    marginRight: 2,
  },
});
