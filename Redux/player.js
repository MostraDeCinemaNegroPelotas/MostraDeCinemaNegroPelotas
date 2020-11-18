import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        open: false,
        movieUrl: '', 
    },
    reducers: { 
        triggerPlayer: (state, action = { payload : '' }) => { 
            console.log(action)
            state.open = !state.open 
            if(!!action.payload) state.movieUrl = action.payload.split('/')[3]
        }
    }
})

export const getPlayerData = (state) => state.player

export const { triggerPlayer } = playerSlice.actions

export default playerSlice.reducer;