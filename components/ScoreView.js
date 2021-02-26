import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from './Button'

export default class ScoreView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textBox}>
                    <Text style={styles.questionText}>You scored:</Text>
                    <Text style={styles.questionText}>4/5</Text>
                </View>
                <Button>Restart</Button>
                <Button>Go to Deck</Button>

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