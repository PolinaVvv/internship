import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Flex,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'

import EllipseAndPolygon from '../assets/imgs/MenuEllipseAndPolygon.svg'

export default function MenuDrawer({ isDrawerOpen, onDrawerClose }) {
  return (
    <Drawer
      isOpen={isDrawerOpen}
      placement='left'
      onClose={onDrawerClose}
      //   finalFocusRef={btnRef} //возврящаем фокус
    >
      <DrawerOverlay />
      <DrawerContent bg='rgba(202, 163, 201, 1)'>
        <Image
          position='absolute'
          src={EllipseAndPolygon}
          top='50%'
          right='15%'
          style={{
            rotate: '13deg',
          }}
        />
        <DrawerCloseButton
          right='86%'
          color='rgba(168, 127, 161, 1)'
          size='lg'
        />
        <DrawerHeader
          alignSelf='center'
          fontSize='5xl'
          fontWeight='700'
          color='rgba(168, 127, 161, 1)'
          pt='1em'
          letterSpacing='-0.05em'
        >
          UKU
        </DrawerHeader>
        <DrawerBody>
          <Flex
            direction='column'
            fontWeight='700'
            fontSize='4xl'
            color='rgba(168, 127, 161, 1)'
            alignItems='center'
          >
            <Text pb='1%'>главная</Text>
            <Text pb='5%'>каталог</Text>
            <Text lineHeight='0.9em' maxW='55%' align='center' pb='5%'>
              доставка и оплата
            </Text>
            <Text>контакты</Text>
          </Flex>
        </DrawerBody>

        {/* Нижний колонтитул */}
        {/* <DrawerFooter zIndex='1000'>
          
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  )
}
