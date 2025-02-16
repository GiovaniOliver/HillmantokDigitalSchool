export type RootStackParamList = {
  Splash: undefined;
  Landing: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainTabs: {
    screen?: keyof MainTabParamList;
    params?: any;
  };
  CourseWelcome: {
    courseId: string;
    courseTitle: string;
    teacherName: string;
  };
  TeacherProfile: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Post: undefined;
  Inbox: undefined;
  Profile: undefined;
}; 