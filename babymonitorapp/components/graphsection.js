import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, RefreshControl, ScrollView } from 'react-native';
import TempGraph from './tempgraph';
import Movement from './movegraph';
import HumidityGraph from './humiditygraph';
import Cries from './criesgraph';

const Graphs = () => {
  return (
    <ScrollView 
    style={{width:'100%'}} 
    horizontal={true}
    showsHorizontalScrollIndicator={false}>
      <View style={{backgroundColor:'tomato', borderRadius:20, alignItems:'flex-start', marginHorizontal:10, paddingRight:20}}>
        <Text style={{marginHorizontal:20, fontWeight:'bold', color:'white', marginLeft:50}}>Movement</Text>
        <Movement/>
      </View>
      <View style={{backgroundColor:'tomato', borderRadius:20, alignItems:'flex-start', marginHorizontal:10, paddingRight:20}}>
        <Text style={{marginHorizontal:20, fontWeight:'bold', color:'white', marginLeft:50}}>Cries</Text>
        <Cries />
      </View>
      <View style={{backgroundColor:'dodgerblue', borderRadius:20, alignItems:'center', marginHorizontal:20}}>
      <Text style={{marginHorizontal:20, fontWeight:'bold', color:'white'}}>Temperature</Text>
        <TempGraph></TempGraph>
      </View>
      <View style={{backgroundColor:'gold', borderRadius:20, alignItems:'center', marginHorizontal:20}}>
      <Text style={{marginHorizontal:20, fontWeight:'bold', color:'white'}}>Humidity</Text>
        <HumidityGraph></HumidityGraph>
      </View>




    </ScrollView>
  );
}

export default Graphs;
