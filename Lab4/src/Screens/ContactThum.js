import 'react-native-gesture-handler';
import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactThum = ({avatar, name, phone}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: avatar}} />
      <Text style={styles.text}>{name}</Text>
      <View>
        <Icon name="phone" size={16} />
        <Text style={styles.text}>{phone}</Text>
      </View>
    </View>
  );
};

export const ContactThumbnail = ({avatar, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        <Image source={{uri: avatar}} style={styles.avatar} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  text: {
    color: 'white',
  },
});
export default ContactThum;
