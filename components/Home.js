import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Button from './Button'
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
        const { state } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Text style={styles.headText}>Decks:</Text>
                </View>


                {this.state.ready === false
                    ? <Text>You have not yet added any decks</Text>
                    :
                    <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer}>


                        {Object.keys(state).length !== 0
                            ? Object.keys(state).map((deck, index) => (
                                <DeckPreview navigation={this.props.navigation} deck={deck} key={index} />

                            ))
                            : null}
                    </ScrollView>

                }


            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20
    }

});

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(Home)