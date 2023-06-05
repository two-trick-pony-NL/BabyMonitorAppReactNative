import React, { useState, useEffect } from 'react';
import { Text, Image, View, Switch, ActivityIndicator } from 'react-native';
import moment from 'moment';


const Header = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true)


  function getRelativeTime(unixTimeStamp) {
    const currentTime = moment().unix();
    const differenceInSeconds = currentTime - unixTimeStamp;
    return `${differenceInSeconds} seconds ago`;
  }

    // Fetching the current user
    useEffect(() => {
        fetch('https://iom7vetorqgo7rg77bo5o2mmee0vcpgy.lambda-url.eu-central-1.on.aws/list-user/test_baby')
            .then((response) => response.json())
            .then((responseJson) => {
            setUser(responseJson);
            setLoading(false);
            console.log(user)
            })
            .catch((error) => {
            console.error(error);
            });
        }, []);


  const handleToggle = () => {
    setIsEnabled(previousState => !previousState);

    // Prepare the data for the PUT request with the data from the user
    const data = {
      shouldNotifyClient: !isEnabled,
      lastUpdate: user["user"][0]["lastUpdate"],
      phoneNumber: user["user"][0]["phoneNumber"],
      email: user["user"][0]["email"],
      userId: user["user"][0]["userId"],
      nameOfChild: 'Doete',
    };

    // Send the PUT request
    fetch('https://iom7vetorqgo7rg77bo5o2mmee0vcpgy.lambda-url.eu-central-1.on.aws/create-user', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Toggled receive messages: ", !isEnabled );
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };
  

  return loading ? ( 
    <View style={{height: '100%', justifyContent:'center'}}>
    <ActivityIndicator
              style={{width: 50, height: 50, alignSelf:'center'}}
              size="large"
              color="tomato"
          />    
    </View>
  ):(
    <View style={{flexDirection:'row', justifyContent: 'space-between', padding:20}}>
        <View>
            <Text style={{fontSize:36, fontWeight:'bold'}}>Doete</Text>
            <Text>Updated {!props.loading && getRelativeTime(props.context.measurements[0]["lastUpdate"])}</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{alignItems:'center', margin:10}}>
        <Switch
        trackColor={{false: '#767577', true: 'green'}}
        thumbColor={isEnabled ? 'lightgrey' : 'lightgrey'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleToggle}
        value={isEnabled}
      />
      <Text>Alerts</Text>
      </View>
 
      </View>
    </View>
  );
}

export default Header;