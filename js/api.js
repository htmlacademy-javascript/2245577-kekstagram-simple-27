const GET_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess, onError) => {
  fetch(GET_URL)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} - ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => onError('Произошла ошибка. Попробуйте повторить позже.'));
};

const sendData = (onSuccess, showMessage, body) => {
  fetch(SEND_URL,
    {
      method: 'POST',
      body: body
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showMessage('Success');
      } else {
        showMessage('Error1');
      }
    })
    .catch(() => {
      showMessage('Error2');
    });
};

export { getData, sendData };

