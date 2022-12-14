        //program intent
        var nome = prompt("qual é seu nome? ")
        show("Bem vindo ao calculador IMC " + nome)

        var peso = parseFloat(prompt("informe seu peso: "));
        var altura= parseFloat(prompt("informe sua altura: "));

        var IMC = peso/(altura**2);


        show("seu IMC é : " + IMC);

        function result(){
            if(IMC >= 18.5 & IMC < 35){
                show("peso ideal")
            }
            else if(IMC > 35){
                show("acima do peso")
            };
            if(IMC < 18.5){
                show("abaixo do peso")
            };
        };
        result()