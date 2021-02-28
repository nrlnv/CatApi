import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {scale} from '../constants/globalStyles';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    padding: scale(10),
    borderRadius: scale(10),
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    color: 'blue',
    fontSize: scale(15),
    fontWeight: '600',
  },
});

export default Button;
