import { CSSansPhrase } from './CSSans'
import * as styles from './Name.css'

export function GeometricName() {
  return (
    <div>
      <CSSansPhrase
        className={styles.name}
        align="center"
        variant="slanted"
        phrase="Paul Laskowski"
      />
    </div>
  )
}
