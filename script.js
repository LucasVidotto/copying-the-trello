function addCard(elemento) {
    const ulID = elemento.previousElementSibling.id;
    const text = prompt("Qual é a tarefa?");
    const board = document.getElementById(ulID);
    console.log(board);
    const template =
        `<li id="${new Date().getTime()}" draggable="true" ondragstart="drag(event)">
            <p>${text}</p>
            <p class="remove" onclick="removeCard(this)">x</p>
        </li>`
        ;
    board.innerHTML = board.innerHTML + template;
    /*innerHTMl recebe o html dele mesmo*/
}/*${new Date().getTime() -> utiliza para gerar ids randomicos e nunca ter o mesmo*/

function removeCard(elemento) {
    document.getElementById(elemento.parentElement.id).remove();
}

function drag(event) {
    event.dataTransfer.setData("card", event.target.id);/* salva o elemento que estou arrastando em algum lugar
    para que depois possa usar ele */
}

function over(event) {
    event.preventDefault();

}

function drop(event, id) {
    event.preventDefault();
    const target = document.getElementById(id);
    const data = event.dataTransfer.getData("card");
    const card = document.getElementById(data);
    target.appendChild(card);/* replica tudo que já tem mais o que tiver de novo
    no final*/
    event.dataTransfer.clearData(); /* depois que arrastar e soltar limpa a transição,
     o estado*/
}