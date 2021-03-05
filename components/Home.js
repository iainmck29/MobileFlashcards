import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import dummyData from '../utils/helpers'
import DeckPreview from './DeckPreview'
import { receiveDecks } from '../actions/index'
import { handleInitialData } from '../utils/api'
import { connect } from 'react-redux'



class Home extends React.Component {
    state = {
        ready: false
    }

    componentDidMount() {
        const { dispatch } = this.props
        handleInitialData()
            .then((decks) => dispatch(receiveDecks(decks)))
            .then(({ decks }) => {
                if (decks) {
                    this.setState(() => ({
                        ready: true
                    }))
                }
            })
    }

    render() {
        const { decks } = this.props
        console.log(decks)
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Text style={styles.headText}>Decks:</Text>
                </View>
                {this.state.ready === false
                    ? <Text>You have not yet added any decks</Text>
                    :
                    <View style={styles.deckList}>
                        <DeckPreview navigation={this.props.navigation} />

                        {/* {Object.keys(decks).length() !== 0
                        ? Object.keys(decks).map((deck) => (
                            <View key={deck.title}>
                                <DeckPreview navigation={this.props.navigation} deck={deck} />

                            </View>
                        ))
                        : null} */}
                    </View>

                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    headerView: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headText: {
        fontSize: 36

    },
    deckList: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

});

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Home)