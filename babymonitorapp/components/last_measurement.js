import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, RefreshControl, ScrollView } from 'react-native';

const LastMeasurement = () => {
  const [loading, setLoading] = useState(true)
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      fetch('https://iom7vetorqgo7rg77bo5o2mmee0vcpgy.lambda-url.eu-central-1.on.aws/last-measurements/test_baby')
        .then((response) => response.json())
        .then((responseJson) => {
        setLatest(responseJson);
        setLoading(false)
        })
        .catch((error) => {
        console.error(error);
        });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);



  return loading ? (
    //if we're loading
      <View style={{alignItems: 'center', justifyContent:'center'}}>
      <View style={{width:'90%', borderRadius:20 ,backgroundColor:'tomato', padding:10, margin:10}} >
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Doetes Behaviour</Text>
      <ActivityIndicator
                style={{width: 50, height: 50, alignSelf:'center'}}
                size="large"
                color="#fff"
            />    
      </View>
    <View style={{width:'90%', borderRadius:20 ,backgroundColor:'dodgerblue', padding:10, margin:10}} >
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Room Temperature</Text>
      <ActivityIndicator
                style={{width: 50, height: 50, alignSelf:'center'}}
                size="large"
                color="#fff"
            />    
    </View>

    <View style={{width:'90%', borderRadius:20 ,backgroundColor:'gold', padding:10, margin:10}} >
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Room Humidity</Text>
      <ActivityIndicator
                style={{width: 50, height: 50, alignSelf:'center'}}
                size="large"
                color="#fff"
            />    
      </View>
    </View>
  ) :(
    <View style={{alignItems: 'center', justifyContent:'center'}}>
      <View style={{width:'90%', borderRadius:20 ,backgroundColor:'tomato', padding:10, margin:10}} >
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Doetes Behaviour</Text>
      <Text style={{color:'white'}}>We'll send you a textmessage if we detect movement or a cry.</Text>
      {latest.measurements[0].movementDetected &&
        <Text style={{color:'white', fontSize:24, fontWeight:"bold", alignSelf:'flex-start', margin:10}}>We detected a movement</Text>
		  }
      {latest.measurements[0].cryDetected &&
        <Text style={{color:'white', fontSize:24, fontWeight:"bold", alignSelf:'flex-start', margin:10}}>Doete seems to be crying</Text>
		  }
      {!latest.measurements[0].movementDetected &&
        <Text style={{color:'white', fontSize:24, fontWeight:"bold", alignSelf:'flex-start', margin:10}}>No movement detected</Text>
		  }
    </View>
    <View style={{width:'90%', borderRadius:20 ,backgroundColor:'dodgerblue', padding:10, margin:10}} >
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Room Temperature</Text>
      <Text>
      <Text style={{color:'white'}}>The ideal temperature for your baby is between 16 and 20 °C. </Text>
        {latest.measurements[0].temperature > 22 &&
                <Text style={{color:'white'}}>Consider cooling the room as it is too hot.</Text>
        }
        {latest.measurements[0].temperature < 15 &&
                <Text style={{color:'white', flexWrap:'wrap'}}>Consider warming up the room.</Text>
        }
      </Text>

      <Text style={{color:'white', fontSize:40, fontWeight:"bold", alignSelf:'center', margin:10}}> {latest.measurements[0].temperature}°C</Text>
    </View>

    <View style={{width:'90%', borderRadius:20 ,backgroundColor:'gold', padding:10, margin:10}} >
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Room Humidity</Text>
      <Text>
      <Text style={{color:'white'}}>The ideal humidity for your baby is between 40 and 60%. </Text>
        {latest.measurements[0].humidity > 63 &&
                <Text style={{color:'white'}}>Try ventilating the room to or open a window to improve air quality.</Text>
        }
        {latest.measurements[0].humidity < 37 &&
                <Text style={{color:'white', flexWrap:'wrap'}}>Place water near a heatsource to make the air less dry.</Text>
        }
      </Text>
      <Text style={{color:'white', fontSize:40, fontWeight:"bold", alignSelf:'center', margin:10}}> {latest.measurements[0].humidity}%</Text>
    </View>
    </View>
  );
}

export default LastMeasurement;