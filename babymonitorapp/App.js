import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch, SafeAreaView, RefreshControl, setInterval, ScrollView } from 'react-native';
import Header from './components/header';
import LastMeasurement from './components/last_measurement';
import Graphs from './components/graphsection';


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
      <Header/>
      <LastMeasurement />
      <View style={styles.container}>
      <Text style={{fontSize:36, fontWeight:'bold', alignSelf:'flex-start', padding:20}}>Last 30 Minutes</Text>
      <Graphs />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
