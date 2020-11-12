/* eslint-disable import/no-named-default */
import { default as Particlejs } from 'react-particles-js'
import data from './data'

const Particles = () => <Particlejs
  canvasClassName="particles"
  params={data}
/>

export default Particles
