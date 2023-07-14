import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'

// Components
import CustomIconButton from './CustomIconButton.jsx'
import ProductModalCard from './ProductModalCard.jsx'

import ArrowRightLight from '../assets/imgs/ArrowRightLight.svg'
import HeartStraightLight from '../assets/imgs/HeartStraightLight.svg'
import ShoppingCartThin from '../assets/imgs/ShoppingCartThin.svg'

export default function ProductInTheCatalog({
  header,
  price,
  availability,
  itemNumber,
  img,
  content, // для модального окна
}) {
  const dataForIconButton = [
    { content: 'в корзину', ico: ShoppingCartThin },
    { content: 'в избранное', ico: HeartStraightLight },
    { content: 'характеристики', ico: ArrowRightLight },
  ]

  // для модального окна
  const { isOpen, onOpen, onClose } = useDisclosure()
  // почему тут используем именно "===", а не "=="? просто потому что так предпочтительнее?)
  const parItems = itemNumber % 2 === 0

  return (
    <>
      <Box
        display='flex'
        flex='50%'
        padding='2vh 2vw'
        alignItems='center'
        border='2px'
        borderRadius='0'
        borderColor='rgba(168, 127, 161, 1)'
        // borderLeft='none'
        // borderBottom='none'
        // borderRight='none'
        transition='0.8s'
        onClick={onOpen} // открытие модального окна при нажатии на карточку
        _hover={{
          background: 'rgba(210, 185, 209, 0.3)',
        }}
      >
        {parItems ? null : (
          <Flex minH='50%' w='50%' justifyContent='center'>
            <Image maxW='100vw' maxH='40vh' src={img} borderRadius='full' />
          </Flex>
        )}
        <Flex direction='column' w='50%' alignSelf='start'>
          <Text
            color='white'
            fontWeight='700'
            //
            // почему используешь 2xl/4xl? так правильно или просто так захотелось?
            // просто я использую vh с мыслями о том, что когдаааа-то будет адаптив и так будет удобнее
            // я ошибаюсь?))
            //
            // fontSize={parItems ? '2xl' : '4xl'}
            fontSize='5vh'
            letterSpacing='0.05em'
            pt='7%'
            w='100%'
            noOfLines={1}
          >
            {header}
          </Text>
          <Text
            color='rgba(202, 163, 201, 1)'
            fontSize='s'
            alignSelf='start'
            letterSpacing='0.05em'
            backgroundColor='rgba(210, 185, 209, 0.1)'
            px='1vw'
          >
            {availability}
          </Text>
          <Text
            alignSelf='end'
            color='rgba(255, 255, 255, 1)'
            fontSize='4xl'
            textShadow='0.5px 0, -0.5px 0, 0 0.5px, 0 -0.5px'
            letterSpacing='0.1em'
            pt='6%'
          >
            {price}p.
          </Text>

          <Flex direction='column' pt='4%'>
            {dataForIconButton.map((e) => (
              <CustomIconButton
                key={e.content + 'card-id' + header}
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
            <Image maxW='20vw' maxH='40vh' src={img} borderRadius='full' />
          </Flex>
        ) : null}
      </Box>

      <ProductModalCard
        header={header}
        price={price}
        content={content}
        img={img}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}
//   else if (itemNumber % 2 == 0) {
//     return (
//       <Button
//         w='40vw'
//         h='35vh'
//         variant='ghost'
//         border='2px'
//         borderRadius='0'
//         borderColor='rgba(168, 127, 161, 1)'
//         borderX='none'
//         borderBottom='none'
//         transition='0.8s'
//         _hover={{
//           background:
//             // 'radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
//             'rgba(210, 185, 209, 0.3)',
//         }}
//       >
//         <Flex direction='column' w='50%' alignSelf='start'>
//           <Text
//             color='rgba(202, 163, 201, 1)'
//             fontSize='4xl'
//             letterSpacing='0.05em'
//             wordBreak='break-word'
//             pt='10%'
//             align='start'
//           >
//             {header}
//           </Text>
//           <Text
//             color='rgba(202, 163, 201, 1)'
//             fontSize='s'
//             alignSelf='start'
//             letterSpacing='0.05em'
//             // pl='0.5em'
//           >
//             {availability}
//           </Text>
//           <Text
//             alignSelf='end'
//             color='rgba(255, 255, 255, 1)'
//             fontSize='3xl'
//             textShadow='0.5px 0, -0.5px 0, 0 0.5px, 0 -0.5px'
//             letterSpacing='0.1em'
//             pt='3%'
//           >
//             {price}p.
//           </Text>

//           <Flex direction='column' alignSelf='start' pt='5%'>
//             {dataForIconButton.map((e) => (
//               <IconButton
//                 key={e}
//                 content={e.content}
//                 ico={e.ico}
//                 color={'rgba(202, 163, 201, 1)'}
//                 backgroundColor={'rgba(255, 255, 255, 0.1)'}
//               />
//             ))}
//           </Flex>
//         </Flex>
//         <Flex minH='50%' w='50%' justifyContent='center'>
//           <Image maxW='90%' maxH='33vh' src={testUKU} borderRadius='full' />
//         </Flex>
//       </Button>
//     )
//   }
// }
