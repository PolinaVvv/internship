import { Box, Flex } from '@chakra-ui/react'
// import { Popup, Rectangle } from 'react-leaflet'

// как привязать вот эту область выделения и мини-карточку товара на странице каталога - пока хз. может как-то сделать вот эту
// мини-карточку в виде кнопки - тогда всё легче будет
export default function ProductPopupCard(
  header,
  picture,
  content,
  price,
  bounds
) {
  return (
    <Rectangle>
      {/* <Rectangle bounds={bounds}>  */}
      <Popup minWidth={160}>
        <Box textAlign='center'>{header}</Box>
        <Flex>{picture}</Flex>
        <Box style={popupText}>
          {content1}
          <br />
          {content2}
          <br />
          {additionalСontent}
        </Box>
      </Popup>
    </Rectangle>
  )
}
