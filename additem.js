/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image , TextInput} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import items from './items';  

export default class additem extends Component {

data = new items();

  render() {


    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#FAFAFA',
          padding: 30,
          
        }}>
        <Text style= {styles.title}>Add new item</Text>
        <Text style= {styles.subtitle}>Subtitle goes here</Text>
         <View
                      style={{
                        height: 23,
                      }}>

                      </View>
                    <View
                      style={
                        styles.editText
                        
                      }>
                            <TextInput
                                style={{ width: 300,
                                height: 60,
                                backgroundColor: '#FFFFFF',
                                borderRadius: 5,
                                borderColor: 'gray',
                                fontSize: 18,
                                textAlign : "left",
                                flex : 1  ,                               
                                }}
                                placeholder="Item name"
                               />


                              
                    </View>

                    
              {/* <Button 
                  title ="Add new item"
                  color = "#00CCFF"

                  onPress={() => Alert.alert('Simple Button pressed')}
                /> */}

          <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')} activeOpacity={1.0} style={styles.button} >
         
          
          <Text style={styles.buttonText}>Add</Text>
          
          </TouchableOpacity> 

         
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   
   
  },
  item: {
    fontSize: 20,
    color: "#666666",
  },  
  title: {
    textAlign : "center",
    color: "#1D7281",
    fontSize: 30,
    paddingTop: 36,

    },
    subtitle: {
    textAlign : "center",
    color: "#999999",
    fontSize: 14,

    },

  button: {
    width: 300,
    height: 60,
    backgroundColor: '#1D7281',
    borderRadius: 5,
    marginTop: 10,
    paddingTop: 15
  },

  buttonText: {
    textAlign : "center",
    color: '#FFFFFF',
    paddingBottom: 5,
    fontSize: 20,
  },

  editText: {
    width: 300,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: "#7070703E",
    marginTop: 168,
  },

 
  
})

