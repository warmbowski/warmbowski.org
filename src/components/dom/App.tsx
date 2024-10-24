import { animated, useSpring } from '@react-spring/web'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import { Hero } from '../canvas/Hero.tsx'
import * as styles from './App.css.ts'
import { doNotAnimateHero, vhToPixel } from '../../utils.ts'

function App() {
  const animateHeight = useSpring({
    from: { height: vhToPixel(100, true) },
    to: { height: '400px' },
    delay: 2000,
    onRest: (e) => {
      if (e.finished === true) {
        console.error('Animation finished')
      }
    },
    config: { tension: 280, friction: 120 },
  })

  return (
    <>
      <animated.div
        className={styles.hero}
        style={!doNotAnimateHero ? animateHeight : undefined}
      >
        <Hero />
      </animated.div>
      <div className={styles.content}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className={styles.logo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className={styles.logoReact}
              alt="React logo"
            />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className={styles.card}>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className={styles.readTheDocs}>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
