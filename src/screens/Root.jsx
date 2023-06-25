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
} from '@chakra-ui/react'

// Screens
// import ProductPopupCard from '../components/ProductPopupCard.jsx'

// Styles
import '../components/Styles.css'

// Fonts
import '@fontsource/poiret-one/400.css'
import theme from '../assets/fonts/theme'

// Imgs
import testUKU from '../assets/imgs/testUKU.svg'
import EllipseForPopup from '../assets/imgs/EllipseForPopup.svg'
import Rectangle1 from '../assets/imgs/Rectangle1.svg'
import Polygon1 from '../assets/imgs/Polygon1.svg'
import Zigzag1 from '../assets/imgs/Zigzag1.svg'
import ArrowRightLight from '../assets/imgs/ArrowRightLight.svg'
import HeartStraightLight from '../assets/imgs/HeartStraightLight.svg'
import ShoppingCartThin from '../assets/imgs/ShoppingCartThin.svg'

export default function Root() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider theme={theme}>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='none' backdropFilter='blur(10px) ' />
        <ModalContent>
          <Image
            src={EllipseForPopup}
            position='absolute'
            boxSize='60%'
            marginLeft='21vw'
            marginTop='15vh'
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
            marginTop='65vh'
          />
          <ModalHeader
            fontSize='4xl'
            // тут идёт смешение в каждую сторону, чтобы всё красиво и ровно было
            textShadow='1px 0, -1px 0, 0 1px, 0 -1px'
            textAlign='center'
            paddingTop='9vh'
            letterSpacing='0.2em'
          >
            SOPRANO TERRIS UK-150 V
          </ModalHeader>
          <ModalCloseButton left='2.5vw' top='5vh' size='lg' />
          <ModalBody paddingX='6vw'>
            <Grid
              templateRows='repeat(3, 1fr)'
              templateColumns='repeat(4, 1fr)'
              gap={4}
              position='relative'
            >
              {/* придумать что делать с фоткой,ибо вертикальные - большие, горизонтальное - маленькие */}
              {/* сделала, вроде как */}
              <GridItem rowSpan={3} colSpan={2} alignSelf='center'>
                <Flex justify='center' paddingBottom='10vh'>
                  <Image
                    maxW='350px'
                    maxH='350px'
                    src={testUKU}
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
                paddingTop='5%'
                letterSpacing='0.05em'
                // не получается придумать как сделать тень под текст
                // СДЕЛАЛА

                // тут вот это распыление ограничивается блоком текста. видимо, как отдельную картинку ставитьь надо и пытаться позиционировать
                // backgroundImage={EllipseForPopup}
                // backgroundSize='100%'
                // backgroundPosition='center'

                // background='rgba(255, 255, 255, 1)'
                // borderRadius='full'
                // style={{
                //   backgroundColor: 'rgba(255, 255, 255, 1)',
                //   // filter: 'blur(2px)',
                //   backdropFilter: 'blur(200px)',
                // }}

                // textShadow='1px 0px 50px #FFF, 0px 1px 50px #FFF, 0px -1px 50px #FFF, -1px 0px 50px #FFF'
              >
                Форма корпуса - сопрано, материал - АБС пластик, цвет - розовый
                матовый, чехол в комплекте
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
                2100p.
              </GridItem>
              {/* проблема в том, что не получается сделать одной кнопкой иконку и текст((( */}
              {/* сделала */}
              {/* нужно поднять выше, билже к тексту эти кнопки */}
              {/* при наведении красоту навести */}
              <GridItem colSpan={1}>
                <Button
                  variant='ghost'
                  onClick={onClose}
                  fontSize='2xl'
                  color='rgba(168, 127, 161, 1)'
                  alignItems='end'
                  justifyContent='end'
                  h='min'
                  w='max'
                  // padding='0px'
                  _hover={{
                    bg: 'radial-gradient(rgba(255, 255, 255, 0.61), rgba(255, 255, 255, 0))',
                  }}
                >
                  <Image
                    boxSize='1em'
                    src={ArrowRightLight}
                    marginRight='0.5em'
                  />
                  подробнее
                </Button>

                <Button
                  variant='ghost'
                  onClick={onClose}
                  fontSize='2xl'
                  color='rgba(168, 127, 161, 1)'
                  alignItems='end'
                  h='min'
                  w='max'
                  // padding='0px'
                  _hover={{
                    bg: 'radial-gradient(rgba(255, 255, 255, 0.61), rgba(255, 255, 255, 0))',
                  }}
                >
                  <Image
                    boxSize='1em'
                    src={HeartStraightLight}
                    marginRight='0.5em'
                  />
                  в избранное
                </Button>

                <Button
                  variant='ghost'
                  onClick={onClose}
                  fontSize='2xl'
                  color='rgba(168, 127, 161, 1)'
                  h='min'
                  w='max'
                  justifyContent='end'
                  // padding='0px'
                  _hover={{
                    bg: 'radial-gradient(rgba(255, 255, 255, 0.61), rgba(255, 255, 255, 0))',
                  }}
                >
                  <Image
                    boxSize='1em'
                    src={ShoppingCartThin}
                    marginRight='0.5em'
                  />
                  в корзину
                </Button>
              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}
