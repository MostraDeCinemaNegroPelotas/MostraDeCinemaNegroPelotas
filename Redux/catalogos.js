import { createSlice } from '@reduxjs/toolkit'


const catalogosSlice = createSlice({
  name: 'catalogos',
  initialState: [
    {
      programa: 1,
      nomedofilme: 'Dádiva ',
      direcao: 'Evelyn dos Santos',
      estado: 'São Paulo, SP',
      minutos: 6,
      link: 'https://youtu.be/mJygIYO7OjA',
    },
    {
      programa: 1,
      nomedofilme: 'O Homem Atrás da Janela',
      direcao: 'Naum Roberto Gomes',
      estado: 'Pelotas, RS',
      minutos: 8,
      link: 'https://youtu.be/8zckL3gFmpc',
    },   
    {
      programa: 2,
      nomedofilme: 'Meninos Rimam',
      direcao: 'Lucas Nunes',
      estado: 'São Carlos, SP',
      minutos: 20,
      link: 'https://youtu.be/XNCOx3t__gQ',
    },
    {
      programa: 2,
      nomedofilme: 'Caminhos da Noite',
      direcao: 'Douglas Oliveira',
      estado: 'Aracaju, SE',
      minutos: 19,
      link: 'https://youtu.be/D1kllrQwSWc',
    },
    {
      programa: 2,
      nomedofilme: 'Onde nascem os Deuses',
      direcao: 'Henrique DPK',
      estado: 'Salto, SP',
      minutos: 15,
      link: 'https://youtu.be/dxcPG5qHK3U',
    },
    {
      programa: 3,
      nomedofilme: 'Cinema Contemporâneo',
      direcao: 'Felipe André Silva',
      estado: 'Recife, PE',
      minutos: 5,
      link: 'https://youtu.be/vnI68VBRd4E',
    },
    {
      programa: 3, 
      nomedofilme: 'A noite se tornara ainda mais escura',
      direcao: 'Bianca Ellen, Lux Farr, Isa Vitório, Arara, Fran Xyk',
      estado:'Fortaleza, CE',
      minutos: 12 ,
      link: 'https://youtu.be/0SCbA1C7RlU',
    },
    {
      programa: 3,
      nomedofilme: 'Nó no Couro',
      direcao: 'Mariana Martins',
      estado: 'Juiz de Fora, MG',
      minutos: 14,
      link: 'https://youtu.be/OUqNo3MmphE',
    },
    {
      programa: 4,
      nomedofilme: 'Oríki',
      direcao: 'Pâmela Peregrino',
      estado: 'Porto Seguro, BA',
      minutos: 6,
      link: 'https://youtu.be/XUm131QQQ5Y',
    },
    {
      programa: 4,
      nomedofilme: 'Joãosinho da Goméa - O Rei do Candomblé',
      direcao: 'Janaina Oliveira ReFem e Rodrigo Dutra',
      estado: 'Duque de Caxias/RJ',
      minutos: 14,
      link: 'https://youtu.be/9_RrLbhgdAM',
    },
    {
      programa: 4,
      nomedofilme: 'Guardião dos Caminhos',
      direcao: 'Milena Manfredini',
      estado: 'Rio de Janeiro, RJ',
      minutos: 3,
      link: 'https://youtu.be/FrGjCwZUITo',
    },
    {
      programa: 4,
      nomedofilme: 'Princesa do meu lugar',
      direcao: 'Pablo Monteiro',
      estado: 'Sao Luis, MA',
      minutos: 15,
      link: 'https://youtu.be/AP7l-GF55h8',
        
    },
    {
      programa: 5,
      nomedofilme: 'Práticas do Absurdo',
      direcao: 'Alexander S. Buck',
      estado: 'Vitória, ES',
      minutos: 16,
      link: 'https://youtu.be/7zmA1_2XzSE',
    },
    {
      programa: 5,
      nomedofilme: 'Rio das Almas e Negras Memórias',
      direcao: 'Taize Inácia e Thaynara Rezende',
      estado: 'Goiânia e Pirenópolis, GO',
      minutos: 20,
      link: 'https://youtu.be/CBRcn7jsfbs',
        
    },
    {
      programa: 5,
      nomedofilme: 'marvin.gif PART II',
      direcao: 'Marvin Pereira',
      estado: 'Cachoeira, BA',
      minutos: 4,
      link: 'https://youtu.be/GtXTrFwiY9A',
    },
    {
      programa: 5,
      nomedofilme: 'Chamada a Cobrar',
      direcao: 'Edson Ferreira',
      estado: 'Vitoria, ES',
      minutos: 19,
      link: 'https://youtu.be/xcEAhmI0PVQ',
    },
    {
      programa: 5,
      nomedofilme: 'Ditadura Roxa',
      direcao: 'Matheus Moura',
      estado: 'Belo Horizonte, MG',
      minutos: 23,
      link: 'https://youtu.be/XXwT1GGLun8',
    },
    {
      programa: 6,
      nomedofilme: 'Dias Felizes',
      direcao: 'André Santos',
      estado: 'Natal, RN',
      minutos: 13,
      link: 'https://youtu.be/RSP68YMj5Fc',
    
    },
    {
      programa: 6,
      nomedofilme: 'Corações Encouraçados',
      direcao:'Jamile Coelho e Cintia Maria',
      estado: 'Salvador, BA',
      minutos: 15,
      link: 'https://youtu.be/Uy3ZkpEhibs',
    },
    {
      programa: 6,
      nomedofilme: 'MÃEPRETA - terra, ventre e luz',
      direcao: 'Gabriel Quadros',
      estado: 'São Paulo SP',
      minutos: 6,
      link: 'https://youtu.be/RA4R0uiDrsY',
    },
    {
      programa: 6,
      nomedofilme: 'Enquanto eu for lembrado',
      direcao: 'Állan Maia',
      estado: 'Cachoeira, BA',
      minutos: 29,
      link: 'https://youtu.be/aRnobOUm6O8',
    
    },
    {
      programa: 7,
      nomedofilme: '23 Minutos',
      direcao: 'Rodrigo Beetz / Wesley Figueiredo',
      estado: 'Ribeirão das Neves, MG',
      minutos: 16,
      link: 'https://youtu.be/XscSsINtphw',
    },
    {
      programa: 7,
      nomedofilme: 'Quantos Eram pra ta?',
      direcao:'Vinícius Silva',
      estado: 'São Paulo, SP',
      minutos: 29,
      link: 'https://youtu.be/HBzTspgYtNo',
    },
    {
      programa: 7,
      nomedofilme: 'Ser Feliz No Vão',
      direcao: 'Lucas H. Rossi dos Santos',
      estado: 'Rio de Janeiro, RJ',
      minutos: 12,
      link: 'https://youtu.be/3mpYUrxW4P0',
    },
    {
      programa: 8,
      nomedofilme: 'Ilhas de Calor',
      direcao: 'Ulisses Arthur',
      estado: 'Maceió, AL',
      minutos: 20,
      link: 'https://youtu.be/gTaNRl6j3BI',
    },
    {
      programa: 8,
      nomedofilme: 'Para todes',
      direcao: 'Victor Hugo, Samara Garcia e equipe',
      estado: 'Rio de Janeiro, RJ',
      minutos: 13,
      link: 'https://youtu.be/5JQwHIJTQWo',
    },
    {
      programa: 8,
      nomedofilme: 'Enraizadas',
      direcao: 'Gabriele Roza e Juliana Nascimento',
      estado: 'Rio de Janeiro, RJ',
      minutos: 14,
      link: 'https://youtu.be/7DXF-YQ1Rz0',
    },
    {
      programa: 9,
      nomedofilme: 'Socialights | Jorge Lafond',
      direcao: 'Noah Mancini',
      estado: 'Juiz de Fora, MG',
      minutos: 10,
      link: 'https://youtu.be/2KqxKdULtmU',
    },
    {
      programa: 9,
      nomedofilme: 'As Canções de Amor de uma Bixa Velha',
      direcao: 'André Sandino Costa',
      estado: 'Rio de Janeiro, RJ',
      minutos: 22,
      link: 'https://youtu.be/8jA22brvcdI',
    },
    {
      programa: 9,
      nomedofilme: 'Goma',
      direcao: 'Igor Vasco',
      estado: 'São Paulo, SP',
      minutos: 20,
      link: 'https://youtu.be/n0dkrkQO6Ik',
    
    },
    {
      programa: 9,
      nomedofilme: 'Inspirações',
      direcao: 'Ariany e equipe',
      estado: 'Rio de Janeiro, RJ',
      minutos: 18,
      link: 'https://youtu.be/cypfTAg_5q0',
    },
    {
      programa: 10,
      nomedofilme: 'À beira do planeta mainha soprou a gente',
      direcao: 'Bruna Barros e Bruna Castro',
      estado: 'Salvador, BA',
      minutos: 13,
      link: 'https://youtu.be/I7iy5CzF-mU',
    },
    {
      programa: 10,
      nomedofilme: 'Looping',
      direcao: 'Maick Hannder',
      estado: 'Belo Horizonte, MG',
      minutos: 12,
      link: 'https://youtu.be/eNdMuKZuOoA',
    },
    // {
    //   programa: 10,
    //   nomedofilme: 'Ensaio',
    //   direcao: 'Carol Sousa e Grenda Costa',
    //   estado: 'Fortaleza, CE',
    //   minutos: 3,
    // },
    {
      programa: 10,
      nomedofilme: 'Cão Maior',
      direcao: 'Filipe Alves',
      estado: 'Brasília, DF',
      minutos: 20,
      link: 'https://youtu.be/oF8M5ZvNUPY',
    },
    {
      programa: 10,
      nomedofilme: 'Naquela Época Devoraram Meus Olhos',
      direcao: 'Cleissa Regina Martins',
      estado: 'Rio de Janeiro/ Niterói, RJ',
      minutos: 4,
      link: 'https://youtu.be/vLwEBtYYURA',
    },
  ]
})

export const catalogos = (state) => state.catalogos

export const getCatalogoByPrograma = (state) => (numeroDoPrograma) =>  
  state.catalogos.filter((catalogo) => catalogo.programa == numeroDoPrograma)

export const getAllProgramaNumbers = (state) => 
  new Set(state.catalogos.map(data => data.programa))


export default catalogosSlice.reducer