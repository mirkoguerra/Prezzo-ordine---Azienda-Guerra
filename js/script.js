$(document).ready(function(){

  // avviene tutto al click, quindi posso inserire tutto il mio codice qui dentro
  $("#button").click(function() {

    // array di oggetti, di cui, per ognuno, si esplicitano il nome del vino, il suo prezzo unitario e la quantità desiderata
    const wines = [
      {
        nome: "Friulano",
        prezzo: 9,
        quantità: $("#friulano").val()
      },
      {
        nome: "Sauvignon",
        prezzo: 9,
        quantità: $("#sauvignon").val()
      },
      {
        nome: "Pinot Grigio",
        prezzo: 9,
        quantità: $("#pGrigio").val()
      },
      {
        nome: "Ribolla Gialla",
        prezzo: 9,
        quantità: $("#ribolla").val()
      },
      {
        nome: "Malvasia",
        prezzo: 9,
        quantità: $("#malvasia").val()
      },
      {
        nome: "Passion",
        prezzo: 11,
        quantità: $("#passion").val()
      },
      {
        nome: "Verduzzo",
        prezzo: 9,
        quantità: $("#verduzzo").val()
      },
      {
        nome: "Ribolla Gialla Spumantizzata Metodo Charmat",
        prezzo: 9.5,
        quantità: $("#charmat").val()
      },
      {
        nome: "Giuliet - Ribolla Gialla Spumantizzata Metodo Classico",
        prezzo: 15,
        quantità: $("#giuliet").val()
      },
      {
        nome: "Merlot",
        prezzo: 9,
        quantità: $("#merlot").val()
      },
      {
        nome: "Cabernet Franc",
        prezzo: 9,
        quantità: $("#cabernet").val()
      },
      {
        nome: "Refosco",
        prezzo: 11,
        quantità: $("#refosco").val()
      },
      {
        nome: "Pignolo",
        prezzo: 18,
        quantità: $("#pignolo").val()
      },
      {
        nome: "Gritul",
        prezzo: 17,
        quantità: $("#gritul").val()
      },
      {
        nome: "Magnum - Ribolla Gialla Spumantizzata Metodo Charmat",
        prezzo: 25,
        quantità: $("#magnumCharmat").val()
      },
      {
        nome: "Magnum - Giuliet",
        prezzo: 35,
        quantità: $("#magnumGiuliet").val()
      },
      {
        nome: "Magnum - Merlot",
        prezzo: 22,
        quantità: $("#magnumMerlot").val()
      },
      {
        nome: "Magnum - Gritul",
        prezzo: 40,
        quantità: $("#magnumGritul").val()
      }
    ];

    // switch fra le schermate di input e output
    $("#input").addClass("invisible");
    $("#output").addClass("visible");

    // verifico che ci sia almeno un valore valido
    let matched = 0;
    for (let i = 0; i < wines.length; i++) {
      if ((wines[i].quantità > 0) && (wines[i].quantità < 100000)) {
        matched = matched + 1;
      }
    }

    if (matched == 0) {
    $("#total-price").append("Inserire delle cifre per poter effettuare l'ordine");
    } else {
      // verificato che ci sia almeno un valore valido per procedere all'ordine, eseguo i calcoli
      let totalPrice = 0;
      let list = $("#sub-container");
      for (let i = 0; i < wines.length; i++) {
        if ((wines[i].quantità > 0) && (wines[i].quantità < 100000)) {
          wines[i].quantità = Math.ceil(wines[i].quantità); // arrotondo per eccesso un eventuale numero di bottiglie ordinate non intero, in quanto, citando il produttore, "il corpo non deve mai soffrire"
          totalPrice = totalPrice + (wines[i].quantità * wines[i].prezzo); // calcolo del prezzo totale dell'ordine

          list.append(`<p>${wines[i]["nome"]}: ${wines[i]["quantità"]} bottiglie - ${wines[i]["quantità"]*wines[i]["prezzo"]}€</p>`);
        }
      }
      // inserimento del prezzo totale
      $("#total-price").append(`Il prezzo totale dell'ordine è: ${totalPrice}€`);
      $("#recap").append("Riepilogo dell'ordine:");
    }

  });

});
