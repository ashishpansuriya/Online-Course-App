/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Colors from '../assets/colors/Colors';
import TabFlatListComponent from '../components/TabFlatListComponent';
const ThirdPage = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      photo: require('../assets/image/r.png'),
      duration: '8h 25m',
      rate: '5.0',
      title: 'Basic C And C++',
    },
    {
      id: '2',
      photo: require('../assets/image/d_design.png'),
      duration: '6h 40m',
      rate: '4.7',
      title: 'Android',
    },
    {
      id: '3',
      photo: require('../assets/image/r.png'),
      duration: '12h 45m',
      rate: '4.9',
      title: 'Flutter',
    },
    {
      id: '4',
      photo: require('../assets/image/d_design.png'),
      duration: '12h 11m',
      rate: '4.8',
      title: 'React',
    },
    {
      id: '5',
      photo: require('../assets/image/r.png'),
      duration: '2h 18m',
      title: 'JavaScript',
      rate: '5.0',
    },
    {
      id: '6',
      photo: require('../assets/image/r.png'),
      duration: '9h 44m',
      title: 'Python',
      rate: '5.0',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.Silver}}>
      <TabFlatListComponent
        onPressing={() => navigation.navigate('DetailsScreen')}
        data={DATA}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default ThirdPage;
