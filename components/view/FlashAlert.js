import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FlashAlert({ message, showAlert, onFinished }) {
  const [viewHeight, setViewHeight] = useState(100); // Make inital top: -100
  const floatAnim = useRef(new Animated.ValueXY()).current; // Initial value for transform
  const animStyle = { transform: floatAnim.getTranslateTransform() };

  let SPRING_CONFIG = { tension: 2, friction: 3 }; //Soft spring
  let animationSeq = Animated.sequence([
    Animated.spring(floatAnim, {
      ...SPRING_CONFIG,
      toValue: { x: 0, y: viewHeight + 30 },
      useNativeDriver: true,
    }),
    Animated.spring(floatAnim, {
      ...SPRING_CONFIG,
      toValue: { x: 0, y: 0 },
      useNativeDriver: true,
    }),
  ]);

  useEffect(() => {
    if (showAlert) {
      animationSeq.stop();
      animationSeq.start();
      onFinished();
    }
  }, [showAlert]);

  return (
    <Animated.View
      style={[styles.container, { top: -viewHeight }, animStyle]}
      onLayout={(event) => {
        // setViewHeight(event.nativeEvent.layout.height);
      }}
    >
      <View style={styles.flashAlertContainer}>
        <Ionicons name="alert-circle" size={24} color="#f73d1d" />
        <Text style={styles.flashAlertMessage}>{message}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    padding: 10,
    paddingHorizontal: 30,
  },
  flashAlertContainer: {
    flexDirection: 'row',
    backgroundColor: '#f7dad5',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  flashAlertMessage: {
    marginHorizontal: 5,
  },
});
