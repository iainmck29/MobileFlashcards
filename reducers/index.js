import { ADD_DECK, RECEIVE_DECKS, ADD_QUESTION, DELETE_DECK } from '../actions/index'

export default function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }

        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }

        case ADD_QUESTION:
            return {
                ...state,
                [action.deck]: {
                    ...state[action.deck],
                    questions: state[action.deck].questions.concat(action.data)
                }
            }

        case DELETE_DECK:
            let decks = { ...state }
            delete decks[action.id]
            return decks


        default:
            return state
    }
}