// Реализация модального окна
import GraphModal from "graph-modal";
const modal = new GraphModal();

//! событие на отправку формы (cf7)
document.addEventListener(
  "wpcf7mailsent",
  function () {
    modal.open("modal-success");
  },
  false
);
