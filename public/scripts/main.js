import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll(".check")
const cancelButton = document.querySelector(".cancel")
const deleteButtons = document.querySelectorAll(".delete")

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

const form = document.querySelector(".modal form")
const roomId = document.querySelector("#room-id").dataset.id






// Catch all 'check' elements and open the modal at the click.
checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

/* Catch Cancel button from modal and close it.*/
cancelButton.addEventListener("click", event => {
    event.preventDefault()
    modal.close()
})

//Catch all delete buttons and open the modal at the click.
deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

// Function with all modal actions.
function handleClick(event, check = true){
    event.preventDefault()
    const form = document.querySelector(".modal form")
    const text = check ? "Marcar como lida" : "Excluir"
    const text2 = check ? "Sim" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id
    console.log(questionId)

    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    modalButton.innerHTML = `${text2}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()

}