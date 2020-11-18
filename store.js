import { configureStore } from '@reduxjs/toolkit'

import catalogos from 'Redux/catalogos'
import menu from 'Redux/menu';

export default configureStore({
  reducer: {
    catalogos,
    menu
  },
  devTools: true
})
