(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-main-open]'),
    openModalBtnsec: document.querySelector('[data-modal-main-opensec]'),
    openModalBtnthird: document.querySelector('[data-modal-main-openthird]'),
    closeModalBtn: document.querySelector('[data-modal-main-close]'),
    modal: document.querySelector('[data-main-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnsec.addEventListener('click', toggleModal);
  refs.openModalBtnthird.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
