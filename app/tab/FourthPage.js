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
const FourthPage = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      photo: require('../assets/image/r.png'),
      duration: '5h 15m',
      rate: '4.0',
      title: 'Adobe Course',
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
export default FourthPage;
