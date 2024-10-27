import { style } from '@vanilla-extract/css'

export const logo = style({
  vars: {
    '--cssans-primary': '#3FC1C0',
    '--cssans-secondary': '#00B2CA',
    '--cssans-accent1': '#0899BA',
    '--cssans-accent2': '#16679A',
    '--cssans-accent3': '#1C558E',
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1em',
})

export const circle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '250px',
  height: '250px',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: '#ffc971',
  willChange: 'transform',
  transition: 'transform 300ms',
  selectors: {
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
})

export const w = style({
  position: 'relative',
  top: '1em',
  fontSize: '3em',
  filter: 'drop-shadow(4px 4px #cc5803)',
})
