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
import ButtonInAFrame from '../components/ButtonInOrWithoutFrame.jsx'
import ProductPopupCard from '../components/ProductPopupCard.jsx'
import ProductInTheCatalog from '../components/ProductInTheCatalog.jsx'
import CustomSelect from '../components/CustomSelect.jsx'
import FixedMenu from '../components/FixedMenu.jsx'

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
  const test1 = [{ content: 'Применить' }, { content: 'Сбросить' }]
  return (
    <ChakraProvider theme={theme}>
      <FixedMenu id='menu' />
      {/* не знаю как картинки передать, может есть какой-то формат обмена данными, где можно и текст и картинки использовать?*/}
      {/* {database.map((e) => (
        <ProductPopupCard
          key={e}
          header={e.header}
          price={e.price}
          content={e.shortDescription}
        />
      ))} */}
      <Spacer />
      {/* можно сделать через Tabs, только нужно понять как  */}
      <Flex justifyContent='space-evenly'>
        {ukuleleTypes.map(
          // объект в функции map можно называть как угодно, например ukulele
          // так становится понетянее, с какими данными работаешь 
          (ukulele) => (
            console.log(ukulele),
            (<ButtonInAFrame key={ukulele.content} content={ukulele.content} fontSize={'5xl'} />)
          )
        )}
      </Flex>
      <Spacer p='20px' />
      <Flex justifyContent='space-evenly'>
        {test1.map(
          (e) => (
            console.log(e),
            (
              <ButtonInAFrame
              // передаваить как ключ следует уникальное значение строки или уникальный номер, но !!! не позицию в массиве
          // тогда реакт все компененты сможет отрисовать 
                key={e.content + 'test1'}
                content={e.content}
                fontSize={'3xl'}
                border={'none'}
                pt={'0.4em'}
                pb={'0.4em'}
                w={'12%'}
              />
            )
          )
        )}
      </Flex>
      <Spacer p='20px' />
      <Flex justifyContent='space-between' px='7vw'>
        <CustomSelect />
        <CustomSelect />
        <CustomSelect />
        <CustomSelect />
        <CustomSelect />
      </Flex>
      <Spacer p='20px' />
      <Flex justifyContent='center' flexWrap='wrap' >
        {database.map((e) => (
          <ProductInTheCatalog
          // передаваить как ключ следует уникальное значение строки или уникальный номер, но !!! не позицию в массиве
          // тогда реакт все компененты сможет отрисовать 
            key={e.itemNumber+'card'}
            header={e.header}
            price={e.price}
            availability={e.availability}
            itemNumber={e.itemNumber}
            content={e.shortDescription}
          />
        ))}
      </Flex>
      <Spacer p='20px' />
    </ChakraProvider>
  )
}
