import { createStore } from 'redux';

console.log("starting banking app")

const defaultState = {
    checking: 100,
    savings: 100
};

const ACTION_DEPOSIT = 'deposit'
const ACTION_WITHDRAWAL = 'withdrawal'

function createDeposit(acct, amt) {
    return {
        type: ACTION_DEPOSIT,
        payload: {
            acct,
            amt
        }
    };
}

function createWithdrawal(acct,amt){
    return {
        type: ACTION_WITHDRAWAL,
        payload: {
            acct,
            amt
        }
    };
}

function accounts(state=defaultState, action) {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case ACTION_DEPOSIT:
            return {
                ...state,
                [action.payload.acct]: state[action.payload.acct] + action.payload.amt
            }
        case ACTION_WITHDRAWAL:
            return {
                [action.payload.acct]: state[action.payload.acct] - action.payload.amt
            }
    }
    return state;
}

const store = createStore(accounts);
store.subscribe(() => {
    console.log('=== state has updated ===')
    const state = store.getState();
    console.log(state)
})

window.store = store
window.createWithdrawal = createWithdrawal
window.createDeposit = createDeposit