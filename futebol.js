        //program intent
        var victories = parseFloat(prompt("insert how many you won: "));
        var draws = parseFloat(prompt("stalemates: "));

        
        var total = (victories*3)+draws;
        show(total);

        var lastyear = 100;

        if (total>lastyear) show("your time is better than before");
        if (total==lastyear) show("same as last year");
        if (total<lastyear) show("your time is worse than before");

        if (total >= lastyear){
            show("continue")
        }
        else{
            show("eliminado")
        }