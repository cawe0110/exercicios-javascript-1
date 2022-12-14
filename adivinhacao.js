        //program intent
        var number = parseInt(5)
        var closeminus = parseInt(number-1)
        var closeplus = parseInt(number+1)
        var guess = parseInt(prompt("digite um numero entre 0 e 10"))

        if (guess == number){
            show("Voce Acertou!!!!")
        }
        if (guess == number+1 || guess == number-1 ){
            show("voce esta muito perto...")
        }
        if (guess == 10 || guess == 0){
            show("errou feio errou rude")
        }
        else if(guess != 0 & 10 || guess != number){
            show("errou")
        }