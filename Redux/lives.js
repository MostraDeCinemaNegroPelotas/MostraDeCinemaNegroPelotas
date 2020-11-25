import { createSlice } from '@reduxjs/toolkit'

const livesSlice = createSlice({
  name: 'lives',
  initialState: [
    {
      nome: 'Orí e Ohun: Júri, Crítica e Curadoria através de voz diásporicas',
      feat: 'com Bernardo Oliveira',
      data: '19/11/2020 das 17h as 19h',
      link: 'https://youtu.be/Iegv1pnnYf4',
      imgSrc: '/thumbnail_dialogos_critica.png'
    },
    {
      nome: 'Lançamento do Livro: Mulheres Negras da Tela do Cinema',
      feat: 'com Bárbara Maia Cerqueira Cazé e Mara Pereira',
      data: '22/11/2020 das 18h as 20h',
      link: 'https://youtu.be/wr5qs3HtasU',
      imgSrc: '/thumbnail_dialogos_mulheres.png'
    },
    {
      nome: 'Academia como um espaço de afirmação do Cinema Negro',
      feat: 'com Janaína Oliveira e Roberto Borges',
      data: '27/11/2020 das 18h as 20h',
      link: 'https://youtu.be/b3O-02UoU4A',
      imgSrc: '/thumbnail_dialogos_academia.png'
    },
    {
      nome: 'Curadoria',
      feat: 'com Jackeline Nunes, Lucas Honoratio, Manu Zilvetti e Mayummi Aragão',
      data: '29/11/2020  das 18h as 20h',
      link: 'https://youtu.be/b3O-02UoU4A',
      imgSrc: '/thumbnail_dialogos_curadoria.png'
    },
  ]
})

export const getLives = (state) => state.lives

export default livesSlice.reducer
