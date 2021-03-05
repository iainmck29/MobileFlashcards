import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { red } from '../utils/colors'
import Button from './Button'



export default class DeckMain extends React.Component {

    add = () => {
        this.props.navigation.navigate('AddQuestionView')
    }

    answer = () => {
        this.props.navigation.navigate('AnswerView')
    }


    render() {
        return (
            <View>
                <Text style={styles.heading}>HEADING TEXT</Text>
                <Button onPress={this.answer}>Answer questions</Button>
                <Button onPress={this.add}>Add questions</Button>
                <TouchableOpacity>
                    <Text style={styles.textButton}>Delete Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 20
    },
    textButton: {
        color: red,
        fontSize: 18,
        textAlign: 'center',

    }
})