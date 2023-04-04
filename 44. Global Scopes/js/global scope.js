    // global scope
    let counter = 0;

    // global scope
    function hitMe() {
        // local scope hitMe
        counter++;
    }

    // global scope
    function other() {
        // local scope other
    }

    hitMe();
    hitMe();

    console.info(counter);

    function first() {
        // local scope first
        let firstVariable = "First"; 
    }

    function second() {
        // local scope second
        let secondVariable = "Second";
        console.info(firstVariable); // ERROR
    }

    first();
    second();

    console.info(firstVariable); // ERROR
    console.info(secondVariable); // ERROR