import React from 'react'
import { KeyboardAvoidingView, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'
import { black, gray } from '../utils/colors'
import Button from './Button'
import { submitEntry } from '../utils/api'

class AddQuestionView extends React.Component {
    state = {
        questionInput: '',
        answerInput: '',
    }

    handleQuestionInput = (text) => {
        this.setState({ questionInput: text })
    }

    handleAnswerInput = (text) => {
        this.setState({ answerInput: text })
    }

    submit = () => {
        const { questionInput, answerInput } = this.state
        const { deck } = this.props.route.params
        const data = {
            question: questionInput,
            answer: answerInput,
        }


        if (questionInput === '') {
            return alert('Your question input field is empty')
        } else if (answerInput === '') {
            return alert('Your answer input field is empty')
        }
        //Dispatch data to store
        this.props.dispatch(addQuestion(data, deck))

        //Update database
        submitEntry(data, deck)

        alert('Question added successfully!')

        this.props.navigation.navigate('Home')


    }

    render() {
        return (
            <KeyboardAvoidingView behaviour='height' style={styles.container}>
                <Text style={styles.header}>Add Question to Deck:</Text>
                <TextInput multiline={true} value={this.state.questionInput} onChangeText={this.handleQuestionInput} textAlignVertical='top' placeholder='Input your question' placeholderTextColor={gray} style={styles.input} />
                <TextInput multiline={true} value={this.state.answerInput} onChangeText={this.handleAnswerInput} textAlignVertical='top' placeholder='Input your answer' TextColor={gray} style={styles.input} />
                <Button onPress={this.submit}>Submit</Button>
            </KeyboardAvoidingView>
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
        height: 100,
        borderColor: black,
        borderWidth: 1,
        borderRadius: 2,
        width: 250,
        marginBottom: 10,
        padding: 10
    }
})

export default connect()(AddQuestionView)