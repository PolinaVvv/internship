import { Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FiHeart } from 'react-icons/fi'
import { BsCart2 } from 'react-icons/bs'

import MenuDrawer from './MenuDrawer'
import { useEffect, useRef, useState } from 'react'
import { colors } from '../theme'

export default function Header() {

  // ссылка необходима, чтобы отслеживать состояние в обработчике скрола
  let isScrollDownRef = useRef(false)
  // стейт необходим, чтобы отслеживать текущее состояние "проскролено"/"непроскролено" и
  // менять элементы, которые зависят от этого состояния
  const [isScrollDown, setIsScrollDown] = useState(false)

  const onScrollChange = () => {
    // если раньше еще не было проскролено и теперь скролл больше 80 пикселей
    // (показать хедер)
    if (!isScrollDownRef && window.scrollY > 80) {
      // изменение состояния
      isScrollDownRef = true
      setIsScrollDown(true)
    }
    // если раньше было проскролено и теперь скролл меньше 80 пикселей
    // (скрыть хедер)
    if (isScrollDownRef && window.scrollY <= 80) {
      // изменение состояния
      isScrollDownRef = false
      setIsScrollDown(false)
    }
  }

  // чтобы обработчик навешивался один раз, и при удалении компонента убирался
  useEffect(() => {
    window.addEventListener('scroll', onScrollChange)

    return () => {
      window.removeEventListener('scroll', onScrollChange)
    }
  }, [])
  

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      h='7vh'
      alignItems='center'
      justifyContent='space-between'
      position='fixed'
      w='100%'
      zIndex='1000'
      transition='0.5s'
      bgColor={isScrollDown ? colors.mainPink : colors.darkBlue}
    >
      <MenuDrawer isDrawerOpen={isOpen} onDrawerClose={onClose} />
      <Flex pl='1vw' flex='1'>
        <IconButton
          variant='ghost'
          icon={
            <HamburgerIcon boxSize='1.8em' color={colors.dirtyPink} />
          }
          mr='0.5vw'
          _hover={{
            bg: colors.hoverWhite,
          }}
          onClick={onOpen}
        />
        <IconButton
          variant='ghost'
          icon={<FiHeart size='1.7em' color={colors.dirtyPink} />}
          mr='0.5vw'
          _hover={{
            bg: colors.hoverWhite,
          }}
        />
        <IconButton
          variant='ghost'
          icon={<BsCart2 size='1.9em' color={colors.dirtyPink} />}
          _hover={{
            bg: colors.hoverWhite,
          }}
        />
      </Flex>
      <Text
        color={colors.dirtyPink}
        fontSize='2em'
        fontWeight='700'
        flex='4'
        align='center'
        display={isScrollDown ? 'inline' : 'none'}
      >
        найди себя в музыке
      </Text>
      <Text
        pr='1.5vw'
        color={colors.dirtyPink}
        fontSize='2em'
        fontWeight='700'
        flex='1'
        align='end'
        display={isScrollDown ? 'inline' : 'none'}
      >
        UKU
      </Text>
    </Flex>
  )
}
