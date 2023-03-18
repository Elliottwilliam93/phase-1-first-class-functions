function receivesAFunction(callback) {
    callback (name)
    return callback
}

 function returnsANamedFunction(name) {
    name = returnsANamedFunction
    return name
 }

function returnsAnAnonymousFunction() {
    return (function () {
        return "hey"
    })
}