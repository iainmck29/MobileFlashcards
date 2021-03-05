import AsyncStorage from '@react-native-async-storage/async-storage'
import { DECK_STORAGE_KEY } from './helpers'

export function addDeckToStorage({ deck, formattedDeck }) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [deck]: formattedDeck
    }
    ))
}

export function handleInitialData() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
}