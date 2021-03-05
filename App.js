import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
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
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux'
import reducer from './reducers'
import { handleInitialData } from './utils/api'


function MobileStatusBar() {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={blue} barStyle='light-content' />
    </View>
  )
}

const Tab = createBottomTabNavigator();



const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='DeckMain' component={DeckMain} />
      <Stack.Screen name='AnswerView' options={{ headerShown: false }} component={AnswerView} />
      <Stack.Screen name='AddQuestionView' component={AddQuestionView} />
      <Stack.Screen name='ScoreView' options={{ headerShown: false }} component={ScoreView} />
    </Stack.Navigator>
  )
}

// function DeckStack() {
//   return (
//     <Deck.Navigator>
//       <Deck.Screen name='DeckMain' component={DeckMain} />
//       <Deck.Screen name='Answer' component={AnswerView} />
//       <Deck.Screen name='Add' component={AddQuestionView} />
//     </Deck.Navigator>
//   )
// }



export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)} >
        <React.Fragment>
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
                  else if (route.name === 'Add Deck') {
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
              <Tab.Screen name='Home' component={HomeStack} />
              <Tab.Screen name='Add Deck' component={AddDeckView} />
            </Tab.Navigator>
          </NavigationContainer>
        </React.Fragment>
      </Provider>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

connect()(App)