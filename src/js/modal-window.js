(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-main-open]'),
    closeModalBtn: document.querySelector('[data-modal-main-close]'),
    modal: document.querySelector('[data-main-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
