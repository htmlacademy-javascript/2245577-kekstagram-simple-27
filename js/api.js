// const getData = (onSuccess, onFail) => fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
//   .then((response) => response.json())
//   .then((pictures) => {
//     onSuccess(pictures);
//   })
//   .catch(() => {
//     onFail('Ошибка загрузки. Пожалуйста, обновите страницу');
//   });

// const sendData = (onSuccess, onFail, body) => {
//   fetch('https://27.javascript.pages.academy/kekstagram-simple',
//     {
//       method: 'POST',
//       body,
//     }
//   )
//     .then((response) => {
//       if (response.ok) {
//         return onSuccess();
//       }

//       onFail();
//     })
//     .catch(onFail);
// };

// export {getData, sendData};

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

