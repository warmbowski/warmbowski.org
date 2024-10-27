import { CSSansPhrase } from './CSSans'
import * as styles from './Logo.css'

export function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.circle}>
        <CSSansPhrase className={styles.w} align="center" phrase="W!" />
      </div>
    </div>
  )
}
