import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import { gray, black, white } from '../utils/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class DeckPreview extends React.Component {
    // const questionLength = questions.length

    viewDeck = (id) => {
        this.props.navigation.navigate('DeckMain')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Title</Text>
                <Text style={styles.subheading}>Questions in deck: 8</Text>
                <Button onPress={this.viewDeck}>View Deck</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: gray,
        maxHeight: 150,
        width: 300,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: black
    },
    heading: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 10,
        color: white
    },
    subheading: {
        fontSize: 18,
        textAlign: 'center',
        color: white
    }
})