import { Flex, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FiHeart } from 'react-icons/fi'
import { BsCart2 } from 'react-icons/bs'

import HeartStraightLight from '../assets/imgs/HeartStraightLight.svg'
import ShoppingCartThin from '../assets/imgs/ShoppingCartThin.svg'

export default function FixedMenu({}) {
  return (
    <Flex
      h='6vh'
      w='100%'
      bg='rgba(202, 163, 201, 1)'
      alignItems='center'
      position='fixed'
      zIndex='100'
      display='none'
    >
      <IconButton
        // size='lg'
        variant='ghost'
        icon={<HamburgerIcon boxSize='1.9em' color='rgba(168, 127, 161, 1)' />}
      />
      <IconButton
        // size='lg'
        variant='ghost'
        icon={<FiHeart size='1.8em' color='rgba(168, 127, 161, 1)' />}
      />
      <IconButton
        // size='lg'
        variant='ghost'
        icon={<BsCart2 size='2em' color='rgba(168, 127, 161, 1)' />}
      />
    </Flex>
  )
}
