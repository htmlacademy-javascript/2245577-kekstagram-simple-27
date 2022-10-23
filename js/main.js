function getRandomPositiveInteger(a, b) {

  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}

const PICTURES_COUNT = 25;

let photoDescription = [
  'На пляже',
  'Сегодня отличная погода',
  'Зацените какая  картина у меня получилась',
  'Пересел на привильное питание',
  'Вечериний турнир по Fifa',
  'С любимым человеком',
  'Новый ремонт в квартире!',
  'Утренняя пробежка по парку',
  'Обучение программированию)',
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(photoDescription),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

let photoSimulation = Array.from({ length: createPhoto }, (x, index) => createPhoto(index));
console.log(photoSimulation);
