import AsyncStorage from '@react-native-async-storage/async-storage'
import { DECK_STORAGE_KEY } from './helpers'

export function addDeckToStorage(formattedDeck) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(formattedDeck))
}

export function handleInitialData() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
}