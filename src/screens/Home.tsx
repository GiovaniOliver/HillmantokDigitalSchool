import React, { useState, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Pressable, Image, ViewToken, Platform, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { Heart, MessageCircle, Bookmark, Share2, Search } from 'lucide-react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabParamList, RootStackParamList } from '../types/navigation';

const { width, height } = Dimensions.get('window');

interface Teacher {
  name: string;
  avatar: any;
  subject: string;
}

interface VideoPost {
  id: string;
  teacher: {
    name: string;
    avatar: any;
    subject: string;
  };
  title: string;
  description: string;
  likes: string;
  comments: string;
  thumbnail: any;
}

interface CoursePost extends VideoPost {
  duration: string;
  enrolled: number;
  rating: number;
}

const MOCK_VIDEOS: VideoPost[] = [
  {
    id: '1',
    teacher: {
      name: 'T. Jordan',
      avatar: require('../../assets/hillmantok-logo.png'),
      subject: 'HRM 401',
    },
    title: "Let's review DE&I",
    description: '#hillmantokuniversity #fyp #hillmantok #viralvideo',
    likes: '98',
    comments: '6',
    thumbnail: require('../../assets/demovideos/6743320-hd_1080_1920_30fps.mp4'),
  },
  {
    id: '2',
    teacher: {
      name: 'Prof. Williams',
      avatar: require('../../assets/hillmantok-logo.png'),
      subject: 'Computer Science 101',
    },
    title: "Introduction to Programming",
    description: 'Learn the basics of coding! 💻 #cs101 #programming #hillmantok',
    likes: '245',
    comments: '18',
    thumbnail: require('../../assets/demovideos/7967111-uhd_2160_3840_25fps.mp4'),
  },
  {
    id: '3',
    teacher: {
      name: 'Dr. Martinez',
      avatar: require('../../assets/hillmantok-logo.png'),
      subject: 'Biology 201',
    },
    title: "Cell Structure Explained",
    description: 'Understanding cellular biology made easy 🔬 #biology #science #education',
    likes: '167',
    comments: '12',
    thumbnail: require('../../assets/demovideos/9640146-uhd_2160_3840_30fps.mp4'),
  },
  {
    id: '4',
    teacher: {
      name: 'Prof. Thompson',
      avatar: require('../../assets/hillmantok-logo.png'),
      subject: 'History 301',
    },
    title: "Civil Rights Movement",
    description: 'Important moments in history that shaped our future ✊🏾 #history #civilrights',
    likes: '389',
    comments: '45',
    thumbnail: require('../../assets/demovideos/6860438-uhd_2160_3840_25fps.mp4'),
  },
  {
    id: '5',
    teacher: {
      name: 'Ms. Anderson',
      avatar: require('../../assets/hillmantok-logo.png'),
      subject: 'Mathematics 202',
    },
    title: "Calculus Made Simple",
    description: 'Breaking down complex calculus concepts 📊 #math #calculus #learning',
    likes: '156',
    comments: '23',
    thumbnail: require('../../assets/demovideos/4918197-hd_1080_1920_25fps.mp4'),
  },
  {
    id: '6',
    teacher: {
      name: 'Dr. Patel',
      avatar: require('../../assets/hillmantok-logo.png'),
      subject: 'Physics 101',
    },
    title: "Understanding Gravity",
    description: 'Physics fundamentals explained simply 🌍 #physics #science #education',
    likes: '278',
    comments: '31',
    thumbnail: require('../../assets/demovideos/8323029-uhd_2160_4096_25fps.mp4'),
  },
  {
    id: '7',
    teacher: {
      name: 'Prof. Lee',
      avatar: require('../../assets/hillmantok-logo.png'),
      subject: 'Chemistry 301',
    },
    title: "Chemical Reactions in Daily Life",
    description: 'Chemistry around us explained! 🧪 #chemistry #science #learning',
    likes: '423',
    comments: '52',
    thumbnail: require('../../assets/demovideos/7669396-uhd_2160_3840_30fps.mp4'),
  },
  {
    id: '8',
    teacher: {
      name: 'Dr. Brown',
      avatar: require('../../assets/hillmantok-logo.png'),
      subject: 'Psychology 201',
    },
    title: "Understanding Human Behavior",
    description: 'Exploring the human mind 🧠 #psychology #mentalhealth #education',
    likes: '567',
    comments: '89',
    thumbnail: require('../../assets/demovideos/6995006-uhd_2160_3840_30fps.mp4'),
  },
  {
    id: '9',
    teacher: {
      name: 'Prof. Garcia',
      avatar: require('../../assets/hillmantok-logo.png'),
      subject: 'Literature 301',
    },
    title: "Shakespeare's Hidden Meanings",
    description: 'Discovering the beauty of classic literature 📚 #literature #shakespeare #learning',
    likes: '345',
    comments: '41',
    thumbnail: require('../../assets/demovideos/8039135-uhd_2160_4096_25fps.mp4'),
  }
];

const FOLLOWING_VIDEOS = MOCK_VIDEOS.slice(0, 5);
const COURSE_VIDEOS: CoursePost[] = MOCK_VIDEOS.map(video => ({
  ...video,
  duration: '8 weeks',
  enrolled: Math.floor(Math.random() * 1000) + 100,
  rating: 4 + Math.random()
}));

interface ViewableItemsChanged {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

interface TopNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ activeTab, onTabChange }) => {
  const insets = useSafeAreaInsets();
  
