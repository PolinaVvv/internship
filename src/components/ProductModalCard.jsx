import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react'

// Components
import CustomIconButton from './CustomIconButton.jsx'

// Img
import EllipseForPopup from '../assets/imgs/EllipseForPopup.svg'
import Rectangle1 from '../assets/imgs/Rectangle1.svg'
import Polygon1 from '../assets/imgs/Polygon1.svg'
import Zigzag1 from '../assets/imgs/Zigzag1.svg'
import ArrowRightLight from '../assets/imgs/ArrowRightLight.svg'
import HeartStraightLight from '../assets/imgs/HeartStraightLight.svg'
import ShoppingCartThin from '../assets/imgs/ShoppingCartThin.svg'

// в модальное окно можно передавать переменную (открыто оно или нет) и функцию, которая будет закрывать окно
// а в месте где будет вызываться модальное окно создать функции и переменную состояния (к вопросу про "как открывать эту модалку")
export default function ProductModalCard({
  header,
  price,
  content,
  img,
  isOpen,
  onClose,
}) {
  const dataForIconButton = [
    { content: 'подробнее', ico: ArrowRightLight },
    { content: 'в избранное', ico: HeartStraightLight },
    { content: 'в корзину', ico: ShoppingCartThin },
  ]
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='none' backdropFilter='blur(10px) ' />
        <ModalContent>
          <Image
            src={EllipseForPopup}
            position='absolute'
            boxSize='70%'
            ml='18vw'
            mt='11vh'
          />
          <Image
            src={Polygon1}
            position='absolute'
            boxSize='15%'
            marginLeft='52vw'
            marginTop='5vh'
          />
          <Image
            src={Rectangle1}
            position='absolute'
            boxSize='13%'
            marginLeft='6vw'
            marginTop='20vh'
          />
          <Image
            src={Zigzag1}
            position='absolute'
            boxSize='13%'
            marginLeft='23vw'
            marginTop='60vh'
          />
          <ModalHeader
            fontSize='4xl'
            // тут идёт смешение в каждую сторону, чтобы всё красиво и ровно было
            textShadow='1px 0, -1px 0, 0 1px, 0 -1px'
            textAlign='center'
            paddingTop='9vh'
            letterSpacing='0.2em'
            maxH='19vh'
          >
            {header}
          </ModalHeader>
          <ModalCloseButton left='2.5vw' top='5vh' size='lg' />
          <ModalBody paddingX='5vw'>
            <Grid
              templateRows='repeat(3, 1fr)'
              templateColumns='repeat(4, 1fr)'
              gap={6}
              position='relative'
            >
              <GridItem rowSpan={3} colSpan={2} h='55vh'>
                <Flex minH='80%' justify='center' align='center'>
                  <Image
                    maxW='100%'
                    maxH='50vh'
                    src={img}
                    borderRadius='full'
                  />
                </Flex>
              </GridItem>
              <GridItem
                colSpan={2}
                rowSpan={2}
                fontSize='2xl'
                fontWeight='bold'
                textAlign='center'
                alignSelf='center'
                justifySelf='center'
                paddingTop='5%'
                letterSpacing='0.05em'
                maxW='90%'
              >
                {content}
              </GridItem>
              <GridItem
                colSpan={1}
                color='white'
                fontSize='3xl'
                fontWeight='bold'
                letterSpacing='0.1em'
                alignSelf='start'
                textAlign='center'
                textShadow='0.5px 0, -0.5px 0, 0 0.5px, 0 -0.5px'
              >
                {price}p.
              </GridItem>
              <GridItem top='35vh' pl='37vw' colSpan={1} position='absolute'>
                <Flex direction='column' alignSelf='end'>
                  {dataForIconButton.map((e) => (
                    <CustomIconButton key={e} content={e.content} ico={e.ico} />
                  ))}
                </Flex>
              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
