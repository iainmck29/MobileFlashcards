import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from './Button'

export default class AnswerView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textBox}>
                    <Text style={styles.questionText}>This is the question</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.answerText}>This is the answer</Text>
                </View>
                <Button>Correct</Button>
                <Button>Incorrect</Button>
                <TouchableOpacity style={{ marginTop: 50 }}>
                    <Text>Go back to start..</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox: {
        marginBottom: 30
    },
    questionText: {
        fontSize: 36,
        textAlign: 'center',
    },
    answerText: {
        fontSize: 28,
        textAlign: 'center'
    }


})