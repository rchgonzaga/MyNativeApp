import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";

import { Header, Actions, Info } from "../components/UserDetail";
import colors from "../config/colors";

class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...contact} />
        <Actions {...contact} />
        <Info {...contact} />
      </ScrollView>
    );
  }
}

Details.propTypes = {
  navigation: PropTypes.object
};

export default Details;
