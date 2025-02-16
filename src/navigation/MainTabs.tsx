import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, PlusSquare, MessageSquare, User } from 'lucide-react-native';
import { MainTabParamList } from '../types/navigation';
import { View, Platform, ViewStyle, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Screens
import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';
import PostScreen from '../screens/Post';
import InboxScreen from '../screens/Inbox';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  const insets = useSafeAreaInsets();
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: Platform.OS === 'ios' ? 80 : 60,
          paddingBottom: Platform.OS === 'ios' ? insets.bottom : 10,
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 1,
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E0E0E0',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        tabBarActiveTintColor: '#7B1E24',
        tabBarInactiveTintColor: 'rgba(123, 30, 36, 0.5)',
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 0,
          marginBottom: Platform.OS === 'ios' ? 0 : 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Home size={26} color={color} strokeWidth={2} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Search size={26} color={color} strokeWidth={2} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View style={{ 
              width: 48, 
              height: 30,
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <PlusSquare size={26} color="#000" strokeWidth={2} style={{
                backgroundColor: '#FFF',
                borderRadius: 8,
                padding: 13,
              }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => (
            <MessageSquare size={26} color={color} strokeWidth={2} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <User size={26} color={color} strokeWidth={2} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs; 