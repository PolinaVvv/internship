import { Button, Image } from '@chakra-ui/react'

// некоторые кнопки должны открывать новую страничку, а некоторые - просто выполнять действие по типу добавления в избранное
// это лучше делать через обработчик события или?? но я никак не умею, если что)))))

// изучи библиотеку react-router-dom она позволяет перенапрвалять на разные страницы сайта
// чтобы открыть новую страничку сайта, можно обернуть кнопку в компонент ссылки (Link из react-router-dom)
// и тогда при клике на кнопку будет переход на новую страницу
// обработчик клика я уже показал)
export default function CustomIconButton({
  content,
  ico,
  color = 'rgba(168, 127, 161, 1)',
  backgroundColor = 'rgba(255, 255, 255, 0.1)',
}) {
  return (
    <Button
      variant='ghost'
      fontSize='2xl'
      letterSpacing='0.05em'
      color={color}
      borderRadius='none'
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
