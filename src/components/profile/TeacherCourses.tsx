import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Play, Users, Clock } from 'lucide-react-native';

const TeacherCourses = () => {
  // Mock data - replace with actual course data
  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      thumbnail: require('../../../assets/hillmantok-logo.png'),
      students: 450,
      duration: '8 weeks',
      isLive: true,
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      thumbnail: require('../../../assets/hillmantok-logo.png'),
      students: 380,
      duration: '10 weeks',
      isLive: false,
    },
    // Add more courses as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Courses</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.coursesContainer}
      >
        {courses.map((course) => (
          <Pressable key={course.id} style={styles.courseCard}>
            <Image source={course.thumbnail} style={styles.thumbnail} />
            {course.isLive && (
              <View style={styles.liveTag}>
                <View style={styles.liveDot} />
                <Text style={styles.liveText}>LIVE</Text>
              </View>
            )}
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <View style={styles.courseStats}>
                <View style={styles.statItem}>
                  <Users size={16} color="#FFD700" />
                  <Text style={styles.statText}>{course.students}</Text>
                </View>
                <View style={styles.statItem}>
                  <Clock size={16} color="#FFD700" />
                  <Text style={styles.statText}>{course.duration}</Text>
                </View>
              </View>
            </View>
            <Pressable style={styles.playButton}>
              <Play size={20} color="#800000" fill="#800000" />
            </Pressable>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'rgba(128, 0, 0, 0.05)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 16,
  },
  coursesContainer: {
    paddingRight: 16,
  },
  courseCard: {
    width: 280,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
  thumbnail: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  liveTag: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF3B30',
    marginRight: 4,
  },
  liveText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  courseInfo: {
    padding: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  courseStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
  playButton: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TeacherCourses; 