import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const AnimatedSplash = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [welcomeFade] = useState(new Animated.Value(0));

  useEffect(() => {
    // Sequence of animations
    Animated.sequence([
      // Fade in logo
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      // Wait for a second
      Animated.delay(1000),
      // Fade in welcome text
      Animated.timing(welcomeFade, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      // Wait for another second
      Animated.delay(1000),
    ]).start(() => {
      // Navigate to Landing after animations
      navigation.reset({
        index: 0,
        routes: [{ name: 'Landing' }],
      });
    });
  }, []);

  return (
    <LinearGradient
      colors={['#4A1D1F', '#3A1718', '#2C1213']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Animated.Image
          source={require('../../assets/hillmantok-logo.png')}
          style={[styles.logo, { opacity: fadeAnim }]}
          resizeMode="contain"
        />
        <Animated.View style={[styles.welcomeContainer, { opacity: welcomeFade }]}>
          <Text style={styles.welcomeTitle}>Welcome to</Text>
          <Text style={styles.welcomeSubtitle}>Learning</Text>
          <Text style={styles.welcomeText}>
            Your journey to knowledge begins here
          </Text>
        </Animated.View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A1D1F',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 8,
    fontWeight: '300',
  },
  welcomeSubtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F2CB05',
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
});

export default AnimatedSplash; 