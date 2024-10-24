/**
 *
 * @param value number height in vh
 * @returns
 */
export function vhToPixel(value: number, toString?: false): number
export function vhToPixel(value: number, toString: true): string
export function vhToPixel(value: number, toString: boolean = false) {
  const amt = (window.innerHeight * value) / 100
  return toString ? `${amt}px` : amt
}

/**
 *
 * @param value number width in vw
 * @returns
 */
export function vwToPixel(value: number, toString?: false): number
export function vwToPixel(value: number, toString: true): string
export function vwToPixel(value: number, toString: boolean = false) {
  const amt = (window.innerWidth * value) / 100
  return toString ? `${amt}px` : amt
}

/**
 *
 * @param width
 * @param height
 * @param toString
 */
export function getAspectRatio(
  width: number,
  height: number,
  toString?: false
): number
export function getAspectRatio(
  width: number,
  height: number,
  toString: true
): string
export function getAspectRatio(
  width: number,
  height: number,
  toString: boolean = false
) {
  if (!toString) return width / height
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
  const divisor = gcd(width, height)
  return `${width / divisor}:${height / divisor}`
}

/**
 * Suppress the full screen hero animation if the screen isn't wide enough
 */
export const doNotAnimateHero =
  getAspectRatio(window.innerWidth, window.innerHeight) < 1.4
