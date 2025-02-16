import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Video, Image, FileText } from 'lucide-react-native';

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Post</Text>
      <ScrollView style={styles.optionsContainer}>
        <Pressable style={styles.option}>
          <View style={styles.iconContainer}>
            <Video size={24} color="#7B1E24" />
          </View>
          <Text style={styles.optionTitle}>Record Video</Text>
          <Text style={styles.optionDescription}>Share your knowledge through video</Text>
        </Pressable>

        <Pressable style={styles.option}>
          <View style={styles.iconContainer}>
            <Image size={24} color="#7B1E24" />
          </View>
          <Text style={styles.optionTitle}>Upload Media</Text>
          <Text style={styles.optionDescription}>Share photos or pre-recorded videos</Text>
        </Pressable>

        <Pressable style={styles.option}>
          <View style={styles.iconContainer}>
            <FileText size={24} color="#7B1E24" />
          </View>
          <Text style={styles.optionTitle}>Write Article</Text>
          <Text style={styles.optionDescription}>Share your thoughts in writing</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 32,
  },
  optionsContainer: {
    gap: 16,
  },
  option: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(123, 30, 36, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 14,
    color: '#333333',
  },
});

export default PostScreen; 