import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import Style from '../Style';

const ContactListItem = ({name, avatar, phone, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor="grey"
      style={Style.container}
      onPress={onPress}>
      <View style={Style.contactInfo}>
        <Image source={{uri: avatar}} style={Style.avatar} />
        <View style={Style.details}>
          <Text style={Style.title}>{name}</Text>
          <Text style={Style.subtitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ContactListItem;
