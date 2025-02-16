import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { Settings, Grid, Bookmark } from 'lucide-react-native';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('posts');
  
  const userProfile = {
    name: 'John Smith',
    username: '@johnsmith',
    avatar: require('../../assets/hillmantok-logo.png'),
    bio: 'Computer Science Student | Learning & Sharing Knowledge',
    followers: '1.2K',
    following: '850',
    likes: '10.5K',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <Pressable style={styles.settingsButton}>
          <Settings size={24} color="#7B1E24" />
        </Pressable>
      </View>

      <ScrollView>
        <View style={styles.profileInfo}>
          <Image source={userProfile.avatar} style={styles.avatar} />
          <Text style={styles.name}>{userProfile.name}</Text>
          <Text style={styles.username}>{userProfile.username}</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{userProfile.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{userProfile.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{userProfile.likes}</Text>
              <Text style={styles.statLabel}>Likes</Text>
            </View>
          </View>

          <Text style={styles.bio}>{userProfile.bio}</Text>

          <Pressable style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </Pressable>
        </View>

        <View style={styles.tabContainer}>
          <Pressable
            style={[styles.tab, activeTab === 'posts' && styles.activeTab]}
            onPress={() => setActiveTab('posts')}
          >
            <Grid
              size={24}
              color={activeTab === 'posts' ? '#7B1E24' : '#333333'}
            />
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
            onPress={() => setActiveTab('saved')}
          >
            <Bookmark
              size={24}
              color={activeTab === 'saved' ? '#7B1E24' : '#333333'}
            />
          </Pressable>
        </View>

        <View style={styles.content}>
          {activeTab === 'posts' ? (
            <Text style={styles.emptyText}>No posts yet</Text>
          ) : (
            <Text style={styles.emptyText}>No saved content</Text>
          )}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#7B1E24',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#333333',
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#E0E0E0',
  },
  bio: {
    fontSize: 14,
    color: '#212121',
    textAlign: 'center',
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  editButton: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#7B1E24',
    backgroundColor: '#FFFFFF',
  },
  editButtonText: {
    fontSize: 14,
    color: '#7B1E24',
    fontWeight: '600',
  },
  tabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    marginTop: 24,
    backgroundColor: '#FFFFFF',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#7B1E24',
  },
  content: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: '#FFFFFF',
  },
  emptyText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default ProfileScreen; 