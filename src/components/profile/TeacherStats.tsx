import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Users, BookOpen, Star } from 'lucide-react-native';

interface TeacherStatsProps {
  students: number;
  courses: number;
  rating: number;
}

const TeacherStats: React.FC<TeacherStatsProps> = ({
  students,
  courses,
  rating,
}) => {
  const stats = [
    {
      icon: <Users size={24} color="#FFD700" />,
      value: students.toLocaleString(),
      label: 'Students',
    },
    {
      icon: <BookOpen size={24} color="#FFD700" />,
      value: courses.toString(),
      label: 'Courses',
    },
    {
      icon: <Star size={24} color="#FFD700" fill="#FFD700" />,
      value: rating.toFixed(1),
      label: 'Rating',
    },
  ];

  return (
    <View style={styles.container}>
      {stats.map((stat, index) => (
        <View 
          key={stat.label} 
          style={[
            styles.statItem,
            index < stats.length - 1 && styles.borderRight
          ]}
        >
          {stat.icon}
          <Text style={styles.value}>{stat.value}</Text>
          <Text style={styles.label}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 24,
    backgroundColor: 'rgba(128, 0, 0, 0.05)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 215, 0, 0.3)',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 215, 0, 0.3)',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
});

export default TeacherStats; 