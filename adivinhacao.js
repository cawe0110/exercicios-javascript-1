        //program intent
        function skipline(){
            document.write("<br><br>");
        }
        function show(frase){
            document.write(frase);
            skipline();
        }

        function adivinhe(){
        var number = Math.round(Math.random() * 10);
        var closeminus = parseInt(number-1);
        var closeplus = parseInt(number+1);
        var guess = parseInt(prompt("digite um numero entre 0 e 10"));

        if (guess == number){
            show("Voce Acertou!!!!")
        }
        else{
            show("Errouu!!")
        };

        show("O numero é " + number); 
        show("Você botou o numero "+ guess);     
}

