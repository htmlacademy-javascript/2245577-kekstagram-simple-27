import { isEscapeKey } from './util.js';
import { onPopupEscKeydown } from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const showSuccessMessage = () => {
  const successFragment = document.createDocumentFragment();
  const successElement = successTemplate.cloneNode(true);
  successFragment.append(successElement);
  document.body.append(successFragment);
  const closeButton = successElement.querySelector('.success__button');
  closeButton.addEventListener('click', () => {
    successElement.remove();
    document.removeEventListener('keydown', onSuccessEscKeydown);
  });

  document.addEventListener('keydown', onSuccessEscKeydown, { once: true });

  successElement.addEventListener('click', (evt) => {
    if(evt.target.className === 'success' && evt.currentTarget.className === 'success') {
      successElement.remove();
    }
  });

  function onSuccessEscKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successElement.remove();
    }
  }
};

const closeErrorMessage = (errorPopup) => {
  document.addEventListener('keydown', onPopupEscKeydown);
  errorPopup.remove();
};

const showErrorMessage = () => {
  const errorFragment = document.createDocumentFragment();
  const errorElement = errorTemplate.cloneNode(true);

  errorFragment.append(errorElement);
  document.body.append(errorFragment);
  const closeButton = errorElement.querySelector('.error__button');
  closeButton.addEventListener('click', () => {
    closeErrorMessage(errorElement);
    document.removeEventListener('keydown', onErrorEscKeydown);
  });

  document.addEventListener('keydown', onErrorEscKeydown, { once: true });
  document.removeEventListener('keydown', onPopupEscKeydown);
  errorElement.addEventListener('click', (evt) => {
    if(evt.target.className === 'error' && evt.currentTarget.className === 'error') {
      closeErrorMessage(errorElement);
    }
  });

  function onErrorEscKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorElement.remove();
    }
  }
};

export { showSuccessMessage, showErrorMessage };
