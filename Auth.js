const auth = function(req, res, next) {
    const user = req.params.user
    if (user.toLocaleLowerCase() == 'ahmad') {
        console.log(user);
        next()
        return
    }
    res.send('sorry you are not aurthorized')
}
export default auth