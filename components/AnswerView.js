import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import Button from './Button'
import Question from './Question'
import { blue } from '../utils/colors'

class AnswerView extends React.Component {
    state = {
        count: 0,
        score: 0,
        showAnswer: false
    }

    componentDidUpdate() {
        const { count, score } = this.state
        const { deck, state } = this.props

        const questionCount = state[deck]["questions"]

        if (count === questionCount.length) {
            this.props.navigation.navigate('ScoreView', { score, deck })
            this.setState(() => ({
                count: 0,
                score: 0,
            }))

        }

    }

    counter = (e) => {

        if (e === "correct") {
            this.setState((prevState) => ({
                score: prevState.score + 1,
            }))
        }


        this.setState((prevState) => ({
            count: prevState.count + 1,
            showAnswer: false
        }))

    }

    toStart = () => {
        const { deck } = this.props
        this.props.navigation.navigate('DeckMain', { deck })
    }

    answer = () => {
        this.setState({ showAnswer: true })
    }



    render() {
        const { count } = this.state
        const { state, deck } = this.props
        const questionCount = state[deck]["questions"]


        if (count === questionCount.length) {
            return (
                null
            )
        }


        return (
            <View style={styles.container}>
                {count !== questionCount.length ?
                    <Question question={state[deck]["questions"][count]} answer={this.answer} showAnswer={this.state.showAnswer} />
                    : null}
                <Button name="correct" onPress={() => this.counter("correct")}>Correct</Button>
                <Button name="incorrect" onPress={() => this.counter("incorrect")}>Incorrect</Button>
                <TouchableOpacity onPress={this.toStart} style={{ marginTop: 50 }}>
                    <Text style={{ color: blue }}>Go back to start..</Text>
                </TouchableOpacity>
                <View>
                    <Text>Questions remaining: {questionCount.length - count}</Text>
                </View>
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



})

function mapStateToProps(state, { route }) {
    const { deck } = route.params
    return {
        state,
        deck
    }
}

export default connect(mapStateToProps)(AnswerView)