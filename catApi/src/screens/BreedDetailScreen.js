import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

import Button from '../components/Button';

import {dimensions, scale} from '../constants/globalStyles';

const BreedDetailScreen = ({route}) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <Image source={{uri: item.image.url}} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textDescription}>{item.description}</Text>
      </View>
      <View style={styles.buttonView}>
        <Button title="Another photo" />
        <Button title="Add to favourites" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    alignItems: 'center',
    marginTop: scale(20),
    shadowColor: 'black',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  image: {
    width: dimensions.fullWidth - scale(40),
    height: dimensions.fullWidth - scale(40),
    borderRadius: 15,
  },
  textView: {
    marginHorizontal: scale(20),
    marginTop: scale(20),
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
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(20),
    marginTop: scale(20)
  },
});

export default BreedDetailScreen;
