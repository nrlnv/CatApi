import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView, StyleSheet} from 'react-native';

import Breed from '../components/Breed';

const axios = require('axios');

const BreedsScreen = ({navigation}) => {
  const [breeds, setbreeds] = useState(null);
  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then((res) => {
        setbreeds(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderItem = ({item}) => (
    <Breed
      item={item}
      onPress={() => navigation.navigate('BreedDetailScreen', {item: item})}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={breeds}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BreedsScreen;
