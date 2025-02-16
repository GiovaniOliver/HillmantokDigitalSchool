/// <reference types="nativewind/types" />

import { ViewProps, TextProps, TouchableOpacityProps, ScrollViewProps } from 'react-native';

declare module 'react-native' {
  export interface ViewProps extends ViewProps {
    className?: string;
  }
  export interface TextProps extends TextProps {
    className?: string;
  }
  export interface TouchableOpacityProps extends TouchableOpacityProps {
    className?: string;
  }
  export interface ScrollViewProps extends ScrollViewProps {
    className?: string;
  }
  
  export const View: React.ComponentType<ViewProps>;
  export const Text: React.ComponentType<TextProps>;
  export const TouchableOpacity: React.ComponentType<TouchableOpacityProps>;
  export const ScrollView: React.ComponentType<ScrollViewProps>;
} 