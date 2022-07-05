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
  Dimensions,
} from 'react-native';
import Colors from '../assets/colors/Colors';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const DetailsScreen = props => {
  return (
    <ImageBackground
      source={require('../assets/image/appbg.png')}
      style={[styles.containter]}>
      <StatusBar barStyle="light-content" translucent={true} />

      <Icon
        style={styles.back}
        name="ios-chevron-back-outline"
        size={30}
        color="white"
        onPress={() => {
          props.navigation.goBack();
        }}
      />

      <Image
        source={require('../assets/image/vector_laptop.png')}
        style={styles.image}
      />

      <View style={styles.scrollview}>
        <ScrollView style={styles.droidSafeArea}>
          <View
            style={{
              width: 70,
              borderRadius: 11,
              borderBottomWidth: 4,
              marginTop: 15,
              alignItems: 'center',
              alignSelf: 'center',
              borderColor: Colors.Silver,
            }}></View>

          <Text style={styles.text}>New Course</Text>

          <Text style={styles.welcomeText}>User Course</Text>

          <View>
            <Text style={[styles.forgot]}>Free</Text>
          </View>
          <View style={styles.line} />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              alignContent: 'flex-start',
            }}>
            <Image
              source={require('../assets/image/usericon.png')}
              style={{
                width: 40,
                height: 40,
                marginLeft: 20,
                borderRadius: 5,
                marginTop: 13,
              }}
            />

            <View style={styles.itemContainer}>
              <Text style={styles.title}>Ardy Gunawan</Text>
              <View
                style={{
                  flex: 1,
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <Image
                  source={require('../assets/image/star.png')}
                  style={{width: 15, height: 15}}
                />
                {/* <Text style={styles.smallText}>{item.rate}</Text> */}

                <Image
                  source={require('../assets/image/clock.png')}
                  style={{width: 15, height: 15, marginLeft: 10}}
                />
                {/* <Text style={styles.smallText}>{item.duration}</Text> */}
              </View>
            </View>
          </View>

          <View style={styles.line} />

          <Text style={styles.aboutCourse}>About Course</Text>
          <Text style={styles.shortDisc}>
            In this course, you will learn the comprehensive program training of
            User Experience and mastering user-centered design techniques. You
            will also learn how to make digital prototyping properly. At the end
            of this course, you will be ready to explore UX Design in your way.
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate('VideoListScreen');  }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Start Course!</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 60,
    resizeMode: 'contain',
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
    marginBottom:10,
    color: 'white',
  },
  text: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 40,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderColor: Colors.Purple,
    backgroundColor: Colors.Purple,
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
    color: 'white',
  },
  line: {
    width: Dimensions.get('window').width - 40,
    marginHorizontal: 20,
    borderRadius: 11,
    borderBottomWidth: 1,
    marginTop: 20,
    borderColor: Colors.Silver,
  },
  forgot: {
    alignContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    paddingVertical: 2,
    marginTop: -30,
    paddingHorizontal: 10,
    borderColor: Colors.DarkBlue,
    backgroundColor: Colors.DarkBlue,
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
    color: 'white',
  },
  containter: {
    width: '100%', //for full screen
    height: '100%', //for full screen
  },

  scrollview: {
    backgroundColor: 'white',
    flex: 1,
    alignContent: 'center',
    borderTopLeftRadius: 29,
    borderTopRightRadius: 29,
    justifyContent: 'center',
  },
  back: {
    alignSelf: 'flex-start',
    alignContent: 'center',
    marginTop: 40,
    position: 'absolute',
    marginLeft: 10,
    resizeMode: 'contain',
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
  aboutCourse: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 25,
    fontSize: 18,
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

  title: {
    fontSize: 16,
    color: Colors.Grey,
  },
  shortDisc: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 15,
    padding: 5,
    lineHeight: 30,
    color: Colors.Grey,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 8,
    justifyContent: 'space-between',

    marginLeft: 30,
  },
  smallText: {
    width: 50,
    fontSize: 14,
    marginLeft: 10,
  },
});

export default DetailsScreen;
