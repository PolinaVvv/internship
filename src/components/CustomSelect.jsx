import { Select } from '@chakra-ui/react'

export default function CustomSelect({}) {
  return (
    <Select
    // минимальная ширина задается как minW
      minW='1em'
      w='15em'
      //   h='max'
      color='rgba(168, 127, 161, 1)'
      fontSize='2xl'
      fontWeight='black'
      borderRadius='0'
      border='2px'
      borderColor='rgba(168, 127, 161, 1)'
      backgroundColor='rgba(202, 163, 201, 1)'
      //   multiple='multiple'
    >
      <option value='option1'>По популярности</option>
      <option value='option2'>Сначала дешевле</option>
      <option value='option3'>Сначала дороже</option>
    </Select>
  )
}
