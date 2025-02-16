import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { Send } from 'lucide-react-native';

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: Date;
}

interface ChatOverlayProps {
  messages?: Message[];
  onSendMessage?: (message: string) => void;
}

const ChatOverlay: React.FC<ChatOverlayProps> = ({
  messages = [],
  onSendMessage,
}) => {
  const [newMessage, setNewMessage] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = () => {
    if (newMessage.trim() && onSendMessage) {
      onSendMessage(newMessage.trim());
      setNewMessage('');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="absolute right-0 top-0 w-2/5 h-full"
    >
      <View className="flex-1 bg-black/40 backdrop-blur-sm">
        <View className="p-4 border-b border-white/10">
          <Text className="text-white font-semibold text-lg">Live Chat</Text>
        </View>
        
        <ScrollView
          ref={scrollViewRef}
          className="flex-1 px-4"
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map((message) => (
            <View key={message.id} className="mb-4">
              <View className="flex-row items-center justify-between mb-1">
                <Text className="text-white/70 font-medium text-sm">{message.user}</Text>
                <Text className="text-white/40 text-xs">{formatTime(message.timestamp)}</Text>
              </View>
              <View className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-2">
                <Text className="text-white">{message.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        
        <View className="p-4 border-t border-white/10">
          <View className="flex-row items-center bg-white/10 rounded-full px-4 py-2">
            <TextInput
              className="flex-1 text-white"
              placeholder="Type a message..."
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={newMessage}
              onChangeText={setNewMessage}
              multiline
              maxLength={500}
            />
            <Pressable
              onPress={handleSend}
              disabled={!newMessage.trim()}
              className={`ml-2 ${!newMessage.trim() ? 'opacity-50' : ''}`}
              android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
            >
              <Send size={20} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatOverlay;
