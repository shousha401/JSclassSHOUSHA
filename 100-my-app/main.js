import { loadData, saveData } from './storage.js';
import { processUser } from './user.js';
import { updateDOM, initializeForm, addFormSubmitListener } from './dom.js';

let userData = loadData('userData');

initializeForm(userData);
updateDOM(userData);
addFormSubmitListener(userData);