import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
    name: 'menu',
    initialState: [
        {
          label: 'Mostra',
          href: '/mostra'
        }, {
          label: 'Filmes',
          href: '/filmes'
        }, {
          label: 'Lives',
          href: '/lives'
        }, {
          label: 'Premios',
          href: '/premios'
        }
    ]
})

export const menu = (state) => state.menu

export default menuSlice.reducer;