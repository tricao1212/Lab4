import 'react-native-get-random-values';
import nextId from "react-id-generator";
import { v4 as uuidv4 } from 'uuid';
import {configureStore, createSlice} from '@reduxjs/toolkit';

export const mapContacts = (contact) => {
    const {name, picture, phone, cell, email } = contact;
    return {
        id: nextId(),
        name: name.first + ' ' + name.last,
        avatar: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() < 0.1 ? true : false,
    };
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  } ,
  reducers: {
    fectchContactsSuccess: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const {fectchContactsSuccess} = contactSlice.actions;
export default contactSlice.reducer