"use strict";

// ELEMENTS

const formSubscribe = document.querySelector(".form__subscribe");
const inputEmail = document.querySelector("#input__email");

const labelInvalid = document.querySelector(".label__input--invalid");

const imgIllustration = document.querySelector(".img__illustration");

const mainEl = document.querySelector("main");
const messageEl = document.querySelector(".message__success");
const btnHideMessage = document.querySelector(".btn__message");
const messageEmail = document.querySelector(".message__email");
////////////////////////////////

// IMAGE SETTING
const setImgURL = () => {
  const changeImg = () => {
    imgIllustration.src =
      window.innerWidth < 769
        ? imgIllustration.dataset.mobile
        : imgIllustration.dataset.desktop;
  };

  window.addEventListener("resize", changeImg);

  changeImg();
};
setImgURL();

// HANDLE INPUT VALIDATION
const renderEmailError = (e) => {
  e?.preventDefault();

  labelInvalid.style.display = "inline";
  inputEmail.style.borderColor = "var(--color-error)";
};

const removeEmailError = () => {
  labelInvalid.style.display = "none";
  inputEmail.style.borderColor = "var(--first-color)";
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

  mainEl.style.display = "none";
  messageEl.style.display = "flex";
};
const hideMessage = () => {
  mainEl.style.display = "flex";
  messageEl.style.display = "none";
};

btnHideMessage.addEventListener("click", hideMessage);
