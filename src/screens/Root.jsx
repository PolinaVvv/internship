import { ChakraProvider, Flex, Text, Image } from '@chakra-ui/react'

// Screens

// Components
import ButtonInOrWithoutFrame from '../components/ButtonInOrWithoutFrame.jsx'
import ProductInTheCatalog from '../components/ProductInTheCatalog.jsx'
import CustomSelect from '../components/CustomSelect.jsx'
import Header from '../components/Header.jsx'

// Styles
import '../components/Styles.css'

// Fonts
import '@fontsource/poiret-one/400.css'
import theme from '../assets/fonts/theme'

// Img
import ellipse1 from '../assets/imgs/root/ellipse1.svg'
import ellipse2 from '../assets/imgs/root/ellipse2.svg'
import ellipse3 from '../assets/imgs/root/ellipse3.svg'
import ellipse5 from '../assets/imgs/root/ellipse5.svg'
import ellipsseRect from '../assets/imgs/root/ellipseRect.svg'
import Polygon1 from '../assets/imgs/root/Polygon1.svg'
import zigzag1 from '../assets/imgs/root/zigzag1.svg'

// Data
import {
  database,
  housingMaterial,
  type,
  neckMaterial,
  brand,
  finishing,
  color,
  toSortBy,
} from '../assets/data/database.js'

export default function Root() {
  // const test1 = [{ content: 'Применить' }, { content: 'Сбросить' }]
  return (
    <ChakraProvider theme={theme}>
      <Image
        src={ellipse1}
        position='absolute'
        // zIndex='-999'
        boxSize='25%'
        left='19vw'
        mt='10vh'
      />
      <Image
        src={ellipse2}
        position='absolute'
        zIndex='-999'
        boxSize='50%'
        left='-10vw'
        // right='100vw'
        mt='50vh'
      />
      <Image
        src={ellipse3}
        position='absolute'
        zIndex='-999'
        boxSize='30%'
        left='27vw'
        mt='38vh'
      />
      <Image
        src={ellipse5}
        position='absolute'
        // zIndex='-999'
        boxSize='40%'
        left='48vw'
        // mt='1vh'
      />
      <Image
        src={ellipsseRect}
        position='absolute'
        zIndex='-999'
        boxSize='40%'
        left='48vw'
        // mt='1vh'
      />
      <Header />
      <Flex direction='column' align='center' pt='10vh'>
        <Text color='rgba(168, 127, 161, 1)' fontWeight='700' fontSize='2em'>
          UKU
        </Text>
        <Flex direction='column' mb='20vh'>
          <Text
            color='rgba(202, 163, 201, 1)'
            fontWeight='700'
            fontSize='10em'
            // вот с этим хз что делать))) это для обводки, но 1. слииишком много кода; 2. обвотка получается округлая, а по макету она более угловая
            textShadow=' 2px 0px 0px, 1.75517px 0.958851px 0px, 1.0806px 1.68294px 0px, 0.141474px 1.99499px 0px, -0.832294px 1.81859px 0px, -1.60229px 1.19694px 0px,-1.97998px 0.28224px 0px, -1.87291px -0.701566px 0px, -1.30729px -1.5136px 0px, -0.421592px -1.95506px 0px, 0.567324px -1.91785px 0px,1.41734px -1.41108px 0px, 1.92034px -0.558831px 0px;'
            letterSpacing='10px'
            h='25vh'
          >
            УКУЛЕЛЕ
          </Text>
          <Text color='rgba(202, 163, 201, 1)' fontSize='2em' alignSelf='end'>
            найди себя в музыке
          </Text>
        </Flex>
        <ButtonInOrWithoutFrame
          content={'каталог'}
          fontSize='2em'
          border='none'
          w='13%'
        ></ButtonInOrWithoutFrame>
      </Flex>

      {/* кнопки */}
      {/* <Flex justifyContent='space-evenly'>
        {type.map(
          // объект в функции map можно называть как угодно, например ukulele
          // так становится понетянее, с какими данными работаешь
          (ukulele) => (
            <ButtonInOrWithoutFrame
              key={ukulele}
              content={ukulele}
              fontSize={'5xl'}
            />
          )
        )}
      </Flex>
      <Spacer p='20px' />
      <Flex justifyContent='space-evenly'>
        {test1.map((e) => (
          <ButtonInOrWithoutFrame
            // передаваить как ключ следует уникальное значение строки или уникальный номер, но !!! не позицию в массиве
            // тогда реакт все компененты сможет отрисовать
            key={e.content + 'test1'}
            content={e.content}
            fontSize={'3xl'}
            border={'none'}
            pt={'0.4em'}
            pb={'0.4em'}
            w={'12%'}
          />
        ))}
      </Flex> */}

      {/* селекторы */}
      {/* <Flex justifyContent='space-between' px='7vw'>
        <CustomSelect
          options={toSortBy}
          isMulti={false}
          defaultValue={toSortBy[0]}
        />
        <CustomSelect
          options={housingMaterial}
          placeholder={'Материал корпуса'}
        />
        <CustomSelect options={neckMaterial} placeholder={'Материал грифа'} />
      </Flex>
      <Flex justifyContent='space-evenly' px='7vw'>
        <CustomSelect options={brand} placeholder={'Бренд'} />
        <CustomSelect options={finishing} placeholder={'Отделка'} />
        <CustomSelect options={color} placeholder={'Цвет'} />
      </Flex> */}

      {/* карточки товара в каталоге */}
      {/* <Flex justifyContent='center' flexWrap='wrap' px='5%'>
        {database.map((e) => (
          <ProductInTheCatalog
            // передаваить как ключ следует уникальное значение строки или уникальный номер, но !!! не позицию в массиве
            // тогда реакт все компененты сможет отрисовать
            key={e.itemNumber + 'card'}
            header={e.header}
            price={e.price}
            availability={e.availability}
            itemNumber={e.itemNumber}
            content={e.shortDescription}
            img={e.img}
          />
        ))}
      </Flex> */}
    </ChakraProvider>
  )
}
