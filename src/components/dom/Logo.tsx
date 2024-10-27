// import { CSSansPhrase } from './CSSans'
import * as styles from './Logo.css'
import avatar from '../../assets/warmbowski_avatar_transparent.png'

export function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.circle}>
        {/* <CSSansPhrase className={styles.w} align="center" phrase="W!" /> */}
        <img className={styles.avatar} src={avatar} alt="Paul Laskowski" />
      </div>
    </div>
  )
}
