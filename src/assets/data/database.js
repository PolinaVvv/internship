import img1 from '../imgs/img1.svg'
import img2 from '../imgs/img2.svg'
import img3 from '../imgs/img3.jpg'

export const database = [
  {
    itemNumber: 1,
    header: 'TERRIS UK-150 V',
    availability: 'в наличии',
    price: '2100',
    shortDescription:
      'Форма корпуса - сопрано, материал - АБС пластик, цвет - розовый матовый, чехол в комплекте',
    fullDescription: '-',
    type: 'сопрано',
    housingMaterial: 'красное дерево',
    neckMaterial: 'искусственное черное дерево',
    brand: 'FLIGHT',
    finishing: 'глянцевый лак',
    color: 'розовый',
    img: img1,
  },
  {
    itemNumber: 2,
    header: 'KALA MK-SD/ LBLBURST MAKALA',
    availability: 'нет в наличии, под заказ!',
    price: '2500',
    shortDescription:
      'Укулеле сопрано, цвет Light Blue Burst, гриф - махагони, накладка грифа - орех, количество ладов - 12',
    fullDescription: '-',
    type: 'сопрано',
    housingMaterial: 'липа',
    neckMaterial: 'клен',
    brand: 'KALA',
    finishing: 'комбинированные покрытия',
    color: 'голубой',
    img: img2,
  },
  {
    itemNumber: 3,
    header: 'FLIGHT TUS ALYONA SHVETZ',
    availability: 'нет в наличии, под заказ!',
    price: '4090',
    shortDescription:
      'Укулеле Travel, сопрано, подписная укулеле Алены Швец, пластик',
    fullDescription: '-',
    type: 'сопрано',
    housingMaterial: 'пластик',
    neckMaterial: 'орех',
    brand: 'FLIGHT',
    finishing: 'матовый лак',
    color: 'розовый',
    img: img3,
  },
  {
    itemNumber: 4,
    header: 'FLIGHT TUS 35 DB',
    availability: 'в наличии',
    price: '3250',
    shortDescription:
      'Укулеле Travel, сопрано, синяя, пластик. Чехол в комплекте',
    fullDescription: '-',
    type: 'тенор',
    housingMaterial: 'сапеле',
    neckMaterial: 'орех',
    brand: 'FLIGHT',
    finishing: 'полуглянцевый лак',
    color: 'синий',
    img: img3,
  },
  {
    itemNumber: 5,
    header: 'Populele 2 Black',
    availability: 'в наличии',
    price: '15900',
    shortDescription:
      'Умное укулеле, материал - композитный карбон, цвет - чёрный',
    fullDescription: '-',
    type: 'концерт',
    housingMaterial: 'акация',
    neckMaterial: 'палисандр',
    brand: 'Populele',
    finishing: 'полуглянцевый лак',
    color: 'чёрный',
    img: img3,
  },
  {
    itemNumber: 6,
    header: 'Populele 2 Black',
    availability: 'в наличии',
    price: '15900',
    shortDescription:
      'Умное укулеле, материал - композитный карбон, цвет - чёрный',
    fullDescription: '-',
    type: 'баритон',
    housingMaterial: 'акация',
    neckMaterial: 'ричлайт',
    brand: 'Populele',
    finishing: 'полуглянцевый лак',
    color: 'чёрный',
    img: img3,
  },
]
export const type = database.reduce((acc, item) => {
  if (acc.includes(item.type)) {
    return acc
  }
  return [...acc, item.type]
}, [])

export const housingMaterial = database.reduce((acc, item) => {
  if (
    acc.includes({ value: item.housingMaterial, label: item.housingMaterial })
  ) {
    // console.log(acc[1])
    return acc // если значение уже есть, то просто возвращаем аккумулятор
  }
  // console.log(acc[0])

  return [...acc, { value: item.housingMaterial, label: item.housingMaterial }] // добавляем к аккумулятору и возвращаем новый аккумулятор
}, [])
// console.log(housingMaterial)

export const neckMaterial = database.reduce((acc, item) => {
  if (acc.includes({ value: item.neckMaterial, label: item.neckMaterial })) {
    return acc
  }
  return [...acc, { value: item.neckMaterial, label: item.neckMaterial }]
}, [])

export const brand = database.reduce((acc, item) => {
  if (acc.includes({ value: item.brand, label: item.brand })) {
    return acc
  }
  return [...acc, { value: item.brand, label: item.brand }]
}, [])

export const finishing = database.reduce((acc, item) => {
  if (acc.includes({ value: item.finishing, label: item.finishing })) {
    return acc
  }
  return [...acc, { value: item.finishing, label: item.finishing }]
}, [])

export const color = database.reduce((acc, item) => {
  if (acc.includes({ value: item.color, label: item.color })) {
    return acc
  }
  return [...acc, { value: item.color, label: item.color }]
}, [])

export const toSortBy = [
  { value: 'По популярности', label: 'По популярности' },
  { value: 'Сначала дороже', label: 'Сначала дороже' },
  { value: 'Сначала дешевле', label: 'Сначала дешевле' },
]
