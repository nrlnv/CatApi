import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';

import {SET_LOADING_TRUE, SET_LOADING_FALSE} from '../redux/types';
import {scale, dimensions} from '../constants/globalStyles';

const Item = ({item}) => (
  <View style={styles.imagesView}>
    <Image source={{uri: item.image.url}} style={styles.image} />
  </View>
);

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const FavouritesScreen = ({
  setLoadingTrueAction,
  setLoadingFalseAction,
  isLoading,
}) => {
  const [images, setImages] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getFavourites();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getFavourites = async () => {
    const headers = {
      'x-api-key': 'a35c3e4e-88d0-4b04-80e1-5b98372ac7be',
    };
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/favourites',
        {headers},
      );
      setImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoadingTrueAction();
    getFavourites();
    setLoadingFalseAction();
  }, []);
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagesView: {
    alignItems: 'center',
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
    borderRadius: scale(15),
    marginBottom: scale(30),
  },
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.app.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoadingTrueAction: () => dispatch({type: SET_LOADING_TRUE}),
    setLoadingFalseAction: () => dispatch({type: SET_LOADING_FALSE}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesScreen);
