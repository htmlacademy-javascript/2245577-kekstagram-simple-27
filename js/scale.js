const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

const setPictureScale = () => {
  const currentValue = parseFloat(scaleValue.value);
  imgPreview.style.transform = `scale(${currentValue / MAX_SCALE})`;
};

const onDecreaseScaleButtonClick = () => {
  const currentScaleValue = parseFloat(scaleValue.value);
  if (currentScaleValue > MIN_SCALE) {
    scaleValue.value = `${currentScaleValue - SCALE_STEP}%`;
    setPictureScale();
  }
};

const onIncreaseScaleButtonClick = () => {
  const currentScaleValue = parseFloat(scaleValue.value);
  if (currentScaleValue < MAX_SCALE) {
    scaleValue.value = `${currentScaleValue + SCALE_STEP}%`;
    setPictureScale();
  }
};

const resetScale = () => {
  setPictureScale(DEFAULT_SCALE);
};

smallerButton.addEventListener('click', onDecreaseScaleButtonClick);
biggerButton.addEventListener('click', onIncreaseScaleButtonClick);

export { resetScale };
