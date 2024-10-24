import { style } from '@vanilla-extract/css'

export const hero = style({
  width: '100vw',
  height: 400,
  maxHeight: '100vh',
  minHeight: 400,
  background:
    'transparent url("http://www.warmbowski.org/images/mute_rainbow_header.jpg") 0 0 no-repeat fixed',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginTop: '4em',
  marginBottom: '3em',
  '@media': {
    '(max-width: 648px)': {
      height: 200,
      minHeight: 200,
    },
  },
})

export const content = style({
  width: '100%',
  padding: '2em',
  margin: '0 auto',
})

export const logo = style({
  height: '6em',
  padding: '1.5em',
  willChange: 'filter',
  transition: 'filter 300ms',
  selectors: {
    '&:hover': {
      filter: 'drop-shadow(0 0 2em #646cffaa)',
    },
  },
})

export const logoReact = style([
  logo,
  {
    selectors: {
      '&:hover': {
        filter: 'drop-shadow(0 0 2em #61dafbaa)',
      },
    },
  },
])

export const card = style({
  padding: '2em',
})

export const readTheDocs = style({
  color: '#888',
})
