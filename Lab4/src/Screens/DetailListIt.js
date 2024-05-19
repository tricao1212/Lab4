import React from 'react';
import {Text, View} from 'react-native';
import { Icon } from 'react-native-paper';
import Style from '../Style';

const DetailListIt = ({icon, title, subtitle}) => {
  return (
    <View style={Style.contactInfo}>
      <Icon source={icon} size={16}/>
      <View style={Style.details}>
        <Text style={Style.title}>{title}</Text>
        <Text style={Style.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default DetailListIt;
