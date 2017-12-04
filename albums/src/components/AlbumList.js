import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => {
        console.log(`response, ${res}`);
      }).catch((err) => {
        console.log(`Error, ${err}`);
      });
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;