import { configureStore } from '@reduxjs/toolkit'

import catalogos from 'Redux/catalogos'
import menu from 'Redux/menu';
import player from 'Redux/player';
import lives from 'Redux/lives';

export default configureStore({
  reducer: {
    catalogos,
    menu,
    player,
    lives
  },
  devTools: true
})
