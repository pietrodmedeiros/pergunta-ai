module.exports = {
    index(req, res){
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.actions
        const password = req.body.password

        console.log(`room = S${roomId} questionId = ${questionId} action = ${action} pass = ${password}`)
    }
}