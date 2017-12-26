import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

export default class Contacts extends Component {
  handleRowPress = contact => {
    this.props.navigation.navigate('Details', contact);
  };

  render() {
    return (
      <FlatList
        style={{ backgroundColor: colors.background }}
        data={contacts}
        renderItem={({ item }) => (
          <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
        )}
        keyExtractor={item => item.email}
      />
    );
  }
}
