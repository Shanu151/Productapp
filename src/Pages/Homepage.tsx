import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCard from '../Screens/cards/ProductCard';
import Header from '../Layout/Header';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ProductCard />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
