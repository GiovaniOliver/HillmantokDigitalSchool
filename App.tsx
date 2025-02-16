import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from './src/types/navigation';
import { theme } from './src/styles/theme';

// Screens
import AnimatedSplash from './src/components/AnimatedSplash';
import Landing from './src/screens/Landing';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import MainTabs from './src/navigation/MainTabs';
import CourseWelcome from './src/screens/CourseWelcome';
import TeacherProfile from './src/screens/TeacherProfile';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[theme.colors.background.gradient.start, theme.colors.background.gradient.middle, theme.colors.background.gradient.end]}
        style={{ flex: 1 }}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: 'transparent',
              },
              animation: 'fade',
            }}
          >
            {/* Splash Screen */}
            <Stack.Screen 
              name="Splash" 
              component={AnimatedSplash}
              options={{
                animation: 'fade',
              }}
            />

            {/* Auth Screens */}
            <Stack.Screen 
              name="Landing" 
              component={Landing}
              options={{
                animation: 'fade',
              }}
            />
            <Stack.Screen 
              name="SignIn" 
              component={SignIn}
              options={{
                animation: 'slide_from_bottom',
                presentation: 'modal',
              }}
            />
            <Stack.Screen 
              name="SignUp" 
              component={SignUp}
              options={{
                animation: 'slide_from_bottom',
                presentation: 'modal',
              }}
            />

            {/* Main App */}
            <Stack.Screen 
              name="MainTabs" 
              component={MainTabs}
              options={{
                animation: 'fade',
              }}
            />

            {/* Course and Teacher Screens */}
            <Stack.Screen 
              name="CourseWelcome" 
              component={CourseWelcome}
              options={{
                animation: 'slide_from_right',
              }}
            />
            <Stack.Screen 
              name="TeacherProfile" 
              component={TeacherProfile}
              options={{
                animation: 'slide_from_right',
              }}
            />
          </Stack.Navigator>
          <StatusBar style="light" />
        </NavigationContainer>
      </LinearGradient>
    </SafeAreaProvider>
  );
}
