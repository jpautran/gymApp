const formDelete = document.querySelector("#form-delete");

formDelete.addEventListener("submit", function(event) {
    const confirmation = confirm("Deseja realmente deletea?");
    if(!confirmation) {
        event.preventDefault();
    }
});