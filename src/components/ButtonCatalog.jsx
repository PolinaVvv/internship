import { Button, Image, Text } from '@chakra-ui/react'

export default function ButtonCatalog({
  img,
  content,
  transform,
  left,
  top,
  leftImg,
  topImg,
  boxSize,
}) {
  return (
    <Button
      variant='ghost'
      display='flex'
      flex='50%'
      position='relative'
      left={leftImg}
      top={topImg}
      h='max'
      // w='110vw'
      _hover={{
        transform: transform,
        zIndex: '999',
      }}
      transition='0.8s'
    >
      <Text
        position='absolute'
        left={left}
        top={top}
        color='rgba(202, 163, 201, 1)'
        fontWeight='700'
        fontSize='8vh'
        letterSpacing='0.05em'
        style={{
          WebkitTextStroke: '1px',
        }}
      >
        {content}
      </Text>
      <Image src={img} boxSize={boxSize} />
    </Button>
  )
}
