import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';

import {scale, dimensions} from '../constants/globalStyles';

const Breed = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {item.image && item.image.url ? (
        <View style={{flexDirection: 'row'}}>
          <View style={styles.imageView}>
            <Image source={{uri: item.image.url}} style={styles.image} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text numberOfLines={3} style={styles.textDescription}>
              {item.description}
            </Text>
          </View>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: scale(10),
    paddingHorizontal: scale(10),
    marginTop: scale(20),
    backgroundColor: '#fefefe',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 20,
  },
  image: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(10),
  },
  imageView: {
    paddingVertical: scale(10),
  },
  textView: {
    width: dimensions.fullWidth - scale(170),
    marginLeft: scale(10),
  },
  textName: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginVertical: scale(15),
  },
  textDescription: {
    fontSize: scale(15),
    textAlign: 'justify',
  },
});

export default Breed;
