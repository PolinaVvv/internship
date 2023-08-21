import { Box, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bgColor='rgba(202, 163, 201, 1)' h='25vh'>
      <Text
        color='rgba(168, 127, 161, 1)'
        fontSize='2em'
        fontWeight='700'
        align='center'
      >
        UKU
      </Text>
      <Text>чисто набросок, для вида пока что</Text>
    </Box>
  )
}
