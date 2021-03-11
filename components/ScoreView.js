import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import Button from './Button'

class ScoreView extends React.Component {

    restart = () => {
        this.props.navigation.navigate('AnswerView')
    }

    toDeck = () => {
        const { deck } = this.props.route.params
        this.props.navigation.navigate('DeckMain', { deck })
    }

    render() {
        const { score, numQuestions } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.textBox}>
                    <Text style={styles.questionText}>You scored:</Text>
                    <Text style={styles.questionText}>{score}/{numQuestions}</Text>
                </View>
                <Button onPress={this.restart}>Restart</Button>
                <Button onPress={this.toDeck}>Go to Deck</Button>

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

function mapStateToProps(state, { route }) {
    const { deck, score } = route.params
    const numQuestions = state[deck]["questions"].length

    return {
        deck,
        score,
        numQuestions
    }
}

export default connect(mapStateToProps)(ScoreView)