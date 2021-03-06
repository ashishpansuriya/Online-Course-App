/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
const IntroScreen = props => {
 
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ImageBackground
        source={require('../assets/image/appbg.png')}
        style={styles.mainContainer}>
        <StatusBar backgroundColor="transparent" translucent={true} />

        <Image
          source={require('../assets/image/amico.png')}
          style={styles.image}
        />

        <View style={styles.droidSafeArea}>
          <Text style={styles.textStudiee}>
            Stud
            <Text style={{color: '#A16BC4'}}>ee</Text>
          </Text>

          <Text style={styles.textsmall}>
            Let's easy fast with Studee {'\n'} Watch video learning anytime{' '}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('LoginScreen')}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSignUp}
            onPress={() => props.navigation.navigate('SignUpScreen')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '60%',
    height: 230,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 60,
    resizeMode: 'contain',
  },
  droidSafeArea: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textStudiee: {
    fontSize: 60,
    alignSelf: 'center',
    marginTop: 20,
    color: '#FFF',
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
});

export default IntroScreen;
