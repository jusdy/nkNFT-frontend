import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
    realmPasses: [
        {
            id: 1,
            passName: 'Radio Active Pass',
            cost: '0.4',
            quantity: 0
        },
        {
            id: 3,
            passName: 'Mecha Pass',
            cost: '0.4',
            quantity: 0
        },
        {
            id: 4,
            passName: 'Digi Pass',
            cost: '0.4',
            quantity: 0
        },
        {
            id: 5,
            passName: 'Cosmic Pass',
            cost: '0.4',
            quantity: 0
        },
        {
            id: 2,
            passName: 'Quantum Pass',
            cost: '0.4',
            quantity: 0
        },
    ],
    cartLength: 0,
    cart: [],
    isLoading: false,
    error: null,
};

const slice = createSlice({
    name: 'passes',
    initialState,
    reducers: {
        increaseQuantity(state, action) {
            if (state.cartLength < 2) {
                state.realmPasses = state.realmPasses.map((pass) => {
                    if (pass.id === action.payload.id) {
                        return { ...pass, quantity: pass.quantity + 1 }
                    }
                    return pass
                })
                state.cartLength += 1
                console.log(state.realmPasses)
            }
        },

        decreaseQuantity(state, action) {
            if (state.cartLength > 0) {
                state.realmPasses = state.realmPasses.map((pass) => {
                    if (pass.id === action.payload.id) {
                        return { ...pass, quantity: pass.quantity - 1 }
                    }
                    return pass
                })
                state.cartLength -= 1

            }
        },
    },
});

// Reducer
export default slice.reducer;

// Actions
export const {
    increaseQuantity,
    decreaseQuantity,
} = slice.actions;

