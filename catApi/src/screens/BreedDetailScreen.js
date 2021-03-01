/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';

import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_CURRENT_BREED,
} from '../redux/types';
import Button from '../components/Button';
import {postApi} from '../api/index';
import {dimensions, scale} from '../constants/globalStyles';

const BreedDetailScreen = ({
  currentBreed,
  breeds,
  setCurrentBreedAction,
  setLoadingTrueAction,
  setLoadingFalseAction,
  isLoading,
}) => {
  const [loading, setLoading] = useState(false);

  const addToFavourites = async () => {
    const image = {image_id: currentBreed.image.id, sub_id: 'your-user-1234'};
    try {
      await postApi(image);
      alert('successfully added to favourites');
    } catch (error) {
      alert(error);
    }
  };

  const showAnotherCat = () => {
    const keys = Object.keys(breeds);
    const randomIndex = keys[Math.floor(Math.random() * keys.length)];
    const item = breeds[randomIndex];
    setCurrentBreedAction(item);
    console.log(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        {loading ? <ActivityIndicator size="large" color="red" /> : null}
        <Image
          source={{uri: currentBreed.image.url}}
          style={styles.image}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textName}>{currentBreed.name}</Text>
        <Text style={styles.textDescription}>{currentBreed.description}</Text>
      </View>
      <View style={styles.buttonView}>
        <Button title="Another cat" onPress={() => showAnotherCat()} />
        <Button title="Add to favourites" onPress={() => addToFavourites()} />
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
    marginTop: scale(20),
  },
});

const mapStateToProps = (state) => {
  return {
    currentBreed: state.breeds.currentBreed,
    breeds: state.breeds.breeds,
    isLoading: state.app.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentBreedAction: (breed) =>
      dispatch({type: SET_CURRENT_BREED, payload: breed}),
    setLoadingTrueAction: () => dispatch({type: SET_LOADING_TRUE}),
    setLoadingFalseAction: () => dispatch({type: SET_LOADING_FALSE}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedDetailScreen);
