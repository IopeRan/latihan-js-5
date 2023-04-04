    // Function di dalam Function bisa di sebut dengan inner
    function outer() {
        
        function inner() {
        console.info("Inner");
    }

    inner();
    inner();
}
    // tidak akan muncul di console
    outer();
    inner();