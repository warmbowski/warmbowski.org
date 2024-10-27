import './cssans.css'

export function CSSansWord({ word = '' }: { word: string }) {
  return (
    <div className="cssans__word">
      {word.split('').map((letter, index) => (
        <b key={`cssans-${letter}-${index}`} className={`cssans:${letter}`}></b>
      ))}
    </div>
  )
}

export function CSSansPhrase({
  className = '',
  phrase = '',
  align,
  variant,
}: {
  className: string
  phrase: string
  align?: 'right' | 'center'
  variant?: 'slanted'
}) {
  const alignClass = align ? `cssans--${align}` : ''
  const variantClass = variant ? `cssans--${variant}` : ''

  return (
    <div className={[alignClass, variantClass, className].join(' ')}>
      {phrase.split(' ').map((word, index) => (
        <CSSansWord key={`cssans-${word}-${index}`} word={word} />
      ))}
      <div className="cssans__accessible">{phrase}</div>
    </div>
  )
}
