let o = document.querySelector(".o");
let x = document.querySelector(".x");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#button-container button");
let messageContainer = document.querySelector("#message");
let messageTxt = document.querySelector("#message p");
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    //quando alguem clica na caixa
    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2);

        //verifica se ja tem x ou o
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            //computa a jogada
            if (player1 == player2) {
                player1++;

                if (secondPlayer == 'single-player') {
                    //função para executar a jogada
                    computerPlay();
                    player2++;
                }

            } else {
                player2++;
            }

            //checa quem venceu
            checkWinCondition();
        }
    });
}

//evento para saber se multi ou single player
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        secondPlayer = this.getAttribute("id");

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function () {
            let container = document.querySelector('#container');
            container.classList.remove("hide");
        }, 250);

    });

}

function checkEl(player1, player2) {
    if (player1 == player2) {
        //x
        el = x;
    } else {
        el = o;
        //o
    }

    return el;
}

//verifica quem ganhou
function checkWinCondition() {

    let b1 = document.getElementById("um");
    let b2 = document.getElementById("dois");
    let b3 = document.getElementById("tres");
    let b4 = document.getElementById("quatro");
    let b5 = document.getElementById("cinco");
    let b6 = document.getElementById("seis");
    let b7 = document.getElementById("sete");
    let b8 = document.getElementById("oito");
    let b9 = document.getElementById("nove");

    //horizontal1
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declaraWinner('x')
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declaraWinner('o')
        }

    }

    //horizontal2
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declaraWinner('x')
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declaraWinner('o')
        }

    }

    //horizontal3
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declaraWinner('x')
        } else if (b7Child == 'o' && b8Child == 'o' && b6Child == 'o') {
            declaraWinner('o')
        }

    }

    //vertical1
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declaraWinner('x')
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declaraWinner('o')
        }

    }

    //vertical2
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declaraWinner('x')
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declaraWinner('o')
        }

    }

    //vertical3
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declaraWinner('x')
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declaraWinner('o')
        }

    }

    //diagonal1
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declaraWinner('x')
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declaraWinner('o')
        }

    }

    //diagonal2
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declaraWinner('x')
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declaraWinner('o')
        }

    }

    //deu velha
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if (counter == 9) {
        declaraWinner('Deu Velha');
    }

}

//limpa o jogo, declara o vencedor e atualiza o placar
function declaraWinner(winner) {

    let scoreboardX = document.querySelector("#scoreboard-1")
    let scoreboardY = document.querySelector("#scoreboard-2")
    let msg = '';

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "Jogador 1 Venceu!"
    } else if (winner == 'o') {
        msg = "Jogador 2 Venceu!"
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
    } else {
        msg = "Deu Velha!"
    }

    //exibe a mensagem na tela
    messageTxt.innerHTML = msg;
    messageContainer.classList.remove("hide");

    //esconde o vencedor
    setTimeout(function () {
        messageContainer.classList.add("hide");
    }, 3000);

    //zera as jogadas
    player1 = 0;
    player2 = 0;

    //remove x e o
    let boxesToRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

}


//executa a logica de jogada do cpu
function computerPlay() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    //so preenche se estiver vazio o filho
    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);
        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
            //checagem de quantas estao preenchidas
        } else {
            filled++;
        }
    }

    if (counter == 0 && filled < 0) {
        computerPlay();
    }
}