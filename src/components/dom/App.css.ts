import { style } from '@vanilla-extract/css'

export const hero = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: 400,
  maxHeight: '100vh',
  minHeight: 400,
  backgroundColor: 'transparent',
  marginTop: '4em',
  marginBottom: '3em',
  '@media': {
    '(max-width: 648px)': {
      height: 200,
      minHeight: 200,
    },
  },
})

export const heroBackground = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage:
    'url("https://assets.wfcdn.com/im/84268766/resize-h445%5Ecompr-r85/1639/163945024/Ahriella+126%22+L+x+24%22+W+Peel+and+Stick+Wallpaper+Roll.jpg")',
  backgroundColor: 'transparent',
  backgroundRepeat: 'repeat',
  backgroundPosition: '0 0',
  opacity: 0.2,
  width: '100%',
  height: '100%',
  zIndex: -1,
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
