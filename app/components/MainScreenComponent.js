/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../assets/colors/Colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const MainScreenComponent = () => {
  const [textInputName, setTextInputName] = useState('');

  return (
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

      <Text style={[styles.welcomeText, {marginTop: 25}]}>Hello, User</Text>

      <Text style={[styles.text, {marginTop: 10}]}>
        What do you want to learn?
      </Text>

      <View style={styles.searchSection}>
        <Icon
          style={styles.searchIcon}
          name="search"
          size={20}
          color={Colors.LightGrey}
        />
        <TextInput
          style={styles.userName}
          underlineColorAndroid="transparent"
          placeholder="Search"
          placeholderTextColor={Colors.LightGrey}
          onChangeText={value => setTextInputName(value)}
        />
      </View>

      <ImageBackground
        source={require('../assets/image/bg.png')}
        style={[styles.containter]}>
        <View style={styles.imgView}>
          <View style={styles.txtView}>
            <Text style={[styles.welcomeText, {color: 'white'}]}>
              New Course!
            </Text>

            <Text style={[styles.text, {color: 'white'}]}>
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

      <View style={[styles.header, {marginTop: 10}]}>
        <Text style={[styles.welcomeText]}>Course</Text>

        <Text
          style={[
            styles.text,
            {marginRight: 15, justifyContent: 'center', marginTop: 10},
          ]}>
          View All
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    width: '100%',
  },
  searchSection: {
    width: '89%',
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 11,
    height: 50,
    elevation: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
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
  text: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 14,
    color: Colors.Grey,
  },
  welcomeText: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  containter: {
    width: Dimensions.get('screen').width - 25,
    height: 150,
    marginTop: 30,
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
    borderRadius: 9,
    marginLeft: 20,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.Purple,
    marginTop: 10,
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    alignContent: 'center',
    resizeMode: 'contain',
  },
  userName: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    width: '89%',
    paddingLeft: 10,
    borderRadius: 16,
    height: 50,
  },
});

export default MainScreenComponent;
