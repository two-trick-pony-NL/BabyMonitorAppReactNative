import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 0) {
          clearInterval(timer);
          return 20; // Reset the countdown to 10
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <View>
      <Text>Checking in on Doete in {countdown} seconds</Text>
    </View>
  );
};

export default CountdownTimer;
