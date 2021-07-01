
export default function Modal(){
    function open(){
        document.querySelector('.modal-wrapper').classList.add('active')
    }
    function close(){
        document.querySelector('.modal-wrapper').classList.remove('active')
    }

    function colorBlue (){
        document.querySelector('.modal-wrapper button').classList.remove('red')   
    }

    function colorRed (){
        document.querySelector('.modal-wrapper button').classList.add('red')   
    }

    return {
        open,
        close,
        colorBlue,
        colorRed
    }
}
