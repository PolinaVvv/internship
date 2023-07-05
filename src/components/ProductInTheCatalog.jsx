import { Box, Button, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'

// Components
import IconButton from '../components/IconButton.jsx'

import testUKU from '../assets/imgs/testUKU.svg'
import testUKU2 from '../assets/imgs/testUKU2.svg'
import ArrowRightLight from '../assets/imgs/ArrowRightLight.svg'
import HeartStraightLight from '../assets/imgs/HeartStraightLight.svg'
import ShoppingCartThin from '../assets/imgs/ShoppingCartThin.svg'
import ProductPopupCard from './ProductPopupCard.jsx'

// думала вместо "в наличии" и "нет в наличии, под заказ!" писать true/false, но тогда этот код в 4 раза увеличивается из-за проверки на это
export default function ProductInTheCatalog({
  header,
  price,
  availability,
  itemNumber,
  content // для модального окна
}) {
  const dataForIconButton = [
    { content: 'в корзину', ico: ShoppingCartThin },
    { content: 'в избранное', ico: HeartStraightLight },
    { content: 'характеристики', ico: ArrowRightLight },
  ]

  // для модального окна
  const {isOpen, onOpen, onClose} = useDisclosure()

  const parItems = itemNumber % 2 === 0

  return (
    <>
    
    <Box
      display='flex'
      padding='20px 20px'
      alignItems='center'
      border='2px'
      borderRadius='0'
      borderColor='rgba(168, 127, 161, 1)'
      flex='50%'
      borderLeft='none'
      borderBottom='none'
      transition='0.8s'
      onClick={onOpen} // открытие модального окна при нажатии на карточку
      _hover={{
        background:
          // 'radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
          'rgba(210, 185, 209, 0.3)',
      }}
    >
      {parItems ? null : (
        <Flex minH='50%' w='50%' justifyContent='center'>
          <Image maxW='90%' maxH='33vh' src={testUKU2} borderRadius='full' />
        </Flex>
      )}
      <Flex direction='column' w='50%' alignSelf='start'>
        <Text
          color={parItems ? "white" : 'rgba(202, 163, 201, 1)'}
          fontWeight={parItems ? "700" : '500'}
          fontSize={parItems ? '2xl' : '4xl' }
          letterSpacing='0.05em'
          wordBreak={parItems ? 'break-word' : ""}
          whiteSpace={parItems ? "" :'normal' }
          pt='10%'
          // align='start'
          w={parItems ? "inherit" : '100%'}
          // maxH={parItems ? "none" :'70px'}
          marginLeft={parItems ? '20px' : '0'}
        >
          {header}
        </Text>
        <Text
          color='rgba(202, 163, 201, 1)'
          fontSize='s'
          alignSelf='start'
          letterSpacing='0.05em'
          marginLeft={parItems ? '20px' : '0'}
          // pl='0.5em'
        >
          {availability}
        </Text>
        <Text
          alignSelf='end'
          color='rgba(255, 255, 255, 1)'
          fontSize='3xl'
          textShadow='0.5px 0, -0.5px 0, 0 0.5px, 0 -0.5px'
          letterSpacing='0.1em'
          pt='3%'
        >
          {price}p.
        </Text>

        <Flex direction='column' alignSelf='end' pt='5%'>
          {dataForIconButton.map((e) => (
            <IconButton
              key={e.content+'card-id'+header}
              content={e.content}
              ico={e.ico}
              color={'rgba(202, 163, 201, 1)'}
              backgroundColor={'rgba(255, 255, 255, 0.1)'}
            />
          ))}
        </Flex>
      </Flex>
      {parItems ? (
        <Flex minH='50%' w='50%' justifyContent='center'>
        <Image maxW='90%' maxH='33vh' src={testUKU} borderRadius='full' />
      </Flex>
      ) : null}

      
    </Box>

    <ProductPopupCard
        header={header}
        price={price}
        content={content}
        isOpen={isOpen}
        onClose={onClose}
    />
    </>
  )
}
