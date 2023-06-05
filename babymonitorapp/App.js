import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from 'react-native';
import Header from './components/header';
import LastMeasurement from './components/last_measurement';
import Graphs from './components/graphsection';


export default function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  useEffect(() => {
    const fetchData = () => {
      fetch('https://iom7vetorqgo7rg77bo5o2mmee0vcpgy.lambda-url.eu-central-1.on.aws/list-measurements/test_baby')
        .then((response) => response.json())
        .then((responseJson) => {
          setData(responseJson);
          setLoading(false);
          console.log("Fetched new data");
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    fetchData(); // Immediately fetch data
  
    const interval = setInterval(fetchData, 20000); // Fetch data every few seconds
  
    return () => {
      clearInterval(interval);
    };
  }, [refreshing]); // Add refreshing as a dependency

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <Header context={data} loading={loading}/>
      <LastMeasurement data={data} loading={loading}/>
      <View style={styles.container}>
      <Text style={{fontSize:36, fontWeight:'bold', alignSelf:'flex-start', padding:20}}>History</Text>
      <Graphs data={data} loading={loading}/>
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
