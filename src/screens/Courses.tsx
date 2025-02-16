import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CoursesScreen = () => {
  return (
    <LinearGradient
      colors={['#2C1213', '#1A0B0B']}
      style={styles.container}
    >
      <Text style={styles.text}>Courses Screen</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#F0F0F0',
    fontSize: 18,
  },
});

export default CoursesScreen; 