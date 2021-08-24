import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './route/rootRoute';
import Home from './screens/home';
import Projects from './screens/projects';
import Chat from './screens/chat';
import News from './screens/news';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
