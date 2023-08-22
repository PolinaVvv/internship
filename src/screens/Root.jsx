import {
  Flex,
  Text,
  Image,
  // Box,
  // Grid,
  // Button,
} from '@chakra-ui/react'

// Screens

// Components
import ButtonInOrWithoutFrame from '../components/ButtonInOrWithoutFrame.jsx'
// import ProductInTheCatalog from '../components/ProductInTheCatalog.jsx'
// import CustomSelect from '../components/CustomSelect.jsx'
import Header from '../components/Header.jsx'
import ButtonSale from '../components/ButtonSale.jsx'
import ButtonCatalog from '../components/ButtonCatalog.jsx'

// Fonts
import '@fontsource/poiret-one/400.css'

// Img
import ellipse1 from '../assets/imgs/root/ellipse1.svg'
import ellipse2 from '../assets/imgs/root/ellipse2.svg'
import ellipse3 from '../assets/imgs/root/ellipse3.svg'
import ellipse5 from '../assets/imgs/root/ellipse5.svg'
import ellipsseRect from '../assets/imgs/root/ellipseRect.svg'
import Polygon1 from '../assets/imgs/root/Polygon1.svg'
import zigzag1 from '../assets/imgs/root/zigzag1.svg'
import sale1 from '../assets/imgs/root/sale1.svg'
import sale2 from '../assets/imgs/root/sale2.svg'
import sale3 from '../assets/imgs/root/sale3.svg'
import ellipse8 from '../assets/imgs/root/ellipse8.svg'
import rectangle1 from '../assets/imgs/root/rectangle1.svg'
import bg1 from '../assets/imgs/root/bg1.svg'
import bg2 from '../assets/imgs/root/bg2.svg'
import bg3 from '../assets/imgs/root/bg3.svg'
import catalogS from '../assets/imgs/root/catalogS.svg'
import catalogC from '../assets/imgs/root/catalogC.svg'
import catalogT from '../assets/imgs/root/catalogT.svg'
import catalogB from '../assets/imgs/root/catalogB.svg'
import doubleEllipse from '../assets/imgs/root/doubleEllipse.svg'

// Data
// import {
//   database,
//   housingMaterial,
//   type,
//   neckMaterial,
//   brand,
//   finishing,
//   color,
//   toSortBy,
// } from '../assets/data/database.js'
import Footer from '../components/Footer.jsx'

