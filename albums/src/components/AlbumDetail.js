import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  return (
    <Card>
      <CardSection>
        <View style={styles.imgContainerStyle}>
          <Image 
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }} 
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image 
          style={styles.imageStyle}
          source={{ uri: image }} 
        />
      </CardSection>
      
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
}; 

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imgContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;