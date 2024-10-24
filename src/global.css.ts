import { globalStyle } from '@vanilla-extract/css'

globalStyle(':root', {
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  lineHeight: 1.5,
  fontWeight: 400,

  colorScheme: 'light dark',
  color: 'rgba(255, 255, 255, 0.87)',
  backgroundColor: '#242424',

  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('html, body', {
  padding: 0,
  margin: 0,
  fontSize: 14,
  minWidth: 320,
  minHeight: '100vh',
})

globalStyle('*', {
  boxSizing: 'border-box',
})

globalStyle('#root', {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

globalStyle('a', {
  fontWeight: 500,
  color: '#646cff',
  textDecoration: 'inherit',
})

globalStyle('a:hover', {
  color: '#535bf2',
})

globalStyle('h1', {
  fontSize: '3.2em',
  lineHeight: 1.1,
})

globalStyle(':root', {
  '@media': {
    '(prefers-color-schema: light)': {
      color: '#213547',
      backgroundColor: '#f5f5f5',
    },
  },
})
