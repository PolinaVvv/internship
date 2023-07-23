import { ChakraProvider, Flex, Spacer } from '@chakra-ui/react'

// Screens

// Components
import ButtonInAFrame from '../components/ButtonInOrWithoutFrame.jsx'
import ProductInTheCatalog from '../components/ProductInTheCatalog.jsx'
import CustomSelect from '../components/CustomSelect.jsx'
import FixedMenu from '../components/FixedMenu.jsx'

// Styles
import '../components/Styles.css'

// Fonts
import '@fontsource/poiret-one/400.css'
import theme from '../assets/fonts/theme'

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
  const test1 = [{ content: 'Применить' }, { content: 'Сбросить' }]
  return (
    <ChakraProvider theme={theme}>
      <FixedMenu id='menu' />
      <Spacer />
      {/* можно сделать через Tabs, только нужно понять как  */}
      <Flex justifyContent='space-evenly'>
        {type.map(
          // объект в функции map можно называть как угодно, например ukulele
          // так становится понетянее, с какими данными работаешь
          (ukulele) => (
            <ButtonInAFrame key={ukulele} content={ukulele} fontSize={'5xl'} />
          )
        )}
      </Flex>
      <Spacer p='20px' />
      <Flex justifyContent='space-evenly'>
        {test1.map((e) => (
          <ButtonInAFrame
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
      </Flex>
      <Spacer p='20px' />
      <Flex justifyContent='space-between' px='7vw'>
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
      <Spacer p='20px' />

      <Flex justifyContent='space-evenly' px='7vw'>
        <CustomSelect options={brand} placeholder={'Бренд'} />
        <CustomSelect options={finishing} placeholder={'Отделка'} />
        <CustomSelect options={color} placeholder={'Цвет'} />
      </Flex>
      <Spacer p='20px' />
      <Flex justifyContent='center' flexWrap='wrap' px='5%'>
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
      </Flex>
      <Spacer p='20px' />
    </ChakraProvider>
  )
}
