/* eslint-disable prettier/prettier */
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import Colors from '../assets/colors/Colors';
import TabFlatListComponent from '../components/TabFlatListComponent';

const FirstPage = ({navigation}) => {
  const DATA = [
    {
      id: '3',
      photo: require('../assets/image/r.png'),
      duration: '4h 55m',
      rate: '4.3',
      title: 'Figma',
    },

    {
      id: '5',
      photo: require('../assets/image/r.png'),
      duration: '1h 30m',
      title: 'Html & css',
      rate: '5.0',
    },
    {
      id: '6',
      photo: require('../assets/image/r.png'),
      duration: '8h 25m',
      rate: '5.0',
      title: 'Basic C And C++',
    },
    {
      id: '1',
      photo: require('../assets/image/r.png'),
      duration: '5h 15m',
      rate: '4.0',
      title: 'PhotoShop Course',
    },
    {
      id: '7',
      photo: require('../assets/image/d_design.png'),
      duration: '6h 40m',
      rate: '4.7',
      title: 'Android',
    },
    {
      id: '12',
      photo: require('../assets/image/r.png'),
      duration: '5h 15m',
      rate: '4.0',
      title: 'Adobe Course',
    },
    {
      id: '8',
      photo: require('../assets/image/r.png'),
      duration: '12h 45m',
      rate: '4.9',
      title: 'Flutter',
    },
    {
      id: '2',
      photo: require('../assets/image/d_design.png'),
      duration: '3h 04m',
      rate: '3.7',
      title: '3D Design',
    },
    {
      id: '9',
      photo: require('../assets/image/d_design.png'),
      duration: '12h 11m',
      rate: '4.8',
      title: 'React',
    },
    {
      id: '4',
      photo: require('../assets/image/d_design.png'),
      duration: '7h 35m',
      rate: '4.5',
      title: 'VFX',
    },
    {
      id: '10',
      photo: require('../assets/image/r.png'),
      duration: '2h 18m',
      title: 'JavaScript',
      rate: '5.0',
    },
    {
      id: '11',
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

export default FirstPage;
