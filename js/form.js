import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { pristine } from './validate.js';

const userForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const imgButtonSubmit = document.querySelector('.img-upload__submit');
const sliderElement = imgUploadOverlay.querySelector('.effect-level__slider');
const imageScale = imgUploadOverlay.querySelector('[data-preview-image="image"]');
const scaleField = imgUploadOverlay.querySelector('.scale__control.scale__control--value');
const pictureEffectButtons = imgUploadOverlay.querySelectorAll('.effects__radio');
const textArea = imgUploadOverlay.querySelector('.text__description');

const DefaultValues = {
  NOTATION: 10,
  SCALE_VALUE: 100,
  TRANSFORM_SCALE: 1
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseImageEditingForm();
  }
};

const onShowModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

uploadFile.addEventListener('change', onShowModal);
closeButton.addEventListener('click', onCloseImageEditingForm);
closeButton.addEventListener('keydown', onPopupEscKeydown);

const onHideModal = () => {
  userForm.reset();
  resetScale();
  resetEffects();
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

uploadFile.addEventListener('change', onShowModal);
closeButton.addEventListener('click', onHideModal);

const blockSubmitButton = () => {
  imgButtonSubmit.disabled = true;
  imgButtonSubmit.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  imgButtonSubmit.disabled = false;
  imgButtonSubmit.textContent = 'Опубликовать';
};

const showMessage = (message) => {
  if (message === 'Success') {
    showSuccessMessage();
  } else {
    showErrorMessage();
  }
};

const handleSubmit = (onSuccess) => {
  userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const data = new FormData(evt.target);
      blockSubmitButton();
      sendData(onSuccess, showMessage, data);
    }
  });
};

function onCloseImageEditingForm () {
  imgUploadOverlay.classList.add('hidden');
  sliderElement.classList.add('hidden');
  imageScale.className = '';
  imageScale.style.transform = `scale(${DefaultValues.TRANSFORM_SCALE})`;
  imageScale.style.filter = '';
  scaleField.value = `${DefaultValues.SCALE_VALUE}%`;
  uploadFile.value = '';
  pictureEffectButtons[0].checked = true;
  textArea.value = '';
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

export { handleSubmit, onCloseImageEditingForm, onPopupEscKeydown, unblockSubmitButton };

