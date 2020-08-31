import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Mon Journal</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.titleNote}>Titre de la note</Text>
        <Text style={styles.contentNote}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus, ex at interdum dictum, libero mauris f</Text>

        <Text style={styles.titleNote}>Titre 2</Text>
        <Text style={styles.contentNote}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus, ex at interdum dictum, libero mauris faucibus odio, id varius mi lorem ac odio. Fusce a placerat dolor, eget luctus orci. Quisque tristique ultricies sem...</Text>

        <Text style={styles.titleNote}>Titre 3</Text>
        <Text style={styles.contentNote}>Aucune note pour le 4 avril</Text>
      </View>
      <View style={styles.footer}>
        <Text>Ecrire une note</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height:'100%'
  },
  header:{
    height:'5%',
    backgroundColor:'#e0e0e0',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#000'
  },
  titleHeader:{
    fontSize:25,
  },
  content:{
    justifyContent:'flex-start',
    height: '90%',
  },
  footer:{
    height:'5%',
    backgroundColor:'#e0e0e0',
    alignItems:'center',
    justifyContent:'center',
    fontSize:20,
    borderWidth:1,
    borderColor:'#000'
  },
  titleNote:{
    marginLeft:50,
    marginTop:30,
    borderBottomWidth:1,
    borderColor:'#b8b7b7',
    marginRight:50,
    paddingBottom:5,
  },
  contentNote:{
    marginLeft:30,
    marginTop:10,
    paddingHorizontal: 20
  },
  block:{
    flexDirection:'row',
    backgroundColor:'#ff0',
  },
  tinyLogo:{
    zIndex:1,
  },
  avatar: {
    borderRadius:50,
    backgroundColor: 'grey',
    width: 50,
    height: 50
  },
});
