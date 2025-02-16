import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GraduationCap, Lightbulb } from 'lucide-react-native';

interface TeacherAboutProps {
  about: string;
  expertise: string[];
  education: string[];
}

const TeacherAbout: React.FC<TeacherAboutProps> = ({
  about,
  expertise,
  education,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>{about}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Lightbulb size={20} color="#FFD700" />
          <Text style={styles.sectionTitle}>Areas of Expertise</Text>
        </View>
        <View style={styles.tagContainer}>
          {expertise.map((item, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <GraduationCap size={20} color="#FFD700" />
          <Text style={styles.sectionTitle}>Education</Text>
        </View>
        {education.map((item, index) => (
          <Text key={index} style={styles.educationText}>
            • {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'rgba(128, 0, 0, 0.05)',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginLeft: 8,
  },
  aboutText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 24,
    marginTop: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 8,
  },
  tag: {
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
  tagText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: '500',
  },
  educationText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
    marginLeft: 8,
  },
});

export default TeacherAbout; 