import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addDeckToStorage } from '../utils/api'
import { black, gray } from '../utils/colors'
import { formatDeck } from '../utils/helpers'
import Button from './Button'
import { addDeck } from '../actions/index'

class AddDeckView extends React.Component {
    state = {
        value: ''
    }

    onChange(text) {
        this.setState(() => ({
            value: text
        }))
    }

    submit = () => {
        //handle submission
        const deck = this.state.value

        //Format deck
        const formattedDeck = {
            [deck]: {
                questions: [],
                title: deck,
            },
        }

        console.log(formattedDeck)

        //Update redux
        this.props.dispatch(addDeck(formattedDeck))

        //Reset the state
        this.setState(() => ({
            value: ''
        }))

        //Save to database
        // addDeckToStorage({ deck, formattedDeck })

        //Navigate to home
        this.props.navigation.navigate('Home')


    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Add New Deck:</Text>
                <TextInput placeholder='Input your deck name'
                    value={this.state.value}
                    onChangeText={text => this.onChange(text)}
                    placeholderTextColor={gray}
                    style={styles.input} />
                <Button onPress={this.submit}>Submit</Button>
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

export default connect()(AddDeckView)