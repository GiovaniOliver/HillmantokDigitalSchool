import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import VideoContainer from '../layout/VideoContainer';
import ChatOverlay from '../layout/ChatOverlay';
import ActionBar from '../layout/ActionBar';
import StreamHeader from '../layout/StreamHeader';

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: Date;
}

const LiveStream: React.FC = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [likeCount, setLikeCount] = useState(156);
  const [chatCount, setChatCount] = useState(24);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      user: 'John D.',
      text: 'Great lecture!',
      timestamp: new Date(),
    },
    {
      id: '2',
      user: 'Sarah M.',
      text: 'Could you explain that last part again?',
      timestamp: new Date(),
    },
  ]);
  const [viewerCount, setViewerCount] = useState(156);

  const handleFollowPress = () => {
    setIsFollowing(prev => !prev);
  };

  const handleLikePress = () => {
    setIsLiked(prev => !prev);
    setLikeCount(prev => (isLiked ? prev - 1 : prev + 1));
  };

  const handleChatPress = () => {
    setShowChat(prev => !prev);
  };

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      user: 'You',
      text,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    setChatCount(prev => prev + 1);
  };

  const handleBackPress = () => {
    // Handle back navigation
    console.log('Back pressed');
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 relative">
        <VideoContainer
          isLive={true}
          viewerCount={viewerCount}
        />
        
        <StreamHeader
          title="Mathematics 101"
          instructor="Prof. Johnson"
          onFollowPress={handleFollowPress}
          onBackPress={handleBackPress}
          isFollowing={isFollowing}
        />

        <ActionBar
          isLiked={isLiked}
          showChat={showChat}
          onLikePress={handleLikePress}
          onChatPress={handleChatPress}
          likeCount={likeCount}
          chatCount={chatCount}
        />

        {showChat && (
          <ChatOverlay
            messages={messages}
            onSendMessage={handleSendMessage}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default LiveStream;
