import { createStore } from 'redux';
import { counter } from './reducers'

const initialState = {
    count: 0
}

export const store = createStore(counter, initialState)