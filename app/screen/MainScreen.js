/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from '../components/Colors';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <Image
            source={require('../assets/image/menu.png')}
            style={styles.menu}
          />

          <Image
            source={require('../assets/image/usericon.png')}
            style={styles.user}
          />
        </View>

        <Text style={styles.welcomeText}>Hello, User</Text>

        <Text style={styles.text}>What do you want to learn?</Text>

        <ImageBackground
          source={require('../assets/image/bg.png')}
          style={[styles.containter]}>
          <View style={styles.imgView}>
            <View style={styles.txtView}>
              <Text
                style={{
                  alignContent: 'center',
                  alignSelf: 'flex-start',
                  marginLeft: 20,
                  fontSize:26,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                New Course!
              </Text>

              <Text
                style={{
                  alignContent: 'center',
                  alignSelf: 'flex-start',
                  marginLeft: 20,
                  fontSize: 14,
                  color: 'white',
                }}>
                User Experience Class
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  See Class
                </Text>
              </TouchableOpacity>
            </View>         
          </View>

        </ImageBackground>

        <View style={styles.header}>
          <Image
            source={require('../assets/image/menu.png')}
            style={styles.menu}
          />

          <Image
            source={require('../assets/image/usericon.png')}
            style={styles.user}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: Colors.Silver,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    width: '100%',
  },
  user: {
    height: 40,
    width: 40,
    marginRight: 15,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    alignContent: 'center',
  },
  menu: {
    height: 33,
    width: 33,
    marginLeft: 15,
    marginTop: 5,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: Colors.Silver,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 14,
    color: Colors.Grey,
  },
  welcomeText: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 25,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  containter: {
    width: Dimensions.get('screen').width - 25,
    height: 150,
    marginTop: 40,
    borderRadius: 25,
    overflow: 'hidden',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',
  },
  txtView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    height: 30,
    width: '23%',
    borderRadius:9,
    marginLeft:20,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.Purple,
    marginTop: 10,
    color: 'white',
  },
  image: {
    width:100,
    height: 100,
    alignSelf: 'center',
    alignContent: 'center',
    resizeMode: 'contain',
  },
});

export default MainScreen;
