

let sourceJs ={

scriptsJs: () => {

    scriptsName = ["akuma", "alisa", "asuka", "bryan",
         "claudio", "devil-jin", "dragunov", "eliza",
          "heihachi", "hwoarang", "jack-7", "jin", 
         "josie", "katarina", "kazumi", "kazuya", "king", "lars", 
         "law", "lee", "leo", "lili", "ling", "lucky-chloe", "master-raven", 
         "miguel", "nina", "paul", "shaheen", "steve", "yoshimitsu"];
    for (let i = 0; i < scriptsName.length; i++){ 

    let scriptElem = document.createElement("script");
    scriptElem.setAttribute("src", "character-data/" + scriptsName[i] + ".js");
    document.getElementsByTagName("head")[0].appendChild(scriptElem);
    
};
},

charList: () => {
        let char = [akuma, alisa, asuka, bryan,
         claudio, devilJin, dragunov, eliza,
          heihachi, hwoarang, jack7, jin, 
         josie, katarina, kazumi, kazuya, king, lars, 
         law, lee, leo, lili, ling, luckyChloe, masterRaven, 
         miguel, nina, paul, shaheen, steve, yoshimitsu]; 

    let charDetails = char.map((list) => {
        let name = list.metadata.name;
        let game = list.metadata.game;
        let moves = list.moves;
        let character = list.metadata.character;
        let gifs = list.gifs;
        
           if(list.gifs == undefined){
               let noGif = {name : name, game : game, moves: moves, character: character, gifs : "Not Available"};
             return noGif;
     }  

        return {

            name: name,
            game: game,
            moves: moves,
            character: character,
            gifs: gifs,
            
        } 
        });

        let charArray = [];
        let movesArray = [];





            
                        
            displayAkuma = () => {
                // console.log(akuma.moves.length)
                for(a=0; a < akuma.moves.length; a++){
                    // console.log(akuma.moves[a]);
                    // $('.char0').append("<p class='notation'>" + akuma.moves[a].notation + "</p>")
                    // $('.char0').append("<p class='hit-level'>" + akuma.moves[a].hit_level + "</p>")
                    // $('.char0').append("<p class='damage'>" + akuma.moves[a].damage + "</p>")
                }
             console.log(akuma.metadata.name);
            }






        for (i = 0; i < charDetails.length; i++) {
            // Entire Char List

            // console.log(charDetails[i])  
             $("#appList").append("<div id = " + charDetails[i].character + " class = 'appChar off char"+ [i] + " list-group-item' value = " + [i] + ">" + "<h4>" + charDetails[i].name + " " + "<span class='game'>" + charDetails[i].game + "</span></h4>" + "</div>");
             $('#appList').append("<ul class = 'objList' value = " + [i] + "></ul>");
             $('#appList').append("<li class = 'charMoves list-group-item' value = " + [i] + ">Moves</li>");
             $('#appList').append("<li class = 'charGifs list-group-item' value = " + [i] + ">Gifs</li>");
             charArray.push(charDetails[i]);
        }

            // Single Char

            //  $('.charMoves').on('click', (e) => {
            //  e.preventDefault()
            // console.log(this);
            // });
            // <----------------------------------------------------------------------------------------------------------------------------------->

            
            // grabMoves = (c) => {
            // for (a = 0; a < charDetails[c].moves.length; a++){
            //      console.log(charDetails[c].moves[a]);
                
            // }
            // }
            // grabMoves(2);
            // for(a=0; a < charArray.length; a++){
            //     movesArray.push(charArray[a].moves);
            // }
            
            // displayMoves = (c) => {
            //     for(b = 0; b < movesArray.length; b++)
            //     console.log(movesArray[b]);
            //     // $('.char0').append(movesArray[b][c].notation)
            // }
            // displayMoves(0);
        
             
            // displayMoves = (c) => {
            //     for(b = 0; b < movesArray.length; b++)
            //     console.log(movesArray[b][c]);
            // }
            // displayMoves(c);
        



},
    load: () => {
            $("#loading").fadeOut(1000);
            $("#home").fadeIn(500);
    },

    homeClick: () => {
        let home = document.getElementById('home');
        let app = document.getElementById('app');
        let headerBtn = document.getElementById('headerBtn');
        home.style.display="none";
        app.style.display="block";

},  
    ui: () => {
            //  $('.appChar').append("<ul class = 'objList'></ul>");
            //  $('.appChar').append("<li class = 'charMoves list-group-item'>Moves</li>");
            //  $('.appChar').append("<li class = 'charGifs list-group-item'>Gifs</li>");
                let charMovesValue;

             $('.charMoves').click(function (){
                    console.log(this);
                    console.log(charMovesValue);
                    charMovesValue = this.value;
                    $('.modal-background').css('display', 'block');
                    $('.modal-header').addClass("box" + this.value);

             });

              $('.charGifs').click(function (){
                    console.log(this);
             });
                $('.modal-close').click(function (){
                    console.log(charMovesValue);
                    $('.modal-background').css('display', 'none');
                    $('.modal-header').removeClass("box" + charMovesValue);
             });

            //  $('.appChar').on('click', function () {
            //      let check = $(this).hasClass('on');
            // if (check == false){
            //     $(this).addClass('on');
            //     $(this).removeClass('off');
            //      console.log(this);
            //  $(this).append("<ul class = 'objList'></ul>");
            //  $(this).append("<li class = 'charMoves list-group-item''>Moves</li>");
            //  $(this).append("<li class = 'charGifs list-group-item''>Gifs</li>");
            //  }
            // if (check == true){
            //      $(this).removeClass('on');
            //      $(this).addClass('off');
            //      $(this).empty();
            //  }   

            //  });
             
    },

init: () => {
       sourceJs.scriptsJs();
       setTimeout( ()  => { sourceJs.charList(); }, 1000);
       setTimeout( ()  => {displayAkuma(); }, 1100);

       setTimeout( ()  => { sourceJs.ui(); }, 1200);
},
};