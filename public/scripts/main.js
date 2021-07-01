import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll(".check")
const cancelButton = document.querySelector(".cancel")
const deleteButtons = document.querySelectorAll(".delete")

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")


/* Catch all 'check' elements and open the modal at the click. */
checkButtons.forEach(button => {
    button.addEventListener("click", event => {
        modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Confirma que deseja marcar esta pergunta como lida?"
        modalButton.innerHTML = "Sim, marcar"
        modal.colorBlue()
        modal.open()
    })
})

/* Catch Cancel button from modal and close it.*/
cancelButton.addEventListener("click", event => {
    modal.close()
})

/* Catch all delete buttons and open the modal at the click. */
deleteButtons.forEach(button => {
    button.addEventListener("click", event => {
        modalTitle.innerHTML = "Excluir esta pergunta"
        modalDescription.innerHTML = "Confirma que deseja excluir esta pergunta?"
        modalButton.innerHTML = "Sim, excluir"
        modal.colorRed()
        modal.open()
    })
})