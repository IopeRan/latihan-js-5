function sayHi(name) {
    document.writeln(`<p>Hi ${name}</p>`);
}

sayHi("Erlang");

const say = sayHi;

say("Erlang");

// Function di parameter

function giveMeName(callback) {
    callback("Erlang");
}

giveMeName(sayHi);
giveMeName(say);