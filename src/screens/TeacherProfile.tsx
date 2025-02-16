import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { Download, Wallet, Settings, ChevronLeft } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Course {
  id: string;
  title: string;
  progress: number;
  icon: any;
  color: string;
}

const COURSES: Course[] = [
  {
    id: '1',
    title: 'Color Theory',
    progress: 70,
    icon: require('../../assets/hillmantok-logo.png'),
    color: '#FF5B7F',
  },
  {
    id: '2',
    title: 'Adobe Photoshop',
    progress: 45,
    icon: require('../../assets/hillmantok-logo.png'),
    color: '#2FA2E3',
  },
];

const TeacherProfile = () => {
  const insets = useSafeAreaInsets();

  const renderActionButton = (icon: React.ReactNode, label: string) => (
    <Pressable style={styles.actionButton}>
      <View style={styles.actionIcon}>
        {icon}
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );

  const renderCourseProgress = (course: Course) => (
    <View key={course.id} style={styles.courseItem}>
      <View style={styles.courseHeader}>
        <Image source={course.icon} style={[styles.courseIcon, { backgroundColor: course.color }]} />
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseProgress}>{course.progress}%</Text>
      </View>
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${course.progress}%`, backgroundColor: course.color }
          ]} 
        />
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={['#4A1D1F', '#3A1718', '#2C1213']}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <View style={styles.header}>
        <Pressable style={styles.backButton}>
          <ChevronLeft size={24} color="#FFF" />
        </Pressable>
        <View style={styles.onlineStatus}>
          <View style={styles.onlineDot} />
          <Text style={styles.onlineText}>LV 12</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/hillmantok-logo.png')}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Selena Christian</Text>
          <Text style={styles.location}>Las Vegas</Text>
        </View>

        <View style={styles.actionsContainer}>
          {renderActionButton(<Download size={24} color="#FFF" />, 'Downloads')}
          {renderActionButton(<Wallet size={24} color="#FFF" />, 'Wallet')}
          {renderActionButton(<Settings size={24} color="#FFF" />, 'Setting')}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Note</Text>
          <Text style={styles.noteText}>
            Nurture yourself while you practice your skills with two distinct and enjoyable activities, balancing productivity and self-care to foster holistic personal development{' '}
            <Text style={styles.readMore}>Read more...</Text>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ongoing Courses</Text>
          <View style={styles.coursesList}>
            {COURSES.map(renderCourseProgress)}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlineStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 6,
  },
  onlineText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 24,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 14,
    color: '#FFF',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
  },
  noteText: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  readMore: {
    color: '#FF5B7F',
  },
  coursesList: {
    gap: 16,
  },
  courseItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  courseIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    marginRight: 12,
  },
  courseTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  courseProgress: {
    fontSize: 14,
    color: '#FFF',
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
});

export default TeacherProfile; 