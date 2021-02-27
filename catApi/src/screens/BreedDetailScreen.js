import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const BreedDetailScreen = ({route}) => {
  const {item} = route.params;
  return (
    <SafeAreaView>
      <Text>{item.name}</Text>
    </SafeAreaView>
  );
};

export default BreedDetailScreen;
