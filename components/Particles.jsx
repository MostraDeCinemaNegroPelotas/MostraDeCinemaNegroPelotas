/* eslint-disable import/no-named-default */
import { default as Particlejs } from 'react-particles-js'

const Particles = () => {
  const data = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 10,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 10,
        out_mode: 'out'
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'bubble'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        }
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0
        },
        repulse: {
          distance: 400,
          duration: 4
        }
      }
    }
  }

  return (
    <Particlejs
      canvasClassName="particles"
      params={data}
    />
  )
}

export default Particles
