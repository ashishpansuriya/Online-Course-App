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
  ScrollView,
  Alert,
} from 'react-native';
import Colors from '../components/Colors';

const LoginScreen = props => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  const buttonClickListener = () => {
    const {TextInputValue} = this.props;
    if (TextInputValue == '') {
      Alert.alert('Please enter the text to proceed');
    }
  };

  const onEnterText = TextInputValue => {
    if (TextInputValue.trim() != 0) {
      this.props({TextInputValue: TextInputValue, ErrorStatus: true});
    } else {
      this.props({TextInputValue: TextInputValue, ErrorStatus: false});
    }
  };


  return (
    <KeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={require('../assets/image/appbg.png')}
        style={[styles.containter]}>
        <Image
          source={require('../assets/image/amico.png')}
          style={styles.image}
        />
        <View style={styles.scrollview}>
          <ScrollView style={styles.droidSafeArea}>
            <Text style={styles.text}>Hello,</Text>

            <Text style={styles.welcomeText}>Welcome Back</Text>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput style={styles.userName} placeholder="Username" />

              <TextInput style={styles.userName} placeholder="Password" />

              <Text style={[styles.forgot, {color: Colors.DarkBlue}]}>
                Forgot Password?
              </Text>

              <TouchableOpacity
                style={styles.button}
                
                onPress={() => props.navigation.navigate('MainScreen')}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '70%',
    height: 190,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 60,
    resizeMode: 'contain',
  },
  text: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 40,
    fontSize: 16,
    color: Colors.White,
  },
  forgot: {
    alignContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 15,
    fontSize: 12,
    color: Colors.White,
  },
  containter: {
    width: '100%', //for full screen
    height: '100%', //for full screen
  },

  scrollview: {
    backgroundColor: 'white',
    marginTop: 10,
    flex: 1,
    alignContent: 'center',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    justifyContent: 'center',
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
    backgroundColor: 'transparent',
    marginTop: 10,
    flex: 1,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    textShadowColor: 'white',
  },

  button: {
    height: 50,
    width: '89%',
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DarkBlue,
    marginTop: 20,
    color: 'white',
  },
});

export default LoginScreen;
