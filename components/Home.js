import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import DummyData from '../utils/helpers'
import DeckPreview from './DeckPreview'


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Text style={styles.headText}>Decks:</Text>
                </View>
                <View style={styles.deckList}>
                    <DeckPreview navigation={this.props.navigation} />

                    {/* {Object.keys.map((data) => (
                        <View>

                        </View>
                    ))} */}
                </View>
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