

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

        for (i = 0; i < charDetails.length; i++) {
            // Entire Char List

            // console.log(charDetails[i])  
            $("#appList").append("<div id = " + charDetails[i].character + " class = 'appChar list-group-item'>" + "<h4>" + charDetails[i].name + "</h4>" + "</div>");

        }
            // Single Char

            //  $('.charMoves').on('click', (e) => {
            //  e.preventDefault()
            // console.log(this);
            // });
            // <----------------------------------------------------------------------------------------------------------------------------------->

            // grabMoves = (c) => {
            // for (a = 0; a < charDetails[c].moves.length; a++){
            //     console.log(charDetails[c].moves[a]);
            // }
            // }
            // grabMoves();
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
            
             $('.appChar').on('click', function (a) {
                 let check = $(this).hasClass('on');
                 $(this).css("display", "block");
                 $(this).addClass('on');
                 console.log(this);
                 console.log(check);
                 
            //  $(".appChar").append("<ul></ul>");
            //  $(".appChar ul").append("<li class = 'charMoves'>Moves</li>");
            //  $(".appChar ul").append("<li class = 'charGifs'>Gifs</li>");

             if (check == true){
                 $(this).removeClass('on');
                 $(this).addClass('off');
                 console.log('hi')
             }
             });
             
    },

init: () => {
       sourceJs.scriptsJs();
       setTimeout( ()  => { sourceJs.charList(); }, 1000);
       setTimeout( ()  => { sourceJs.ui(); }, 1200);
},
};