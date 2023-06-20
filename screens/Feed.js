import React, { Component } from 'react';
import { Text, View, SafeAreaView,Platform,StatusBar,Image } from 'react-native';

let post = require("./temp_post.json")

export default class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style = {styles.appTitle}>
          <View style = {styles.appIcon}>
            <Image
              source = {require("../assets/logo.png")}
              style = {styles.iconImage}
            />
          </View>
          <View>
            <Text style = {styles.appTextTitle}>
              Spectagram
            </Text>
          </View>
        </View>
        <View style = {styles.cardContainer}>
          <FlatList
            keyExtractor = {this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : CSSVariableReferenceValue(35)
  },
  appTitle: {
    flex:0.07,
    flexDirection:"row"
  },
  appIcon: {
    flex:0.2,
    justifyContent:"center",
    alignItems:"center"
  },
  iconImage:{
    width: "100%",
    height: "100%",
    resizeMode:"contain"
  },
  appTitleTextContainer:{
    flex:0.8,
    justifyContent:"center"
  },
  appTitleText:{
    color:"white",
    fontSize: RFValue(28)
  },
  cardContainer: {
    flex:0.85
  }

});
