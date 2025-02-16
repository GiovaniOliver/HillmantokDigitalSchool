import React from 'react';
import { View, Pressable, Text, Animated } from 'react-native';
import { Heart, MessageCircle, Share2, Gift } from 'lucide-react-native';

interface ActionBarProps {
  isLiked: boolean;
  showChat: boolean;
  onLikePress: () => void;
  onChatPress: () => void;
  onSharePress?: () => void;
  onGiftPress?: () => void;
  likeCount?: number;
  chatCount?: number;
}

const ActionBar: React.FC<ActionBarProps> = ({
  isLiked,
  showChat,
  onLikePress,
  onChatPress,
  onSharePress,
  onGiftPress,
  likeCount = 0,
  chatCount = 0,
}) => {
  const renderActionButton = (
    icon: React.ReactNode,
    label: string,
    count: number,
    onPress: () => void,
    isActive: boolean = false
  ) => (
    <Pressable
      className="items-center px-2"
      onPress={onPress}
      android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
    >
      <View className="w-12 h-12 rounded-full bg-black/30 items-center justify-center mb-1">
        {icon}
      </View>
      {count > 0 && (
        <Text className="text-white/90 text-xs font-medium">
          {count >= 1000 ? `${(count / 1000).toFixed(1)}K` : count}
        </Text>
      )}
      <Text className="text-white/60 text-xs">{label}</Text>
    </Pressable>
  );

  return (
    <View className="absolute bottom-0 right-0 pb-8 pt-4 px-2">
      {renderActionButton(
        <Heart
          size={24}
          color={isLiked ? '#FF3B30' : 'white'}
          fill={isLiked ? '#FF3B30' : 'none'}
        />,
        'Like',
        likeCount,
        onLikePress,
        isLiked
      )}
      
      {renderActionButton(
        <MessageCircle
          size={24}
          color={showChat ? '#3B82F6' : 'white'}
          fill={showChat ? '#3B82F6' : 'none'}
        />,
        'Chat',
        chatCount,
        onChatPress,
        showChat
      )}
      
      {renderActionButton(
        <Share2 size={24} color="white" />,
        'Share',
        0,
        onSharePress || (() => {}),
      )}
      
      {renderActionButton(
        <Gift size={24} color="white" />,
        'Gift',
        0,
        onGiftPress || (() => {}),
      )}
    </View>
  );
};

export default ActionBar;
