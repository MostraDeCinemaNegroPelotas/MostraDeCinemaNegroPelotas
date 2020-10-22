/* eslint-disable import/no-named-default */
import { default as Particlejs } from 'react-particles-js'
import data from './data'

export default function Particles () {
  return (
    <Particlejs
      canvasClassName="particles"
      params={data}
    />
  )
}
