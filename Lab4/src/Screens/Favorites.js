import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ContactThumbnail} from './ContactThum';

const Favorites = ({navigation}) => {
  const {contacts} = useSelector(state => state.contacts);
  const RenderFav = ({item}) => {
    const {avatar} = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigation.navigate('ProfileContact', {contact: item})}
      />
    );
  };
  const favs = contacts.filter(contact => contact.favorite);
  return (
    <View>
      <FlatList
        data={favs}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={RenderFav}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  list: {
    alignItems: 'center',
  },
});
export default Favorites;
