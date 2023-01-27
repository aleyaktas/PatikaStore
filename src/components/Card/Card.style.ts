import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    flex: 1,
  },
  image: {
    width: 'auto',
    height: 200,
    borderRadius: 10,
    backgroundColor: 'white',
    objectFit: 'contain',
    margin: 'auto',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 10,
  },
  inStock: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'red',
  },
});
