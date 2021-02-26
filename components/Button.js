import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { blue, black, white } from '../utils/colors'


export default function Button({ onPress, children, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={[styles.buttonText, style]}>{children}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        padding: 5,
        color: white,
        fontSize: 18
    },
    button: {
        backgroundColor: blue,
        borderColor: black,
        borderWidth: 1,
        borderRadius: 3,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        marginHorizontal: 20
    }
})
