const getData = (onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
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
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
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

