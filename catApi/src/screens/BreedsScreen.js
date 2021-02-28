import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

import {get} from '../api/index';
import Breed from '../components/Breed';
import {
  GET_ALL_BREEDS,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_CURRENT_BREED,
} from '../redux/types';

const BreedsScreen = ({
  navigation,
  getAllBreedsAction,
  setCurrentBreedAction,
  isLoading,
  setLoadingTrueAction,
  setLoadingFalseAction,
}) => {
  const [breeds, setBreeds] = useState(null);

  const getAllBreeds = async () => {
    try {
      setLoadingTrueAction();
      const response = await get();
      setBreeds(response.data);
      getAllBreedsAction(response.data);
      setLoadingFalseAction();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBreeds();
  }, []);

  const renderItem = ({item}) => (
    <Breed
      item={item}
      onPress={() => {
        setCurrentBreedAction(item);
        navigation.navigate('BreedDetailScreen');
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={breeds}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.app.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBreedsAction: (breeds) =>
      dispatch({type: GET_ALL_BREEDS, payload: breeds}),
    setCurrentBreedAction: (breed) =>
      dispatch({type: SET_CURRENT_BREED, payload: breed}),
    setLoadingTrueAction: () => dispatch({type: SET_LOADING_TRUE}),
    setLoadingFalseAction: () => dispatch({type: SET_LOADING_FALSE}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedsScreen);
