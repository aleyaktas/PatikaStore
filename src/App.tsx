import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import Card from './components/Card/Card';
import products from './products.json';
import {IProduct} from './types/general.types';
function App() {
  const [text, onChangeText] = useState('');
  const [searchProduct, onChangeSearchProduct] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>();

  useEffect(() => {
    if (searchProduct.length > 0) {
      const filtered: IProduct[] = products.filter((product: IProduct) =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase()),
      );
      setFilteredProducts(filtered);
    }
  }, [searchProduct]);

  const renderItem = ({item}: any) => {
    return <Card product={item} />;
  };

  return (
    <SafeAreaView>
      <Text style={styles.headerTitle}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search..."
        onChange={e => onChangeSearchProduct(e.nativeEvent.text)}
      />
      <FlatList
        numColumns={2}
        horizontal={false}
        data={searchProduct.length > 0 ? filteredProducts : products}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
    color: 'purple',
  },
  input: {
    height: 50,
    margin: 10,
    marginTop: 0,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#ECEFF1',
  },
});

export default App;
