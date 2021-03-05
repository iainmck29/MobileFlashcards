import AsyncStorage from '@react-native-async-storage/async-storage'
import { DECK_STORAGE_KEY } from './helpers'

export function addDeckToStorage(formattedDeck) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(formattedDeck))
        .catch(() => {
            alert('merge not working')
        })
}

export function handleInitialData() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .catch(() => {
            alert('get not working')
        })
}