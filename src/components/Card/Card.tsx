import React from 'react';
import {Image, Text, View} from 'react-native';
import {IProduct} from '../../types/general.types';
import {styles} from './Card.style';

const Card = ({product}: any) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      {!product.inStock && <Text style={styles.inStock}>STOKTA YOK</Text>}
    </View>
  );
};

export default Card;
