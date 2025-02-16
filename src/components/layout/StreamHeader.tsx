import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { UserCircle2, ChevronLeft } from 'lucide-react-native';

interface StreamHeaderProps {
  title?: string;
  instructor?: string;
  profileImage?: string;
  onFollowPress?: () => void;
  onBackPress?: () => void;
  isFollowing?: boolean;
}

const StreamHeader: React.FC<StreamHeaderProps> = ({
  title = 'Live Class',
  instructor = 'Instructor Name',
  profileImage,
  onFollowPress,
  onBackPress,
  isFollowing = false,
}) => {
  return (
    <View className="absolute top-0 left-0 right-0 z-10">
      {/* Semi-transparent gradient overlay */}
      <View className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
      
      <View className="px-4 pt-12 pb-4">
        <View className="flex-row items-center mb-4">
          <TouchableOpacity 
            onPress={onBackPress}
            className="w-8 h-8 rounded-full bg-black/30 items-center justify-center mr-3"
          >
            <ChevronLeft size={24} color="white" />
          </TouchableOpacity>
          
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              className="w-10 h-10 rounded-full border-2 border-white mr-3"
            />
          ) : (
            <View className="w-10 h-10 rounded-full border-2 border-white mr-3 items-center justify-center bg-hillman-maroon/20">
              <UserCircle2 size={24} color="white" />
            </View>
          )}
          
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">{title}</Text>
            <Text className="text-white/80 text-sm">{instructor}</Text>
          </View>
          
          <TouchableOpacity
            onPress={onFollowPress}
            className={`px-4 py-2 rounded-full ${
              isFollowing ? 'bg-hillman-maroon' : 'bg-hillman-yellow'
            }`}
          >
            <Text
              className={`font-semibold ${
                isFollowing ? 'text-white' : 'text-hillman-maroon'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StreamHeader; 