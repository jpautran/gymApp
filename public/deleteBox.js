const formDelete = document.querySelector("#form-delete");

formDelete.addEventListener("submit", function(event) {
    const confirmation = confirm("Deseja realmente deletar?");
    if(!confirmation) {
        event.preventDefault();
    }
});