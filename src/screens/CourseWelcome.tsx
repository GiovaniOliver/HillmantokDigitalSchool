import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft, Play, Clock, Users, Star, ChevronRight } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CourseWelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CourseWelcome'>;

const CourseWelcome = () => {
  const navigation = useNavigation<CourseWelcomeScreenNavigationProp>();
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#4A1D1F', '#3A1718', '#2C1213']}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="#FFF" />
        </Pressable>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.courseHeader}>
          <Image
            source={require('../../assets/hillmantok-logo.png')}
            style={styles.courseImage}
          />
          <View style={styles.playButton}>
            <Play size={24} color="#FFF" fill="#FFF" />
          </View>
        </View>

        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>Color Theory Fundamentals</Text>
          <Text style={styles.courseDescription}>
            Master the essentials of color theory and enhance your design skills
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Clock size={16} color="#FFF" />
              <Text style={styles.statText}>8 weeks</Text>
            </View>
            <View style={styles.statItem}>
              <Users size={16} color="#FFF" />
              <Text style={styles.statText}>1.2k students</Text>
            </View>
            <View style={styles.statItem}>
              <Star size={16} color="#FFF" fill="#FFF" />
              <Text style={styles.statText}>4.8</Text>
            </View>
          </View>

          <Pressable 
            style={styles.teacherCard}
            onPress={() => navigation.navigate('TeacherProfile')}
          >
            <Image
              source={require('../../assets/hillmantok-logo.png')}
              style={styles.teacherImage}
            />
            <View style={styles.teacherInfo}>
              <Text style={styles.teacherName}>Selena Christian</Text>
              <Text style={styles.teacherTitle}>Color Theory Expert</Text>
            </View>
            <ChevronRight size={20} color="#FFF" />
          </Pressable>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About this course</Text>
            <Text style={styles.sectionText}>
              This comprehensive course covers everything from basic color wheels to advanced color harmonies. 
              You'll learn how to create effective color palettes, understand color psychology, and apply these 
              principles in your design work.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>What you'll learn</Text>
            {['Color wheel basics', 'Color harmonies', 'Color psychology', 'Digital color application'].map((item, index) => (
              <View key={index} style={styles.learningItem}>
                <View style={styles.bulletPoint} />
                <Text style={styles.learningText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
        <Pressable style={styles.enrollButton}>
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  courseHeader: {
    position: 'relative',
    height: 240,
  },
  courseImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -28 }, { translateY: -28 }],
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 91, 127, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseInfo: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 24,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    color: '#FFF',
    fontSize: 14,
  },
  teacherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    marginBottom: 24,
  },
  teacherImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  teacherInfo: {
    flex: 1,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 4,
  },
  teacherTitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  learningItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF5B7F',
    marginRight: 12,
  },
  learningText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  enrollButton: {
    backgroundColor: '#FF5B7F',
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enrollButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CourseWelcome; 