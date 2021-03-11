import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import { gray, black, white } from '../utils/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'

class DeckPreview extends React.Component {
    // const questionLength = questions.length

    viewDeck = () => {
        const { deck } = this.props
        this.props.navigation.navigate('DeckMain', { deck: deck })
    }

    render() {
        const { deck, state } = this.props
        // const deckName = Object.keys(deck)
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>{state[deck].title}</Text>
                <Text style={styles.subheading}>Questions in deck: {state[deck].questions.length}</Text>
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
        height: 150,
        width: 300,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: black,
        marginBottom: 20,
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

function mapStateToProps(state, props) {
    return {
        state,
        props
    }
}

export default connect(mapStateToProps)(DeckPreview)