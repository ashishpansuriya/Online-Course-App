/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';
import Colors from '../assets/colors/Colors';
import MainScreenComponent from '../components/MainScreenComponent';
import FirstPage from '../tab/FirstPage';
import SecondPage from '../tab/SecondPage';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={styles.sectionContainer}>
      <MainScreenComponent />


      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: Colors.Silver,
  },

  AndroidSafeArea: {
    flex: 1,
    backgroundColor: Colors.Silver,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  
});

export default MainScreen;
