import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import AppConfig from '../Config/AppConfig';
import FeedItem from '../Components/FeedItem'
import styles from './Styles/BookmarkScreen.styles'

export default class BookmarkScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

      return { 
        headerTitle: (
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#172F1E', width: '100%', height: '100%'}}>
            <Text style={material.body2, {color: 'white'}}>My Profile</Text>
          </View>
        )
      };
  };


  render() {

    return (
      <View style={styles.container, {width: '100%', height: '100%', backgroundColor: '#B5CFAD', flexDirection: "column", alignItems: "center" }}>
        <View style={{width: '90%', height: '15%', backgroundColor: 'white',borderColor:'#172F1E', borderWidth: 3, borderRadius: 50, margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize:30, color: '#172F1E', margin: 10}}>@davidyue</Text>
          <Entypo name="plus"
        size={Metrics.icons.medium}
        color={'#172F1E'} />
        </View>
        <View style={{width: '90%', height: '15%', backgroundColor: 'white',borderColor:'#172F1E', borderWidth: 3, borderRadius: 50, margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize:20, color: '#172F1E', margin: 10}}>AR Experiences Created: 10</Text>
        </View>
        <View style={{width: '90%', height: '45%', borderColor:'#172F1E', borderWidth: 3, borderRadius: 50, margin: 10, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#B5CFAD'}}>
          <View style={{width: '90%', height: '75%', borderColor:'#172F1E', borderWidth: 3, borderRadius: 50, margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#B5CFAD'}}>
            <Image
              style={{width:'100%', height: '100%', resizeMode: 'stretch'}}
              source={{uri:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}}
             />
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{fontSize:15, color: '#172F1E',}}>____Created by @davidyue____</Text>
            <Text style={{fontSize:15, color: '#172F1E',}}>____November 13, 2019____</Text>
          </View>
        </View>
        <View style={{width: '90%', height: '45%', borderColor:'#172F1E', borderWidth: 3, borderRadius: 50, margin: 10, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#B5CFAD'}}>
          <View style={{width: '90%', height: '75%', borderColor:'#172F1E', borderWidth: 3, borderRadius: 50, margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#B5CFAD'}}>
            <Image
              style={{width:'100%', height: '100%', resizeMode: 'stretch'}}
              source={{uri:'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'}}
             />
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{fontSize:15, color: '#172F1E',}}>____Created by @davidyue____</Text>
            <Text style={{fontSize:15, color: '#172F1E',}}>____November 13, 2019____</Text>
          </View>
        </View>

      </View>
    );
  }

}