  const tabs = ['Following', 'Courses', 'For You'];
  
  return (
    <View style={[styles.topNavContainer, { paddingTop: insets.top }]}>
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'transparent']}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <Pressable
            key={tab}
            onPress={() => onTabChange(tab)}
            style={styles.tabItem}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText,
            ]}>
              {tab}
            </Text>
            {activeTab === tab && (
              <View style={styles.activeIndicatorContainer}>
                <View style={styles.activeIndicator} />
              </View>
            )}
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.searchButton}>
        <Search size={24} color="#FFFFFF" />
      </Pressable>
    </View>
  );
};

const VideoItem: React.FC<{ item: VideoPost; isVisible: boolean }> = ({ item, isVisible }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  const player = useVideoPlayer(item.thumbnail, player => {
    if (isVisible) {
      player.play();
    }
  });

  React.useEffect(() => {
    if (isVisible) {
      player.play();
    } else {
      player.pause();
    }
  }, [isVisible, player]);

  return (
    <View style={styles.videoContainer}>
      <View style={styles.videoContent}>
        <VideoView
          player={player}
          style={styles.video}
          contentFit="cover"
        />
        
        <View style={styles.overlay}>
          <View style={styles.actions}>
            <View style={styles.actionButton}>
              <Image source={item.teacher.avatar} style={styles.teacherAvatar} />
              <View style={styles.plusButton}>
                <Text style={styles.plusButtonText}>+</Text>
              </View>
            </View>

            <Pressable 
              style={styles.actionButton}
              onPress={() => setIsLiked(!isLiked)}
            >
              <Heart 
                size={28} 
                color={isLiked ? '#FF3B30' : '#FFFFFF'} 
                fill={isLiked ? '#FF3B30' : 'none'} 
              />
              <Text style={styles.actionText}>{item.likes}</Text>
            </Pressable>

            <Pressable style={styles.actionButton}>
              <MessageCircle size={28} color="#FFFFFF" />
              <Text style={styles.actionText}>{item.comments}</Text>
            </Pressable>

            <Pressable 
              style={styles.actionButton}
              onPress={() => setIsSaved(!isSaved)}
            >
              <Bookmark 
                size={28} 
                color={isSaved ? '#F2CB05' : '#FFFFFF'} 
                fill={isSaved ? '#F2CB05' : 'none'} 
              />
              <Text style={styles.actionText}>20</Text>
            </Pressable>

            <Pressable style={styles.actionButton}>
              <Share2 size={28} color="#FFFFFF" />
              <Text style={styles.actionText}>3</Text>
            </Pressable>
          </View>

          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.bottomGradient}
          />
          <View style={styles.bottomContent}>
            <Text style={styles.videoTeacherName}>{item.teacher.name} | {item.teacher.subject}</Text>
            <Text style={styles.videoDescription}>{item.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CourseVideoItem: React.FC<{ item: CoursePost; isVisible: boolean }> = ({ item, isVisible }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  return (
    <Pressable 
      style={styles.courseContainer}
      onPress={() => {
        navigation.navigate('CourseWelcome', {
          courseId: item.id,
          courseTitle: item.title,
          teacherName: item.teacher.name
        });
      }}
    >
      <View style={styles.courseContent}>
        <Image source={item.thumbnail} style={styles.courseThumbnail} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.courseInfo}>
          <View style={styles.courseHeader}>
            <Image source={item.teacher.avatar} style={styles.courseTeacherAvatar} />
            <Text style={styles.courseTeacherName}>{item.teacher.name}</Text>
          </View>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <View style={styles.courseStats}>
            <Text style={styles.courseStat}>{item.enrolled} students</Text>
            <Text style={styles.courseStat}>{item.duration}</Text>
            <Text style={styles.courseStat}>{item.rating.toFixed(1)} ★</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('For You');
  const [visibleVideoIndex, setVisibleVideoIndex] = useState(0);
  const horizontalScrollRef = useRef<ScrollView>(null);

  const onViewableItemsChanged = useCallback(({ viewableItems }: ViewableItemsChanged) => {
    if (viewableItems.length > 0) {
      setVisibleVideoIndex(viewableItems[0].index ?? 0);
    }
  }, []);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    const tabIndex = ['Following', 'Courses', 'For You'].indexOf(tab);
    horizontalScrollRef.current?.scrollTo({ x: width * tabIndex, animated: true });
  }, []);

  const handleHorizontalScroll = useCallback((event: any) => {
    const tabIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    const tabs = ['Following', 'Courses', 'For You'];
    setActiveTab(tabs[tabIndex]);
  }, []);

  const renderItem = ({ item, index }: { item: VideoPost; index: number }) => (
    <VideoItem 
      item={item} 
      isVisible={index === visibleVideoIndex}
    />
  );

  const renderCourseItem = ({ item, index }: { item: CoursePost; index: number }) => (
    <CourseVideoItem 
      item={item} 
      isVisible={index === visibleVideoIndex}
    />
  );

  return (
    <View style={styles.container}>
      <TopNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      <ScrollView
        ref={horizontalScrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleHorizontalScroll}
        scrollEventThrottle={16}
      >
        <View style={[styles.feedPage]}>
          <FlatList
            key="following-feed"
            data={FOLLOWING_VIDEOS}
            renderItem={renderItem}
            keyExtractor={(item: VideoPost) => item.id}
            snapToInterval={height}
            snapToAlignment="start"
            decelerationRate="fast"
            showsVerticalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 50
            }}
          />
        </View>

        <View style={[styles.feedPage]}>
          <FlatList
            key="courses-feed"
            data={COURSE_VIDEOS}
            renderItem={renderCourseItem}
            keyExtractor={(item: CoursePost) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.courseGrid}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.coursesContainer}
          />
        </View>

        <View style={[styles.feedPage]}>
          <FlatList
            key="for-you-feed"
            data={MOCK_VIDEOS}
            renderItem={renderItem}
            keyExtractor={(item: VideoPost) => item.id}
            snapToInterval={height}
            snapToAlignment="start"
            decelerationRate="fast"
            showsVerticalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 50
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  topNavContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tabsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  tabText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 17,
  },
  activeIndicatorContainer: {
    position: 'absolute',
    bottom: -8,
    left: -4,
    right: -4,
    alignItems: 'center',
  },
  activeIndicator: {
    width: '100%',
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 1.5,
  },
  searchButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  videoContainer: {
    width: width,
    height: height,
    backgroundColor: '#000000',
  },
  videoContent: {
    flex: 1,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  actions: {
    position: 'absolute',
    right: 8,
    bottom: 120,
    alignItems: 'center',
    gap: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  teacherAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#7B1E24',
  },
  plusButton: {
    position: 'absolute',
    bottom: -8,
    backgroundColor: '#F2CB05',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButtonText: {
    color: '#7B1E24',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 4,
  },
  bottomContent: {
    padding: 16,
    paddingBottom: 120,
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  videoTeacherName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  videoDescription: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  feedContainer: {
    flex: 1,
  },
  courseContainer: {
    width: width / 2 - 24,
    height: 280,
    margin: 8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  courseContent: {
    flex: 1,
    position: 'relative',
  },
  courseThumbnail: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  courseInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseTeacherAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  courseTeacherName: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  courseStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseStat: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  courseGrid: {
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  coursesContainer: {
    paddingTop: Platform.OS === 'ios' ? 120 : 100,
    paddingBottom: 20,
  },
  feedPage: {
    width: width,
    height: '100%',
  },
});

export default HomeScreen; 