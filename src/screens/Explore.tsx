import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, TextInput } from 'react-native';
import { Calendar, Clock, BookOpen, GraduationCap, Search } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ExploreScreen = () => {
  const insets = useSafeAreaInsets();
  const [selectedDate, setSelectedDate] = useState(2);

  const upcomingClass = {
    subject: 'Literature',
    timeRemaining: 'in 8 minutes',
  };

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const currentDate = new Date();
  const dates = weekDays.map((day, index) => {
    const date = new Date();
    date.setDate(currentDate.getDate() - currentDate.getDay() + index + 1);
    return {
      day,
      date: date.getDate(),
      isToday: index === 2, // Assuming Wednesday is today for the example
    };
  });

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning, Alex</Text>
            <Text style={styles.groupText}>Group 5E</Text>
          </View>
          <View style={styles.headerIcons}>
            <Pressable style={styles.iconButton}>
              <Clock size={24} color="#7B1E24" />
            </Pressable>
            <Pressable style={styles.iconButton}>
              <Calendar size={24} color="#7B1E24" />
            </Pressable>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#7B1E24" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search courses, teachers..."
              placeholderTextColor="rgba(33, 33, 33, 0.5)"
            />
          </View>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.calendarStrip}
        >
          {dates.map((item, index) => (
            <Pressable
              key={index}
              style={[
                styles.dateItem,
                selectedDate === item.date && styles.selectedDate
              ]}
              onPress={() => setSelectedDate(item.date)}
            >
              <Text style={[
                styles.dayText,
                selectedDate === item.date && styles.selectedText
              ]}>{item.day}</Text>
              <Text style={[
                styles.dateText,
                selectedDate === item.date && styles.selectedText
              ]}>{item.date}</Text>
              {selectedDate === item.date && (
                <View style={styles.selectedDot} />
              )}
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.upcomingCard}>
          <View style={styles.upcomingHeader}>
            <View style={styles.upcomingInfo}>
              <Clock size={16} color="#F2CB05" />
              <Text style={styles.upcomingTime}>{upcomingClass.timeRemaining}</Text>
            </View>
            <Text style={styles.upcomingTitle}>Class: {upcomingClass.subject}</Text>
          </View>
          <Pressable style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join →</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Today's Class</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.classesContainer}
        >
          <Pressable style={styles.classCard}>
            <View style={[styles.classIcon, { backgroundColor: 'rgba(242, 203, 5, 0.1)' }]}>
              <BookOpen size={24} color="#F2CB05" />
            </View>
            <Text style={styles.className}>Literature</Text>
            <Text style={styles.classTime}>8:12</Text>
          </Pressable>

          <Pressable style={styles.classCard}>
            <View style={[styles.classIcon, { backgroundColor: 'rgba(123, 30, 36, 0.1)' }]}>
              <GraduationCap size={24} color="#7B1E24" />
            </View>
            <Text style={styles.className}>History</Text>
            <Text style={styles.classTime}>8:45</Text>
          </Pressable>
        </ScrollView>

        <View style={styles.homeworkSection}>
          <Text style={styles.sectionTitle}>Homework progress</Text>
          <Pressable style={styles.homeworkCard}>
            <View style={styles.homeworkInfo}>
              <Text style={styles.homeworkTitle}>Biology</Text>
              <Text style={styles.homeworkDue}>September 15, Thursday | 8:00</Text>
            </View>
            <View style={styles.progressContainer}>
              <View style={[styles.progressBar, { width: '65%' }]} />
              <Text style={styles.progressText}>65%</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 4,
  },
  groupText: {
    fontSize: 14,
    color: '#333333',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 44,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#212121',
  },
  calendarStrip: {
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  dateItem: {
    width: 56,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    borderRadius: 28,
  },
  selectedDate: {
    backgroundColor: '#7B1E24',
  },
  dayText: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  selectedDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#F2CB05',
    marginTop: 4,
  },
  upcomingCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  upcomingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  upcomingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upcomingTime: {
    fontSize: 14,
    color: '#F2CB05',
    marginLeft: 8,
  },
  upcomingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 12,
  },
  joinButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#7B1E24',
    borderRadius: 20,
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  classesContainer: {
    paddingLeft: 16,
  },
  classCard: {
    width: 120,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  classIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  className: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 4,
  },
  classTime: {
    fontSize: 14,
    color: '#333333',
  },
  homeworkSection: {
    marginBottom: 24,
  },
  homeworkCard: {
    margin: 16,
    marginTop: 0,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  homeworkInfo: {
    marginBottom: 12,
  },
  homeworkTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 4,
  },
  homeworkDue: {
    fontSize: 14,
    color: '#333333',
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginTop: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#F2CB05',
    borderRadius: 2,
  },
  progressText: {
    position: 'absolute',
    right: 0,
    top: -20,
    fontSize: 12,
    color: '#7B1E24',
  },
});

export default ExploreScreen; 