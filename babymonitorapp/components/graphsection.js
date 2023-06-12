import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, RefreshControl, ScrollView } from 'react-native';
import TempGraph from './tempgraph';
import Movement from './movegraph';
import HumidityGraph from './humiditygraph';
import Cries from './criesgraph';

const Graphs = (props) => {
  const [data, setData] = useState([]);

  function getTime(unixTimeStamp) {
    return new Date(unixTimeStamp).toLocaleTimeString("nl-NL", {
      hour: '2-digit',
      minute:'2-digit'
    });
  }

  return props.loading ? ( 
    <View style={{width:'90%', height:220, borderRadius:20, backgroundColor:'tomato', alignItems:'center', justifyContent:'center'}}>
      <ActivityIndicator
        style={{width: 50, height: 50, alignSelf:'center'}}
        size="large"
        color="#fff"
      />    
    </View>
  ) : (
    <ScrollView 
      style={{width:'100%'}} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{backgroundColor:'tomato', borderRadius:20, alignItems:'flex-start', marginHorizontal:10, paddingRight:20}}>
        <Text style={{marginHorizontal:20, fontWeight:'bold', color:'white', marginLeft:50}}>Movement</Text>
        <Cries data={props.data} loading={props.loading}/>
      </View>
      <View style={{backgroundColor:'#5FAD56', borderRadius:20, alignItems:'flex-start', marginHorizontal:10, paddingRight:20}}>
        <Text style={{marginHorizontal:20, fontWeight:'bold', color:'white', marginLeft:50}}>Cries</Text>
        <Movement data={props.data} loading={props.loading}/>
      </View>
      <View style={{backgroundColor:'dodgerblue', borderRadius:20, alignItems:'center', marginHorizontal:20}}>
        <Text style={{marginHorizontal:20, fontWeight:'bold', color:'white'}}>Temperature</Text>
        <TempGraph data={props.data} loading={props.loading}/>
      </View>
      <View style={{backgroundColor:'gold', borderRadius:20, alignItems:'center', marginHorizontal:20}}>
        <Text style={{marginHorizontal:20, fontWeight:'bold', color:'white'}}>Humidity</Text>
        <HumidityGraph data={props.data} loading={props.loading}/>
      </View>
    </ScrollView>
  );
}

export default Graphs;