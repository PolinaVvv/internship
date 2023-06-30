import { Button } from '@chakra-ui/react'

// когда кнопка будет активна, её фон будет выделятсья на фоне остальных
// с помощью focus кнопка будет выделяться, но до тех пор, пока пользователь не нажмёт на что-то другое
// как сделать так, чтобы она постоянно была активна? чтобы было видно какая категория сейчас показывается
export default function ButtonInAFrame({ content }) {
  return (
    <Button
      // для адаптива прописывать для размера текста
      variant='ghost'
      fontSize={{ base: 'xl', lg: '5xl' }}
      color='rgba(168, 127, 161, 1)'
      borderRadius='0'
      borderColor='rgba(168, 127, 161, 1)'
      border='2px'
      pt='0.6em'
      pb='0.9em'
      w='17%'
      transition='0.8s'
      _active={{
        bg: 'rgba(202, 163, 201, 1)',
      }}
      _hover={{
        bg: 'rgba(210, 185, 209, 0.3)',
      }}
      _focus={{
        bg: 'rgba(202, 163, 201, 1)',
      }}
    >
      {content}
    </Button>
  )
}
