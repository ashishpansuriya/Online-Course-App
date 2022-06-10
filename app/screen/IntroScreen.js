/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const IntroScreen = props => {
  return (
    <View style={styles.droidSafeArea}>
      <ImageBackground
        source={require('../assets/image/appbg.png')}
        onPress={() => props.navigation.navigate('LoginScreen')}
        style={styles.mainContainer}>
        <StatusBar backgroundColor="transparent" translucent={true} />

        <View style={styles.droidSafeArea}>
          <Image
            source={require('../assets/image/amico.png')}
            style={styles.image}
          />
          <Text style={styles.textStudiee}>
            Stud
            <Text style={{color: 'blue'}}>ee</Text>
          </Text>

          <Text style={styles.textsmall}>
            Let's easy fast with Studee {'\n'} Watch video learning anytime{' '}
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSignUp} onPress={() => {}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  image: {
    width: '60%',
    height: 230,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 40,
    resizeMode: 'contain',
  },
  droidSafeArea: {
    flex: 1,
  },
  textStudiee: {
    fontSize: 60,
    alignSelf: 'center',
    marginTop: 20,
    color: '#A020F0',
    fontWeight: 'bold',
  },
  textsmall: {
    fontSize: 16,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    display: 'flex',
    height: 50,
    width: '80%',
    borderRadius: 6,
    textShadowColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 4,
    marginTop: 60,
    shadowOffset: {
      height: 20,
      width: 10,
    },
    shadowRadius: 35,
  },

  buttonSignUp: {
    display: 'flex',
    height: 50,
    width: '80%',
    borderRadius: 11,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#7F7CAC',
    shadowColor: '#000000',
    shadowOpacity: 10,
    marginTop: 30,
    shadowOffset: {
      height: 20,
      width: 10,
    },
    shadowRadius: 35,
  },

  mainContainer: {
    width: '100%',
    height: '100%',
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
