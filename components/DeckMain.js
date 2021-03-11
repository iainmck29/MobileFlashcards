import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { red } from '../utils/colors'
import Button from './Button'
import { deleteDeck } from '../actions/index'



class DeckMain extends React.Component {

    add = () => {
        const { deck } = this.props.route.params
        this.props.navigation.navigate('AddQuestionView', { deck })
    }

    answer = () => {
        const { deck } = this.props.route.params
        this.props.navigation.navigate('AnswerView', { deck })
    }

    deleteDeck = () => {
        const { deck } = this.props.route.params
        this.props.dispatch(deleteDeck(deck))

        alert('Deck deleted successfully!')

        this.props.navigation.navigate('Home')
    }


    render() {
        const { deck } = this.props.route.params
        return (
            <View>
                <Text style={styles.heading}>{deck}</Text>
                <Button onPress={this.answer}>Answer questions</Button>
                <Button onPress={this.add}>Add questions</Button>
                <TouchableOpacity onPress={this.deleteDeck}>
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


export default connect()(DeckMain)