const MINIMUM_DESC_LENGTH = 20;
const MAXIMUM_DESC_LENGTH = 140;

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__text'
}, true);

const validateDescription = (element) => element.length <= MAXIMUM_DESC_LENGTH && MINIMUM_DESC_LENGTH <= element.length;

pristine.addValidator(
  form.querySelector('.text__description'),
  validateDescription
);

export {pristine};
