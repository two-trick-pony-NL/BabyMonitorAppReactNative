import React, { useState, useEffect } from 'react';
import { Text, Image, View, Switch } from 'react-native';

const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://iom7vetorqgo7rg77bo5o2mmee0vcpgy.lambda-url.eu-central-1.on.aws/list-user/test_baby')
            .then((response) => response.json())
            .then((responseJson) => {
            console.log('User data arrived');
            setUser(responseJson);
            console.log(user)
            })
            .catch((error) => {
            console.error(error);
            });
        }, []);


  const handleToggle = () => {
    setIsEnabled(previousState => !previousState);

    // Prepare the data for the PUT request
    const data = {
      shouldNotifyClient: !isEnabled,
      lastUpdate: 0,
      phoneNumber: '0610468353',
      email: 'peter@petervandoorn.com',
      userId: 'test_baby',
      nameOfChild: 'Doete'
    };

    // Send the PUT request
    fetch('https://iom7vetorqgo7rg77bo5o2mmee0vcpgy.lambda-url.eu-central-1.on.aws/create-user', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user["user"][0])
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };
  
  

  return (
    <View style={{flexDirection:'row', justifyContent: 'space-between', padding:20}}>
        <View>
            <Text style={{fontSize:36, fontWeight:'bold'}}>Doete</Text>
            <Text>Last update at 13:04 AM</Text>
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