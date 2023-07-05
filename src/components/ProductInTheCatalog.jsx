import { Button, Flex, Image, Text } from '@chakra-ui/react'

// Components
import IconButton from '../components/IconButton.jsx'

import testUKU from '../assets/imgs/testUKU.svg'
import testUKU2 from '../assets/imgs/testUKU2.svg'
import ArrowRightLight from '../assets/imgs/ArrowRightLight.svg'
import HeartStraightLight from '../assets/imgs/HeartStraightLight.svg'
import ShoppingCartThin from '../assets/imgs/ShoppingCartThin.svg'

// думала вместо "в наличии" и "нет в наличии, под заказ!" писать true/false, но тогда этот код в 4 раза увеличивается из-за проверки на это
export default function ProductInTheCatalog({
  header,
  price,
  availability,
  itemNumber,
}) {
  const dataForIconButton = [
    { content: 'в корзину', ico: ShoppingCartThin },
    { content: 'в избранное', ico: HeartStraightLight },
    { content: 'характеристики', ico: ArrowRightLight },
  ]
  if (itemNumber % 2 == 1) {
    return (
      <Button
        w='40vw'
        h='35vh'
        variant='ghost'
        border='2px'
        borderRadius='0'
        borderColor='rgba(168, 127, 161, 1)'
        borderLeft='none'
        borderBottom='none'
        transition='0.8s'
        _hover={{
          background:
            // 'radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
            'rgba(210, 185, 209, 0.3)',
        }}
      >
        <Flex minH='50%' w='50%' justifyContent='center'>
          <Image maxW='90%' maxH='33vh' src={testUKU2} borderRadius='full' />
        </Flex>
        <Flex direction='column' w='50%' alignSelf='start'>
          <Text
            color='rgba(202, 163, 201, 1)'
            fontSize='5vh'
            letterSpacing='0.05em'
            // wordBreak='break-word'
            whiteSpace='normal'
            pt='10%'
            align='start'
            w='100%'
            maxH='70px'
          >
            {header}
          </Text>
          <Text
            color='rgba(202, 163, 201, 1)'
            fontSize='s'
            alignSelf='start'
            letterSpacing='0.05em'
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
                key={e}
                content={e.content}
                ico={e.ico}
                color={'rgba(202, 163, 201, 1)'}
                backgroundColor={'rgba(255, 255, 255, 0.1)'}
              />
            ))}
          </Flex>
        </Flex>
      </Button>
    )
  } else if (itemNumber % 2 == 0) {
    return (
      <Button
        w='40vw'
        h='35vh'
        variant='ghost'
        border='2px'
        borderRadius='0'
        borderColor='rgba(168, 127, 161, 1)'
        borderX='none'
        borderBottom='none'
        transition='0.8s'
        _hover={{
          background:
            // 'radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
            'rgba(210, 185, 209, 0.3)',
        }}
      >
        <Flex direction='column' w='50%' alignSelf='start'>
          <Text
            color='rgba(202, 163, 201, 1)'
            fontSize='4xl'
            letterSpacing='0.05em'
            wordBreak='break-word'
            pt='10%'
            align='start'
          >
            {header}
          </Text>
          <Text
            color='rgba(202, 163, 201, 1)'
            fontSize='s'
            alignSelf='start'
            letterSpacing='0.05em'
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

          <Flex direction='column' alignSelf='start' pt='5%'>
            {dataForIconButton.map((e) => (
              <IconButton
                key={e}
                content={e.content}
                ico={e.ico}
                color={'rgba(202, 163, 201, 1)'}
                backgroundColor={'rgba(255, 255, 255, 0.1)'}
              />
            ))}
          </Flex>
        </Flex>
        <Flex minH='50%' w='50%' justifyContent='center'>
          <Image maxW='90%' maxH='33vh' src={testUKU} borderRadius='full' />
        </Flex>
      </Button>
    )
  }
}
