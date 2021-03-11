import React from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import Animated from 'react-native-reanimated'
import { connect } from 'react-redux'
import { blue } from '../utils/colors'


class Question extends React.Component {
    state = {
        bounceValue: new Animated.Value(1)
    }

    animation = () => {
        const { bounceValue } = this.state
        this.props.answer()
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.1, useNativeDriver: true }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4, useNativeDriver: true })
        ]).start()
    }

    render() {
        const { question, answer } = this.props.question
        const { bounceValue } = this.state
        return (
            <View>
                <View style={styles.textBox}>
                    <Text style={styles.questionText}>{question}</Text>
                </View>
                {this.props.showAnswer === false
                    ? <TouchableOpacity onPress={this.animation}>
                        <Text style={styles.toggleAnswer}>Show answer?</Text>
                    </TouchableOpacity>

                    :
                    <View style={styles.textBox}>
                        <Animated.Text style={[styles.answerText, { transform: [{ scale: bounceValue }] }]}>{answer}</Animated.Text>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    },
    toggleAnswer: {
        textAlign: 'center',
        fontSize: 16,
        color: blue,
        paddingBottom: 20
    }
})



export default connect()(Question)