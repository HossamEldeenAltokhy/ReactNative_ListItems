/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {createAppContainer, navigate, navigation, createNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import additem from './additem';
import App from './App';


  

 
  
export default class items extends Component {
   
     	
   
  render() {

 
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#FAFAFA',
          padding: 30
        }}>
        <Text style= {styles.title}>Item</Text>
        <Text style= {styles.subtitle}>Subtitle goes here</Text>
         <View
                      style={{
                        height: 23,
                      }}>

                      </View>
                    <View
                      style={{
                        height: 400,
                        width: 300,
                        paddingTop: 31,
                        paddingBottom: 109,
                        paddingRight: 23,
                        paddingLeft: 36,
                        backgroundColor: 'white',
                        
                      }}>
                            <FlatList
                              data={[
                                {key: 'item0'},
                                {key: 'item1'},
                                {key: 'item2'},
                                {key: 'item3'},
                                {key: 'item4'},
                                {key: 'item5'},
                                {key: 'item6'},
                                {key: 'item7'},
                                {key: 'item8'},
                                {key: 'item9'},
                                
                              ]}
                              renderItem={({item}) => <Text  style= {styles.item} >{item.key}</Text>}
                              
                            />
                            
                    </View>

                    <View
                      style={{
                        height: 23,
                        
                      }}>

                      </View>
            

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Add')} activeOpacity={1.0} style={styles.button} >
          <View
          style={{
            paddingLeft:70,
            height: 60,
            
            flexDirection: 'row',
          }}>
          <Image 
          style={styles.image}
          source ={require('./addimage.png')}
          />
          <Text style={styles.buttonText}>Add new item</Text>
          </View>
          </TouchableOpacity> 

         
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   
  },
  item: {
    padding: 10,
    fontSize: 20,
    color: "#666666",
  },  
  title: {

    color: "#1D7281",
    fontSize: 30,

    },
    subtitle: {

    color: "#999999",
    fontSize: 14,

    },

  button: {
    width: 300,
    height: 60,
    backgroundColor: '#00CCFF',
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 10,
    paddingTop: 15
  },

  buttonText: {
    color: '#FFFFFF',
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 20,
  },

  image:{
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 15,
    // source: "./addimage"
  }
  
})

