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
  FlatList,
} from 'react-native';
import Colors from '../assets/colors/Colors';

const TabFlatListComponent = props => {
  const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[styles.searchSection]}>
      <View
        style={{
          flex: 1,
          alignContent: 'flex-start',
          flexDirection: 'row',
        }}>
        <Image
          source={item.photo}
          style={{width: 60, height: 60, borderRadius: 5}}
        />

        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View
            style={{
              flex: 1,
              alignContent: 'flex-start',
              flexDirection: 'row',
              marginTop: 3,
            }}>
            <Image
              source={require('../assets/image/star.png')}
              style={{width: 15, height: 15}}
            />
            <Text style={styles.smallText}>{item.rate}</Text>

            <Image
              source={require('../assets/image/clock.png')}
              style={{width: 15, height: 15, marginLeft: 10}}
            />
            <Text style={styles.smallText}>{item.duration}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return <Item item={item} onPress={props.onPressing} />;
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  smallText: {
    width: 50,
    fontSize: 14,
    marginLeft: 10,
  },
  searchSection: {
    width: '92%',
    marginVertical: 10,
    paddingLeft: 10,
    borderRadius: 21,
    height: 90,
    elevation: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    alignContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 14,
    color: Colors.Grey,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 8,
    marginLeft: 30,
  },
});

export default TabFlatListComponent;
