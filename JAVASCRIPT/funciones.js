function funciones () {
    function sumar(a, b) {
        return a + b;
    }

    const restar = function ( a, b) {
        return a - b;
    }

    console.log(sumar(1, 2))
    console.log(restar(1, 2))
    console.log(((a, b) => a / b)(10, 5));

}