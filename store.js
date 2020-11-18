import { configureStore } from '@reduxjs/toolkit'

import catalogos from 'Redux/catalogos'
import menu from 'Redux/menu';
import player from 'Redux/player';

export default configureStore({
  reducer: {
    catalogos,
    menu,
    player
  },
  devTools: true
})
