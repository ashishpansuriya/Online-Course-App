/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
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
import Colors from '../assets/colors/Colors';

const SignUpScreen = props => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  const [textInputName, setTextInputName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInputPassWord, setTextInputPassWord] = useState('');

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    //Check for the Email TextInput
    else if (!textInputEmail.trim()) {
      alert('Please Enter UserName');
      return;
    } else if (!textInputPassWord.trim()) {
      alert('Please Enter PassWord');
      return;
    } else {
      props.navigation.navigate('MainScreen');
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
            <Text style={styles.text}></Text>

            <Text style={styles.welcomeText}>Ceate Account</Text>

            <TextInput
              style={styles.userName}
              underlineColorAndroid="transparent"
              placeholder="Name"
              onChangeText={value => setTextInputName(value)}
            />

            <TextInput
              style={styles.userName}
              underlineColorAndroid="transparent"
              placeholder="UserName"
              onChangeText={value => setTextInputEmail(value)}
            />

            <TextInput
              style={styles.userName}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={value => setTextInputPassWord(value)}
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity style={styles.button} onPress={checkTextInput}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Sign Up</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: 240,
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
    marginTop: 20,
    flex: 1,
    alignContent: 'center',
    borderTopLeftRadius: 29,
    borderTopRightRadius: 29,
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
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DarkBlue,
    marginTop: 50,
    color: 'white',
  },
});
export default SignUpScreen;
