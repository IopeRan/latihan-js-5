function* createNames() {
    yield "Erlang";
    yield "Andriyanputra";
}

const names = createNames();
for (const name of names) {
    console.info(name);
}

function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1 ) {
            yield i;
        }
    }
}

const numbers = buatGanjil(50);
for (const number of numbers) {
    console.info(number);
}