const PICTURES_COUNT = 25;

const LikesCount = {
MIN: 15,
MAX: 200,
};

const CommentsCount = {
MIN: 0,
MAX: 200,
};

const photoDescription = [
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
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(photoDescription),
  likes: getRandomPositiveInteger(LikesCount.MIN,  LikesCount.MAX),
  comments: getRandomPositiveInteger(CommentsCount.MIN, CommentsCount.MAX),
});

 const photoSimulation = () =>
 Array.from({ length: PICTURES_COUNT }, (_, index) =>
 createPhoto(index));
 
console.log(photoSimulation);
