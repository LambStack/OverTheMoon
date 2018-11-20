/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



let colors = ['red','blue','green','black','orange','purple','pink'];



getRandomColor = ()=>{

  let indexOfColor = Math.floor(Math.random * colors.length);
  return colors[indexOfColor];
}

createTable = () => {
    let table = []
    
    // Outer loop to create rows
    for (let i = 0; i < 18; i++) {
      
      let children = []
      //Inner loop to create columns
      for (let j = 0; j < 11; j++) {
        let randomColor = getRandomColor();
        console.log(randomColor);
        children.push(<View key={`Col ${j + 1}${i}`} style={[styles.row, {backgroundColor:'red'}]}></View>)
      }
      //Create the parent and add the children
      table.push(<View key={`Col ${1}${i}b`} style={styles.column}>{children}</View>)
    }
    return table
  }

export default class App extends Component {

  constructor(props) {
  super(props);
    this.state = {
    selectedColor: 'blue',
  };
}

  render() {
    return (
      <View style={styles.container}>
        {createTable()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding:50
  },
  column: {
    flex:1,
    flexDirection:'row'
  },
  row : {
    flex:1
  }
});
