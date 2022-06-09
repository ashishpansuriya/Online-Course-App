/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const IntroScreen = (props) => {
  return (
    <View>
      <Text> Screen </Text>

      <Button title='LoginScreen' onPress={() => props.navigation.navigate('LoginScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default IntroScreen;
