import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import moment from 'moment';


const LastMeasurement = (props) => {

  return props.loading ? (
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
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Sounds</Text>
      {props.data.measurements[0].cryDetected &&
      <Text style={{color:'white'}}>A cry every so often is completely normal. Maybe your baby is dreaming. If we detect movement and crying we'll send you a notification. Also check out the graph to see what happened the last couple of minutes. </Text>
      }
      {!props.data.measurements[0].cryDetected &&
      <Text style={{color:'white'}}>It looks like your baby is sleeping peacefully and does not cry. Check the graph to see what happened the last couple of minutes. If we detect a cry and movement we'll send you a notification </Text>
      }
      <Text style={{color:'white'}}></Text>
      {props.data.measurements[0].cryDetected &&
        <Text style={{color:'white', fontSize:24, fontWeight:"bold", alignSelf:'center', margin:10}}>Detected a cry</Text>
		  }
      {!props.data.measurements[0].cryDetected &&
        <Text style={{color:'white', fontSize:24, fontWeight:"bold", alignSelf:'center', margin:10}}>All is quiet</Text>
		  }
    </View>
    <View style={{width:'90%', borderRadius:20 ,backgroundColor:'#5FAD56', padding:10, margin:10}} >
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Movement</Text>
      {props.data.measurements[0].movementDetected &&
      <Text style={{color:'white'}}>A bit of movement is normal when a child sleeps. Check the graph to see what happened in the last few minutes. If the baby moves and cries at the same time we sent a notification. </Text>
      }
      {!props.data.measurements[0].movementDetected &&
      <Text style={{color:'white'}}>It looks like your baby is sleeping peacefully and did not move. Check the graph to see what happened the last couple of minutes. </Text>
      }

      <Text style={{color:'white'}}></Text>
      {props.data.measurements[0].movementDetected &&
        <Text style={{color:'white', fontSize:24, fontWeight:"bold", alignSelf:'center', margin:10}}>Doete moved</Text>
		  }
      {!props.data.measurements[0].movementDetected &&
        <Text style={{color:'white', fontSize:24, fontWeight:"bold", alignSelf:'center', margin:10}}>All is quiet</Text>
		  }
    </View>
    <View style={{width:'90%', borderRadius:20 ,backgroundColor:'dodgerblue', padding:10, margin:10}} >
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Room Temperature</Text>
      <Text>
      <Text style={{color:'white'}}>The ideal temperature for your baby is between 16 and 20 °C. </Text>
        {props.data.measurements[0].temperature > 22 &&
                <Text style={{color:'white'}}>Consider cooling the room as it is too hot.</Text>
        }
        {props.data.measurements[0].temperature < 15 &&
                <Text style={{color:'white', flexWrap:'wrap'}}>Consider warming up the room.</Text>
        }
      </Text>

      <Text style={{color:'white', fontSize:40, fontWeight:"bold", alignSelf:'center', margin:10}}> {props.data.measurements[0].temperature}°C</Text>
    </View>

    <View style={{width:'90%', borderRadius:20 ,backgroundColor:'gold', padding:10, margin:10}} >
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Room Humidity</Text>
      <Text>
      <Text style={{color:'white'}}>The ideal humidity for your baby is between 40 and 60%. </Text>
        {props.data.measurements[0].humidity > 63 &&
                <Text style={{color:'white'}}>Try ventilating the room to or open a window to improve air quality.</Text>
        }
        {props.data.measurements[0].humidity < 37 &&
                <Text style={{color:'white', flexWrap:'wrap'}}>Place water near a heatsource to make the air less dry.</Text>
        }
      </Text>
      <Text style={{color:'white', fontSize:40, fontWeight:"bold", alignSelf:'center', margin:10}}> {props.data.measurements[0].humidity}%</Text>
    </View>
    </View>
  );
}

export default LastMeasurement;