import { formatDeck } from '../utils/helpers'

export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'


export function addDeck(deck) {
    type: ADD_DECK,
        deck
}

export function receiveDecks(decks) {
    type: RECEIVE_DECKS,
        decks
}