import { Button, Flex, Image, Spacer, Text } from '@chakra-ui/react'

export default function ButtonSale({
  name,
  price,
  oldPrice,
  img,
  transform,
  left,
  top,
  flip = false,
}) {
  if (flip) {
    return (
      <Button
        variant='ghost'
        borderRadius='3xl'
        position='relative'
        left={left}
        top={top}
        py='2vh'
        h='max'
        alignItems='end'
        _hover={{
          bg: 'rgba(80, 81, 171, 0.9)',
          zIndex: '999',
          transform: transform,
        }}
        transition='0.8s'
      >
        <Flex direction='column' w='20vw'>
          <Text
            color='rgba(202, 163, 201, 1)'
            fontWeight='700'
            fontSize='4vh'
            letterSpacing='0.05em'
            pb='3%'
            //   w='100%'
            whiteSpace='pre-line'
          >
            {name}
          </Text>
          <Text
            color='white'
            fontWeight='700'
            fontSize='4vh'
            letterSpacing='0.05em'
            alignSelf='start'
            pb='3%'
            pl='5%'
            style={{
              WebkitTextStroke: '1px',
            }}
          >
            {price}р.
          </Text>
          <Text
            color='white'
            fontWeight='700'
            fontSize='3vh'
            letterSpacing='0.05em'
            pb='20%'
            //   alignSelf='end'
            //   pr='45%'
            decoration='line-through'
          >
            {oldPrice}р.
          </Text>
        </Flex>
        <Image src={img} boxSize='2xs' w='min' pr='1vw' />
      </Button>
    )
  }
  return (
    <Button
      variant='ghost'
      borderRadius='3xl'
      position='relative'
      left={left}
      top={top}
      py='2vh'
      h='max'
      alignItems='end'
      _hover={{
        bg: 'rgba(80, 81, 171, 0.9)',
        zIndex: '999',
        transform: transform,
      }}
      transition='0.8s'
    >
      <Image src={img} boxSize='sm' w='min' pr='1vw' />
      <Flex direction='column' w='20vw'>
        <Text
          color='rgba(202, 163, 201, 1)'
          fontWeight='700'
          fontSize='4vh'
          letterSpacing='0.05em'
          pb='3%'
          whiteSpace='pre-line'
        >
          {name}
        </Text>
        <Text
          color='white'
          fontWeight='700'
          fontSize='4vh'
          letterSpacing='0.05em'
          alignSelf='start'
          pb='3%'
          pl='5%'
          style={{
            WebkitTextStroke: '1px',
          }}
        >
          {price}р.
        </Text>
        <Text
          color='white'
          fontWeight='700'
          fontSize='3vh'
          letterSpacing='0.05em'
          pb='20%'
          decoration='line-through'
        >
          {oldPrice}р.
        </Text>
      </Flex>
    </Button>
  )
}
