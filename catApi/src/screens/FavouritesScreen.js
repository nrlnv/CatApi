import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import {INC, DEC} from '../redux/types';

const FavouritesScreen = (props) => {
  return (
    <SafeAreaView>
      <Text>{props.counter}</Text>
      <Button title="inc" onPress={() => props.inc()} />
      <Button title="dec" onPress={() => props.dec()} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.app.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({type: INC}),
    dec: () => dispatch({type: DEC}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesScreen);
