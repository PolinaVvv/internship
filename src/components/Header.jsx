import { Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FiHeart } from 'react-icons/fi'
import { BsCart2 } from 'react-icons/bs'

import MenuDrawer from './MenuDrawer'

export default function Header({}) {
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 80) {
      document.getElementById('bgHeader').style.backgroundColor =
        'rgba(202, 163, 201, 0.9)'
      document.getElementById('text1Header').style.display = 'inline'
      document.getElementById('text2Header').style.display = 'inline'
    } else {
      document.getElementById('bgHeader').style.backgroundColor =
        'rgba(80, 81, 171, 1)'
      document.getElementById('text1Header').style.display = 'none'
      document.getElementById('text2Header').style.display = 'none'
    }
  }

  window.addEventListener('scroll', changeBackground)

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      id='bgHeader'
      h='7vh'
      alignItems='center'
      justifyContent='space-between'
      position='fixed'
      w='100%'
      zIndex='999'
      transition='0.5s'
    >
      <MenuDrawer isDrawerOpen={isOpen} onDrawerClose={onClose} />
      <Flex pl='1vw' flex='1'>
        <IconButton
          variant='ghost'
          icon={
            <HamburgerIcon boxSize='1.8em' color='rgba(168, 127, 161, 1)' />
          }
          mr='0.5vw'
          _hover={{
            bg: 'rgba(255, 255, 255, 0.2)',
          }}
          onClick={onOpen}
        />
        <IconButton
          variant='ghost'
          icon={<FiHeart size='1.7em' color='rgba(168, 127, 161, 1)' />}
          mr='0.5vw'
          _hover={{
            bg: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <IconButton
          variant='ghost'
          icon={<BsCart2 size='1.9em' color='rgba(168, 127, 161, 1)' />}
          _hover={{
            bg: 'rgba(255, 255, 255, 0.2)',
          }}
        />
      </Flex>
      <Text
        color='rgba(168, 127, 161, 1)'
        fontSize='2em'
        fontWeight='700'
        flex='4'
        align='center'
        display='none'
        id='text1Header'
      >
        найди себя в музыке
      </Text>
      <Text
        pr='1.5vw'
        color='rgba(168, 127, 161, 1)'
        fontSize='2em'
        fontWeight='700'
        flex='1'
        align='end'
        display='none'
        id='text2Header'
      >
        UKU
      </Text>
    </Flex>
  )
}
