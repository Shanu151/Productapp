import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {style} from '../../Style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SingleProduct = ({item, index}: any) => {
  //   console.log('hiakfd', item);
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.mediaUrl}}
        style={{width: '100%', height: 250, resizeMode: 'cover'}}
      />
      <View style={{padding: 5}}>
        <Text style={style.product_varient}>{item.variants[0].variant}</Text>
        <Text style={style.product_all_text}>{item.name}</Text>
        {/* <Text style={style.product_all_text}>
            {item.name.split(' ').slice(0, 4).join(' ')}
            </Text> */}
        <Text style={style.product_all_text}>{item.category[0].name}</Text>
        <Text style={style.product_all_text}>
          ₹&nbsp;{parseFloat(item.variants[0].mrp)}
        </Text>
        <View style={style.newtag}>
          <Text style={{color: '#fff', fontSize: 10}}>New</Text>
        </View>
      </View>
      <View style={style.heart}>
        <AntDesign
          onPress={handlePress}
          name={pressed ? 'heart' : 'hearto'}
          size={25}
          color={pressed ? 'red' : '#000000'}
        />
      </View>
    </View>
  );
};
export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0eeee',
    width: '47.5%',
    height: 'auto',
    margin: 7,
    borderRadius: 4,
    position: 'relative',
    overflow: 'hidden',
  },
});
