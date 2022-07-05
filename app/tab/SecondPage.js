/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Colors from '../assets/colors/Colors';
import TabFlatListComponent from '../components/TabFlatListComponent';

const SecondPage = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      photo: require('../assets/image/r.png'),
      duration: '5h 15m',
      rate: '4.0',
      title: 'PhotoShop Course',
    },
    {
      id: '2',
      photo: require('../assets/image/d_design.png'),
      duration: '3h 04m',
      rate: '3.7',
      title: '3D Design',
    },
    {
      id: '3',
      photo: require('../assets/image/r.png'),
      duration: '4h 55m',
      rate: '4.3',
      title: 'Figma',
    },
    {
      id: '4',
      photo: require('../assets/image/d_design.png'),
      duration: '7h 35m',
      rate: '4.5',
      title: 'VFX',
    },
    {
      id: '5',
      photo: require('../assets/image/r.png'),
      duration: '1h 30m',
      title: 'Html & css',
      rate: '5.0',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.Silver }}>
      <TabFlatListComponent
        onPressing={() => navigation.navigate('DetailsScreen')}
        data ={DATA}
      />
    </SafeAreaView>
  );
};
export default SecondPage;
