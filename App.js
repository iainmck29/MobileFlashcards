import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'react-native-unimodules';
import Home from './components/Home'
import { black, blue, white } from './utils/colors'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import DeckMain from './components/DeckMain'
import AnswerView from './components/AnswerView'
import ScoreView from './components/ScoreView'
import AddDeckView from './components/AddDeckView'
import AddQuestionView from './components/AddQuestionView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'


function MobileStatusBar() {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={blue} barStyle='light-content' />
    </View>
  )
}

const Tab = createBottomTabNavigator();

// function TabNav() {
//   return (
//     <Tab.Navigator initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused }) => {
//           let iconName;
//           let iconColor

//           if (route.name === 'Home') {
//             iconName = focused
//               ? 'home-sharp'
//               : 'home-outline'
//           }
//           else if (route.name === 'AddDeckView') {
//             iconName = focused
//               ? 'add-circle-sharp'
//               : 'add-circle-outline'
//           }

//           return <Ionicons name={iconName} size={24} color={white} />
//         }
//       })}
//       tabBarOptions={{
//         activeTintColor: white,
//         style: {
//           backgroundColor: blue,
//         }
//       }}>
//       <Tab.Screen name='Home' component={Home} />
//       <Tab.Screen name='AddDeckView' component={AddDeckView} />
//     </Tab.Navigator>
//   )
// }

const Stack = createStackNavigator()

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <MobileStatusBar />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
              let iconColor

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home-sharp'
                  : 'home-outline'
              }
              else if (route.name === 'AddDeckView') {
                iconName = focused
                  ? 'add-circle-sharp'
                  : 'add-circle-outline'
              }

              return <Ionicons name={iconName} size={24} color={white} />
            }
          })}
          tabBarOptions={{
            activeTintColor: white,
            style: {
              backgroundColor: blue,
            }
          }}>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='AddDeckView' component={AddDeckView} />
        </Tab.Navigator>
        {/* <Home /> */}
        {/* <DeckMain /> */}
        {/* <AnswerView /> */}
        {/* <ScoreView /> */}
        {/* <AddDeckView /> */}
      </NavigationContainer>
    </View>
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
