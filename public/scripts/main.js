import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll(".check")
const cancelButton = document.querySelector(".cancel")

checkButtons.forEach(button => {
    button.addEventListener("click", event => {
    modal.open()
    })
})

cancelButton.addEventListener("click", event => {
    modal.close()
})