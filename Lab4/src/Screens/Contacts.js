import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fectchContactsSuccess, mapContacts} from '../ContactSlice';
import Style from '../Style';
import ContactListItem from './ContactListItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, Text, View} from 'react-native';

const Contacts = ({navigation}) => {
  const {contacts} = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const keyExtractor = ({phone}) => phone;
  const fetchContacts = async () => {
    const res = await fetch('https://randomuser.me/api/?results=50');
    const ContactData = await res.json();
    return ContactData.results.map(mapContacts);
  };

  useEffect(() => {
    fetchContacts()
      .then(contacts => {
        dispatch(fectchContactsSuccess(contacts));
      })
      .catch(e => {
        console.log(e);
        console.log('Fail');
      });
  }, []);

  const RenderContacts = ({data}) => {
    const {name, avatar, phone} = data;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate('ProfileContact', {contact: data})}
      />
    );
  };

  return (
    <View style={Style.container}>
      <FlatList
        data={contacts}
        renderItem={({item}) => <RenderContacts data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Contacts;
