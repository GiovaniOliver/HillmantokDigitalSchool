import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Play, Wifi } from 'lucide-react-native';

interface VideoContainerProps {
  thumbnailUrl?: string;
  isLive?: boolean;
  viewerCount?: number;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
  thumbnailUrl,
  isLive = true,
  viewerCount = 0,
}) => {
  return (
    <View style={styles.container}>
      {thumbnailUrl ? (
        <Image
          source={{ uri: thumbnailUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.placeholderContainer}>
          <Pressable 
            style={styles.playButton}
            android_ripple={{ color: 'rgba(0,0,0,0.2)' }}
          >
            <Play size={32} color="#800000" />
          </Pressable>
          <Text style={styles.startText}>Tap to Start Stream</Text>
          {isLive && (
            <View style={styles.liveContainer}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>LIVE</Text>
              {viewerCount > 0 && (
                <View style={styles.viewerContainer}>
                  <Wifi size={14} color="white" style={styles.wifiIcon} />
                  <Text style={styles.viewerCount}>
                    {viewerCount.toLocaleString()}
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 9/16,
    backgroundColor: '#1a1a1a',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(128,0,0,0.1)',
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startText: {
    color: 'white',
    fontSize: 18,
    marginTop: 16,
    fontWeight: '600',
  },
  liveContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
    marginRight: 8,
  },
  liveText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  viewerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  wifiIcon: {
    marginRight: 4,
  },
  viewerCount: {
    color: 'white',
    fontSize: 14,
  },
});

export default VideoContainer;
