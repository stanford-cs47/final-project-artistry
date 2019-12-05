import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'

export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return { 
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#172F1E', width: '100%', height: '100%'}}>
          <Text style={material.body2, {color: 'white'}}>AR Experiences</Text>
        </View>
      )
    };
  };


  render() {
    return (
      <View style={styles.container}>
        <Feed onProfileRequested={this.onProfileRequested} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
