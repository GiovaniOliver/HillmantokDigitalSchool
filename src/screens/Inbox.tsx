import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, ScrollView } from 'react-native';
import { Search, Clock } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const CATEGORIES = ['ALL', 'Data Science', 'Foundation', 'For You'];

const MENTORS = [
  { id: '0', name: 'You', avatar: require('../../assets/hillmantok-logo.png') },
  { id: '1', name: 'David', avatar: require('../../assets/hillmantok-logo.png') },
  { id: '2', name: 'Santi', avatar: require('../../assets/hillmantok-logo.png') },
  { id: '3', name: 'Naomi', avatar: require('../../assets/hillmantok-logo.png') },
  { id: '4', name: 'Nexus', avatar: require('../../assets/hillmantok-logo.png') },
  { id: '5', name: 'Mengly', avatar: require('../../assets/hillmantok-logo.png') },
];

const MESSAGES = [
  {
    id: '1',
    user: 'David James',
    avatar: require('../../assets/hillmantok-logo.png'),
    message: 'In 2025, fashion embraces sustainability, bold designs, vibrant colors, futuristic textures...',
    time: '2h ago',
    likes: '70',
    comments: '32',
    shares: '09',
    views: '14',
    hashtags: '#SustainableStyle#EcoChic#Inspiration#motivation'
  },
  {
    id: '2',
    user: 'Radiant Rose',
    avatar: require('../../assets/hillmantok-logo.png'),
    message: 'In 2025, there will be a variety of new fashion trends coming your way...',
    time: '5h ago',
    likes: '45',
    comments: '28',
    shares: '05',
    views: '11',
  },
];

const InboxScreen = () => {
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  return (
    <LinearGradient
      colors={['#1a1a1a', '#000000']}
      style={styles.container}
    >
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <Text style={styles.title}>Mentor</Text>
        <View style={styles.headerActions}>
          <Pressable style={styles.iconButton}>
            <Search size={24} color="#FFFFFF" />
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Clock size={24} color="#FFFFFF" />
          </Pressable>
        </View>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {CATEGORIES.map((category) => (
          <Pressable
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category && styles.selectedCategoryText
            ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.mentorsContainer}
        contentContainerStyle={styles.mentorsContent}
      >
        {MENTORS.map((mentor) => (
          <View key={mentor.id} style={styles.mentorItem}>
            <Image source={mentor.avatar} style={styles.mentorAvatar} />
            <Text style={styles.mentorName}>{mentor.name}</Text>
          </View>
        ))}
      </ScrollView>

      <FlatList
        data={MESSAGES}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <View style={styles.messageHeader}>
              <Image source={item.avatar} style={styles.messageAvatar} />
              <View style={styles.messageHeaderText}>
                <Text style={styles.userName}>{item.user}</Text>
                <Text style={styles.messageTime}>{item.time}</Text>
              </View>
            </View>
            <Text style={styles.messageText}>{item.message}</Text>
            {item.hashtags && <Text style={styles.hashTags}>{item.hashtags}</Text>}
            <View style={styles.messageStats}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{item.likes}</Text>
                <Text style={styles.statLabel}>❤️</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{item.comments}</Text>
                <Text style={styles.statLabel}>💭</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{item.shares}</Text>
                <Text style={styles.statLabel}>🔄</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{item.views}</Text>
                <Text style={styles.statLabel}>👁️</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.messagesContent}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  categoriesContainer: {
    marginTop: 16,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  selectedCategory: {
    backgroundColor: '#7B1E24',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
  mentorsContainer: {
    marginTop: 16,
  },
  mentorsContent: {
    paddingHorizontal: 16,
    gap: 16,
  },
  mentorItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  mentorAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#7B1E24',
  },
  mentorName: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 4,
  },
  messagesContent: {
    padding: 16,
    gap: 16,
  },
  messageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  messageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  messageHeaderText: {
    flex: 1,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  messageTime: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  hashTags: {
    color: '#7B1E24',
    fontSize: 12,
    marginBottom: 12,
  },
  messageStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statNumber: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  statLabel: {
    fontSize: 14,
  },
});

export default InboxScreen; 