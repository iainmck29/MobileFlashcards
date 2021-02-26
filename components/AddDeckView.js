import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { black, gray } from '../utils/colors'
import Button from './Button'

export default class AddDeckView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Add New Deck:</Text>
                <TextInput placeholder='Input your deck name' placeholderTextColor={gray} style={styles.input} />
                <Button>Submit</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header: {
        fontSize: 36,
        marginTop: 200,
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: black,
        borderWidth: 1,
        borderRadius: 2,
        width: 250,
        marginBottom: 30,
        padding: 10
    }
})