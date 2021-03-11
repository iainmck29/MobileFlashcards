import AsyncStorage from '@react-native-async-storage/async-storage'
import dummyData, { DECK_STORAGE_KEY } from './helpers'

export function addDeckToStorage(formattedDeck) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(formattedDeck))
        .catch(() => {
            alert('Deck merged unsuccessfully')
        })
}

export async function handleInitialData() {
    try {
        const data = await AsyncStorage.getItem(DECK_STORAGE_KEY);
        if (data === null) {
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData()))
        }
        return data === null ? dummyData() : JSON.parse(data)
    }

    catch (err) {
        console.log(err)
    }
}

export function submitEntry(data, deck) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const returnedData = JSON.parse(results)
            const newData = returnedData[deck].questions.concat(data)
            return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
                [deck]: {
                    questions: newData
                }
            }))
        })
        .catch(() => {
            alert('problem with adding question')
        })
}