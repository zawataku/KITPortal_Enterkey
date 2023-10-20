document.body.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        return func1();
    }
});

var func1 = function () {
    document.getElementById("StudentLoginBtn").click();
}