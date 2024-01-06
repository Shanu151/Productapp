import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {typography} from '../Typography/Index';

// const myIcon = <Icon name="rocket" size={30} color="#900" />;
const Header = () => {
  // const [isHearted, setIsHearted] = useState(false);

  // const toggleHeart = () => {
  //   setIsHearted(prevIsHearted => !prevIsHearted); // Toggle the isHearted state
  // };
  return (
    <View style={styles.container}>
      <View style={styles.back_title}>
        <AntDesign name="arrowleft" size={25} color="#050505" />
        <Text style={typography.heading}>Women</Text>
      </View>
      <View style={styles.buttons}>
        <AntDesign name="search1" size={25} color="#050505" />
        <AntDesign name="hearto" size={25} color="#050505" />
        {/* <TouchableOpacity onPress={toggleHeart}>
          <AntDesign
            name={isHearted ? 'heart' : 'hearto'}
            size={25}
            color={isHearted ? 'red' : '#050505'}
          />
        </TouchableOpacity> */}
        <SimpleLineIcons name="handbag" size={25} color="#050505" />
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#a09c9c',
  },
  back_title: {
    width: '65%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  buttons: {
    width: '35%',
    flexDirection: 'row',
    gap: 3,
    justifyContent: 'space-between',
  },
});
