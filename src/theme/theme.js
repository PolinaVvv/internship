import { extendTheme } from '@chakra-ui/react'
import { fontPoiretOne } from '../assets/fonts/CustomFonts'

export const colors = {
  mainPink: 'rgba(202, 163, 201, 0.9)',
  dirtyPink: 'rgba(168, 127, 161, 1)',
  darkBlue: 'rgba(80, 81, 171, 0)',
  hoverWhite: 'rgba(255, 255, 255, 0.2)',
  // цвета для примера)
  bgSecondaryDark: '#141518',
  bgMainDark: '#0A0A0C',
  bgLightDark: '#31373A',
  control: '#276749',
  controlHov: '#1B4732',
  success: '#276749',
  error: '#AD1527',
  errorHov: '#82101D',
  disableContorol: '#3D4448',
  disableContorolHov: '#26272A',
  greenText: '#96B4B1',
  formError: '#FC8181',
}

export const scrollbar = {
  '&::-webkit-scrollbar': {
    width: '12px',
    borderRadius: '8px',
    backgroundColor: colors.bgLightDark,
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '8px',
    backgroundColor: colors.control,
  },
}

const theme = extendTheme({
  fonts: fontPoiretOne,
})

export default theme
