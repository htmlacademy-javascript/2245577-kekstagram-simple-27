import './form.js';
import './effects.js';
import './form.js';
import './scale.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { renderPictures } from './render.js';
import { handleSubmit, onCloseImageEditingForm } from './form.js';

getData(renderPictures, showAlert);
handleSubmit(onCloseImageEditingForm);
