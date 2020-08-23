import React from 'react';
import { StyleSheet, Text, Button, View, Image, TouchableHighlight, SafeAreaView, StatusBar, Platform, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  // console.log(Dimensions.get('screen')) // window size is a little smaller than screen size // runs one time only (initially), doesnt give updated dimensions screen width etc
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  // const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen/> */}
      <ViewImageScreen/>
      {/* <Text numberOfLines={1}>
        React Native
      </Text> */}

      {/* <Button title="Click Me" onPress={() => console.log('Button pressed')} /> */}

      {/* <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 150,
          height: landscape ? '100%' : '30%'
        }}
      /> */}

      {/* <TouchableHighlight onPress={() => console.log('Image tapped')}>
        <Image
          source={{
            width: 300,
            height: 600,
            uri: 'https://picsum.photos/300/600'
          }}
        />
      </TouchableHighlight> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