export default function Root() {
  // const test1 = [{ content: 'Применить' }, { content: 'Сбросить' }]
  const contentForCatalog = [
    {
      content: 'СОПРАНО',
      img: catalogS,
      transform: 'scale(1.2) translate(400px,35%)',
      left: '15vw',
      top: '30vh',
      boxSize: 'sm',
      leftImg: '-17vw',
      topImg: '-22vh',
    },
    {
      content: 'КОНЦЕРТ',
      img: catalogC,
      transform: 'scale(1.2) translate(-300px,30%)',
      left: '-5vw',
      top: '7vh',
      boxSize: 'xs',
      leftImg: '10vw',
      topImg: '-3vh',
    },
    {
      content: 'ТЕНОР',
      img: catalogT,
      transform: 'scale(1.2) translate(250px,-40%)',
      left: '23vw',
      top: '40vh',
      boxSize: 'md',
      leftImg: '-5vw',
      topImg: '-25vh',
    },
    {
      content: 'БАРИТОН',
      img: catalogB,
      transform: 'scale(1.2) translate(-300px,-90%)',
      left: '-10vw',
      top: '-3vh',
      boxSize: '',
      leftImg: '10vw',
      topImg: '',
    },
  ]
  return (
    <>
      {/* "hero bg section" */}
      <Image
        src={ellipse1}
        position='absolute'
        // zIndex='-1000'
        boxSize='180px'
        w='min'
        left='24vw'
        top='10vh'
      />
      <Image
        src={ellipse2}
        boxSize='xs'
        position='absolute'
        zIndex='-999'
        w='min'
        left='5vw'
        top='50vh'
      />
      <Image
        src={ellipse3}
        boxSize='170'
        position='absolute'
        zIndex='-999'
        w='min'
        left='37vw'
        mt='44vh'
      />
      <Image
        src={ellipse5}
        position='absolute'
        boxSize='3xs'
        w='min'
        left='60vw'
      />
      <Image
        src={ellipsseRect}
        position='absolute'
        // zIndex='999'
        boxSize='xl'
        w='min'
        left='60vw'
        top='40vh'
      />
      <Image
        src={zigzag1}
        position='absolute'
        // zIndex='999'
        boxSize='100'
        w='min'
        left='10vw'
        top='25vh'
      />
      <Image
        src={Polygon1}
        position='absolute'
        // zIndex='999'
        boxSize='2xs'
        w='min'
        left='27vw'
        top='80vh'
      />
      {/* end "hero bg section" */}
      <Header />

      {/* "home hero section" */}
      <Flex direction='column' align='center' pt='10vh'>
        <Text
          color='rgba(168, 127, 161, 1)'
          fontWeight='700'
          fontSize='2em'
          mb='5vh'
        >
          UKU
        </Text>
        <Flex direction='column' mb='20vh'>
          <Text
            color='rgba(202, 163, 201, 1)'
            fontWeight='700'
            fontSize='10em'
            style={{
              WebkitTextStroke: '10px',
            }}
            letterSpacing='20px'
            maxH='25vh'
          >
            УКУЛЕЛЕ
          </Text>
          <Text color='rgba(202, 163, 201, 1)' fontSize='2em' alignSelf='end'>
            найди себя в музыке
          </Text>
        </Flex>
        <ButtonInOrWithoutFrame
          content={'каталог'}
          fontSize='3em'
          border='none'
          w='13%'
        ></ButtonInOrWithoutFrame>
      </Flex>
      {/* end "home hero section" */}
      <Flex pt='35vh'>
            {/* "sale bg section" */}
        <Image
          src={zigzag1}
          transform='rotate(100deg)'
          position='absolute'
          zIndex='-999'
          boxSize='150'
          w='min'
          left='75vw'
          top='120vh'
        />
        <Image
          src={ellipse8}
          position='absolute'
          zIndex='-999'
          boxSize='200'
          w='min'
          left='67vw'
          top='160vh'
        />
        <Image
          src={rectangle1}
          position='absolute'
          zIndex='-999'
          boxSize='3xs'
          w='min'
          left='15vw'
          // top='188vh'
          top='calc(100vh + 21%)'
        />
        <Image
          src={bg1}
          position='absolute'
          zIndex='-1000'
          boxSize='5xl'
          left='22vw'
          top='75vh'
        />
        <Image
          src={bg2}
          position='absolute'
          zIndex='-1000'
          boxSize='5xl'
          left='-20vw'
          top='110vh'
        />
        <Image
          src={bg3}
          position='absolute'
          zIndex='-1000'
          boxSize='5xl'
          left='50vw'
          top='125vh'
        />
         {/* end "sale bg section" */}
         {/* "sale content section" */}
        <Text
          color='rgba(202, 163, 201, 1)'
          fontWeight='700'
          fontSize='10em'
          style={{
            WebkitTextStroke: '10px',
          }}
          letterSpacing='20px'
          pl='10vw'
        >
          SALE
        </Text>
        <ButtonSale
          name='SOPRANO TERRIS UK-150 V'
          price={'2100'}
          oldPrice={'3100'}
          img={sale2}
          transform='scale(1.2) translate(-180px,30%)'
          left='10vw'
        />
        
      </Flex>

      <Flex>
        <ButtonSale
          name='SOPRANO
          JORDANI 21-11 GREEN'
          price={'2500'}
          oldPrice={'3500'}
          img={sale1}
          transform='scale(1.2) translate(300px,0%)'
          left='5vw'
          top='-25vh'
        />
        <ButtonSale
          name='SOPRANO
          KALA MK-SD/
          LBLBURST MAKALA'
          price={'2100'}
          oldPrice={'3100'}
          img={sale3}
          transform='scale(1.2) translate(-300px,-50%)'
          left='8vw'
          flip={true}
        />
      </Flex>
        {/* end "sale content section" */}

       
      <Flex direction='column'>
        {/* "catalog bg section" */} 
        <Image
          src={zigzag1}
          position='absolute'
          zIndex='-999'
          boxSize='150'
          transform='rotate(100deg)'
          w='min'
          left='7vw'
          top='300vh'
        />
        <Image
          src={Polygon1}
          position='absolute'
          zIndex='-999'
          boxSize='2xs'
          w='min'
          left='75vw'
          top='220vh'
        />
        <Image
          src={doubleEllipse}
          position='absolute'
          zIndex='-999'
          boxSize='100'
          w='min'
          left='17vw'
          top='230vh'
        />
        {/* end "catalog bg section" */} 
        {/* "catalog content section" */} 
        <Text
          color='rgba(202, 163, 201, 1)'
          fontWeight='700'
          fontSize='10em'
          style={{
            WebkitTextStroke: '10px',
          }}
          letterSpacing='25px'
          align='center'
          pl='20vw'
        >
          КАТАЛОГ
        </Text>
        <Flex flexWrap='wrap' px='20vw'>
          {contentForCatalog.map((ukulele) => (
            <ButtonCatalog
              key={ukulele.content}
              img={ukulele.img}
              content={ukulele.content}
              transform={ukulele.transform}
              left={ukulele.left}
              top={ukulele.top}
              boxSize={ukulele.boxSize}
              leftImg={ukulele.leftImg}
              topImg={ukulele.topImg}
            />
          ))}
        </Flex>
        {/* "catalog content section" */} 
      </Flex>
      <Footer />
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
    </>
  )
}
