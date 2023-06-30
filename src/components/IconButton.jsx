import { Button, Image } from '@chakra-ui/react'

// некоторые кнопки должны открывать новую страничку, а некоторые - просто выполнять действие по типу добавления в избранное
// это лучше делать через обработчик события или?? но я никак не умею, если что)))))
export default function IconButton({
  content,
  ico,
  color = 'rgba(168, 127, 161, 1)',
  backgroundColor = 'radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
}) {
  return (
    <Button
      variant='ghost'
      // onClick={onClose}
      fontSize='2xl'
      letterSpacing='0.05em'
      color={color}
      alignItems='end'
      justifyContent='start'
      h='min'
      px='0.3em'
      transition='0.8s'
      _hover={{
        background: backgroundColor,
      }}
    >
      <Image boxSize='1em' src={ico} marginRight='0.5em' />
      {content}
    </Button>
  )
}
