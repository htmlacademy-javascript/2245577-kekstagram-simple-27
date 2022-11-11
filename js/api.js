const getData = (onSuccess, onFail) => fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((pictures) => {
    onSuccess(pictures);
  })
  .catch(() => {
    onFail('Ошибка загрузки. Пожалуйста, обновите страницу');
  });

const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }

      onFail();
    })
    .catch(onFail);
};

export {getData, sendData};
