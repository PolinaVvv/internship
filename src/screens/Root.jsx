import {
  ChakraProvider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  useDisclosure,
  Image,
  Grid,
  GridItem,
  Spacer,
  Box,
} from '@chakra-ui/react'

// Screens

// Components
import ButtonInAFrame from '../components/ButtonInAFrame.jsx'
import ProductPopupCard from '../components/ProductPopupCard.jsx'
import ProductInTheCatalog from '../components/ProductInTheCatalog.jsx'

// Styles
import '../components/Styles.css'

// Fonts
import '@fontsource/poiret-one/400.css'
import theme from '../assets/fonts/theme'

// Imgs
import testUKU from '../assets/imgs/testUKU.svg'
import testUKU2 from '../assets/imgs/testUKU2.svg'

// Data
import database from '../assets/data/database.json'
import ukuleleTypes from '../assets/data/ukuleleTypes.json'

export default function Root() {
  return (
    <ChakraProvider theme={theme}>
      {/* не знаю как картинки передать, может есть какой-то формат обмена данными, где можно и текст и картинки использовать?*/}
      {database.map((e) => (
        <ProductPopupCard
          key={e}
          header={e.header}
          price={e.price}
          content={e.shortDescription}
        />
      ))}
      <Spacer />
      <Flex justifyContent='space-evenly'>
        {ukuleleTypes.map(
          (e) => (
            console.log(e), (<ButtonInAFrame key={e} content={e.content} />)
          )
        )}
      </Flex>
      <Spacer p='20px' />

      <Flex justifyContent='center' flexWrap='wrap'>
        {database.map((e) => (
          <ProductInTheCatalog
            key={e}
            header={e.header}
            price={e.price}
            availability={e.availability}
            itemNumber={e.itemNumber}
          />
        ))}
      </Flex>
    </ChakraProvider>
  )
}
