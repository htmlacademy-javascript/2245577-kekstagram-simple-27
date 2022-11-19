import { isEscapeKey } from './util.js';

const ALERT_SHOW_TIME = 5000;

const showAlert = (alert) => {
  const alertTemplate = document.querySelector(`#${alert}`).content.querySelector(`.${alert}`);
  const alertElement = alertTemplate.cloneNode(true);
  const alertButtonElement = alertElement.querySelector(`.${alert}__button`);
  const onEscapeKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      onCloseAlertElement();
    }
  };

  const onOutClick = (evt) => {
    if (evt.target.matches('section')) {
      onCloseAlertElement();
    }
  };

  function onCloseAlertElement () {
    alertElement.remove();
    alertButtonElement.removeEventListener('click', onCloseAlertElement);
    document.removeEventListener('click', onOutClick);
    document.removeEventListener('keydown', onEscapeKeyDown);
  }

  alertButtonElement.addEventListener('click', onCloseAlertElement);
  document.addEventListener('click', onOutClick);
  document.addEventListener('keydown', onEscapeKeyDown);
  document.body.appendChild(alertElement);
};

const alertMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { showAlert, alertMessage };
