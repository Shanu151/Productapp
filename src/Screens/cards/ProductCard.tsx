import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import SingleProduct from '../../components/cards/SingleProduct';
import {getData} from '../../service';

const ProductCard = ({navigation}: any) => {
  const [data, setData] = useState([]);
  const [pressed, setPressed] = useState(false);
  const getDatas = async () => {
    try {
      const {data}: any = await getData();
      setData(data?.object);
      // console.log(data?.object);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.prod_sort_filt}>
        <Text style={styles.producttext}>98/100 Products</Text>
        <View style={styles.sort_filter}>
          <Octicons name="sort-asc" size={14} color="#7a7878">
            &nbsp;Sort
          </Octicons>
          <Octicons name="filter" size={14} color="#7a7878">
            &nbsp;Filter
          </Octicons>
        </View>
      </View>
      <View style={{width: Dimensions.get('screen').width}}>
        <FlatList
          contentContainerStyle={{
            backgroundColor: '#ffffff',
            flexGrow: 1,
          }}
          data={data}
          numColumns={2}
          renderItem={({item, index}) => (
            <SingleProduct item={item} index={index} />
          )}
          onMomentumScrollEnd={event => {
            const index = Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width,
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  prod_sort_filt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e9e8e8c3',
    paddingVertical: 18,
    paddingHorizontal: 10,
  },
  sort_filter: {
    width: '24%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  producttext: {
    fontSize: 11,
    color: '#7a7878',
    fontWeight: '500',
  },
});
