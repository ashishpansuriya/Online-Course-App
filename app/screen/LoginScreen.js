/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Dimensions,
} from 'react-native';
import Colors from '../components/Colors';

const LoginScreen = props => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <View style={styles.droidSafeArea}>
      <ImageBackground
        source={require('../assets/image/appbg.png')}
        style={[styles.fixed, styles.containter]}>
        
        <StatusBar backgroundColor="transparent" translucent={true} />

        <Image
          source={require('../assets/image/amico.png')}
          style={styles.image}
        />
        <View style={[styles.fixed, styles.scrollview]}>
          <Text style={styles.text}>Hello,</Text>

          <Text style={styles.welcomeText}>Welcome Back</Text>

          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={keyboardVerticalOffset}>
            <TextInput style={styles.userName} placeholder="Username" />

            <TextInput style={styles.userName} placeholder="Password" />
          </KeyboardAvoidingView>

          <Text style={styles.forgot}>Forgot Password?</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('LoginScreen')}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Sign in</Text>
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
    width: '70%',
    height: 190,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 40,
    resizeMode: 'contain',
  },
  text: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 40,
    fontSize: 16,
    color: Colors.Red,
  },
  forgot: {
    alignContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 15,
    fontSize: 12,
    color: 'red',
  },
  containter: {
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollview: {
    backgroundColor: 'transparent',
  },

  userName: {
    alignSelf: 'center',
    backgroundColor: '#F0F4FD',
    width: '89%',
    marginTop: 30,
    paddingLeft: 10,
    borderRadius: 10,
    height: 50,
  },
  welcomeText: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 5,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
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
    fontSize: 46,
  },
  button: {
    display: 'flex',
    height: 50,
    width: '89%',
    borderRadius: 6,
    textShadowColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DarkBlue,
    shadowColor: '#000000',
    shadowOpacity: 4,
    marginTop: 20,
    color: 'white',
    shadowOffset: {
      height: 20,
      width: 10,
    },
    shadowRadius: 35,
  },

  cardAnimation: {
    height: '100%',
    width: '100%',
    borderRadius: 26,
    textShadowColor: 'white',
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 4,
    marginTop: 10,
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

export default LoginScreen;
