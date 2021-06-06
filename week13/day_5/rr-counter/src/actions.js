export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

export function actionIncrement() {
    return {
        type: INCREMENT
    }
}

export function actionDecrement() {
    return {
        type: DECREMENT
    }
}