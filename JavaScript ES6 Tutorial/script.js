window.onload = function () {

    // const pi = 3.142;
    // console.log(pi);

    // var calcArea = (r) => {
    //     alert("The area is: " + pi * r * r);
    //     alert(`I have ${10 + 2} cats and my pie has the area of ${pi * r * r}`)
    // }

    // calcArea(5);

    // var email = {
    //     message: "hello there",
    //     mail(sender) {
    //         var _this = this;
    //         window.setInterval(function () {
    //             alert(`${sender} wants to say ` + _this.message);
    //         }, 5000);
    //     }
    // }

    // email.mail("Michael");

    function* gen() {
        alert("hi");
        yield;
        alert("hello");
        yield;
        alert("hey");
    }

    var generator = gen();
    generator.next();
    generator.next();
    generator.next();
}