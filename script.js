"use strict";

// ELEMENTS
const formSubscribe = document.querySelector(".form__subscribe");
const inputEmail = document.querySelector("#input-email");

const labelInvalid = document.querySelector(".label__email--invalid");

const cardEl = document.querySelector(".card");
const messageEl = document.querySelector(".message__success");
const btnDismiss = document.querySelector(".btn__dismiss");
const messageEmail = document.querySelector(".email__message--send-to");

////////////////////////////////

// HANDLE INPUT VALIDATION
const renderEmailError = (e) => {
  e?.preventDefault();

  labelInvalid.classList.remove('hidden');
  inputEmail.classList.add('input__error');
};

const removeEmailError = () => {
  labelInvalid.classList.add('hidden');
  inputEmail.classList.remove('input__error');
};

const submitForm = (e) => {
  e.preventDefault();
  const email = inputEmail.value;

  //   Validating Form Input
  if (!email) {
    renderEmailError();
  } else {
    removeEmailError();
    displayMessage(email);
  }

  //   Clear Input Fields
  inputEmail.value = "";
};

inputEmail.addEventListener("invalid", renderEmailError);
formSubscribe.addEventListener("submit", submitForm);

// SUCCESS MESSAGE
const displayMessage = (eml) => {
  messageEmail.textContent = eml;

  cardEl.classList.add('hidden');
  messageEl.classList.remove('hidden');
};
const hideMessage = () => {
  cardEl.classList.remove('hidden');
  messageEl.classList.add('hidden');
};

btnDismiss.addEventListener("click", hideMessage);
