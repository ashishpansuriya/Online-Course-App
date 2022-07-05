/* eslint-disable prettier/prettier */
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import Colors from '../assets/colors/Colors';
import TabFlatListComponent from '../components/TabFlatListComponent';

const FirstPage = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      photo: require('../assets/image/r.png'),
      duration: '5h 15m',
      rate: '5.0',
      title: 'PhotoShop Course',
    },
    {
      id: '2',
      photo: require('../assets/image/d_design.png'),
      duration: '3h 04m',
      rate: '5.0',
      title: '3D Design',
    },
    {
      id: '3',
      photo: require('../assets/image/r.png'),
      duration: '4h 55m',
      rate: '5.0',
      title: 'Figma',
    },
    {
      id: '4',
      photo: require('../assets/image/d_design.png'),
      duration: '7h 35m',
      rate: '5.0',
      title: 'VFX',
    },
    {
      id: '5',
      photo: require('../assets/image/r.png'),
      duration: '0h 30m',
      title: 'Html & css',
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
