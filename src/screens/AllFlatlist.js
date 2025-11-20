import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
// import { FlatList } from 'react-native-gesture-handler';

const AllFlatlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setProducts(json);
      });
  };
  return (
    <View style={styles.itemView}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemView}>
              <Image source={{ usi: item.image }} style={styles.productImage} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default AllFlatlist;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: '90%',
    height: 100,
    backgroundcolor: '#fff',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  productImage: {
    width: 100,
    height: 100,
  },
});
