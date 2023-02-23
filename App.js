import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const Drawer = createDrawerNavigator();

const img1 = require('./assets/art.png')
const img2 = require('./assets/willis.png')
const img3 = require('./assets/pier.png')
const img4 = require('./assets/water.png')
const img5 = require('./assets/mile.png')


function ArtInstitute() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img1}></Image>
    </View>
  );
}

function MagnificentMile() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img5}></Image>
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img3}></Image>
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img4}></Image>
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img2}></Image>
    </View>
  );
}


export default function App() {
  return (
   <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name = "Art Institute Of Chicago" component={ArtInstitute}
      options={{title: 'Art Institute Of Chicago',
      headerStyle: {
        backgroundColor: '#FFFFFF'
      },}}/>
      <Drawer.Screen name = "Magnificent Mile" component={MagnificentMile}
      options={{title: 'Magnificent Mile',
      headerStyle: {
        backgroundColor: '#FFFFFF'
      },}}/>
      <Drawer.Screen name = "Navy Pier" component={NavyPier}
      options={{title: 'Art Institute Of Chicago',
      headerStyle: {
        backgroundColor: '#FFFFFF'
      },}}/>
      <Drawer.Screen name = "Water Tower" component={WaterTower}
      options={{title: 'Water Tower',
      headerStyle: {
        backgroundColor: '#FFFFFF'
      },}}/>
      <Drawer.Screen name = "Willis Tower" component={WillisTower}
      options={{title: 'Willis Tower',
      headerStyle: {
        backgroundColor: '#FFFFFF'
      },}}/>
    </Drawer.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 480,
  }
});
