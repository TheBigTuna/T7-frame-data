let characterArray = [];
let gifArray = [];

let sourceJs ={

scriptsJs: () => {

    scriptsName = ["akuma", "alisa", "asuka", "bob", "bryan",
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
        let char = [akuma, alisa, asuka, bob, bryan,
         claudio, devilJin, dragunov, eliza,
          heihachi, hwoarang, jack7, jin, 
         josie, katarina, kazumi, kazuya, king, lars, 
         law, lee, leo, lili, ling, luckyChloe, masterRaven, 
         miguel, nina, paul, shaheen, steve, yoshimitsu]; 

         characterArray.push(char);

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
            char: char
            
        } 
        });
                         
        for (i = 0; i < charDetails.length; i++) {
            // Entire Char List
             let charText = charDetails[i].character;
             let charRep = charText.replace(/-/g, " ");

             $("#appList").append("<div id = " + charDetails[i].character + " class = 'appChar off char"+ [i] + " list-group-item' value = " + [i] + ">" + "<h4>" + charRep + "</h4>" + "</div>");
             $('#appList').append("<ul class = 'objList' value = " + [i] + "></ul>");
             $('#appList').append("<li class = 'charMoves list-group-item' value = " + [i] + ">Moves</li>");
             $('#appList').append("<li class = 'charGifs list-group-item' value = " + [i] + ">Gifs</li>");
             characterArray.push(charDetails[i]);
             
        }

         displayMoves = (b,c) => {
             for(a = 0; a < b.moves.length; a++){
                $(document).find('.body-box' + c).append("<p class='notation'>" + b.moves[a].notation + "</p>");
                $(document).find('.body-box' + c).append("<p class='hit-level'>" + b.moves[a].hit_level + "</p>");
                $(document).find('.body-box' + c).append("<p class='damage'>" + b.moves[a].damage + "</p>");
                $(document).find('.body-box' + c).append("<p class='on-block'>" + b.moves[a].on_block + "</p>");
                $(document).find('.body-box' + c).append("<p class='on-ch'>" + b.moves[a].on_ch + "</p>");
                $(document).find('.body-box' + c).append("<p class='on-hit'>" + b.moves[a].on_hit + "</p>");
            
             }
                $(document).find('.header-box' + c).append("<p>" + b.metadata.name + "</p>");
        }

        displayGifs = (e,f) =>{
            $(document).find('.header-box' + [f]).append("<p>" + e.metadata.name + "</p>");
                        // console.log(characterArray[0][f].gifs)
         for (let g in characterArray[0][f].gifs) {
                //  console.log(g, characterArray[0][f].gifs[g]);
                //  $(document).find('.body-box' + f).append("<div style='position: fixed; width: 20%; height: 20%; background-image:url("+ characterArray[0][f].gifs[g] +")'>" + "</div>");
                    $(document).find('.body-box' + f).append("<div class='gifBtn' id = "+ characterArray[0][f].gifs[g] +" >" + "<button>" + g + "</button>" + "</div>");
                    gifArray.push(g.length);
        }
           $(document).find('.body-box' + f).append("<div class ='gifContainer'>" + "</div>");
           $('.gifBtn').on('click',function (){
               $('.gifContainer').css("background-image", "url(" + this.id + ")");  

               
               });
                // console.log(e.gifs);
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
    prevClick: () => {
        let home = document.getElementById('home');
        let app = document.getElementById('app');
        let prevBtn = document.getElementById('prevBtn');
        app.style.display="none";
        home.style.display="block";
    },
    ui: () => {
            //  $('.appChar').append("<ul class = 'objList'></ul>");
            //  $('.appChar').append("<li class = 'charMoves list-group-item'>Moves</li>");
            //  $('.appChar').append("<li class = 'charGifs list-group-item'>Gifs</li>");
                let charHeadValue;
                let charBodyValue;

             $('.charMoves').click(function (){
                    charHeadValue = this.value;
                    charBodyValue = this.value;
                    $('.modal-background').css('display', 'block');
                    $('.modal-header').addClass("header-box" + this.value);
                    $('.modal-body').addClass("body-box" + this.value);
                    displayMoves(characterArray[0][this.value],this.value);
                   

             });

              $('.charGifs').click(function (){
                    charHeadValue = this.value;
                    charBodyValue = this.value;
                    $('.modal-background').css('display', 'block');
                    $('.modal-header').addClass("header-box" + this.value);
                    $('.modal-body').addClass("body-box" + this.value);
                    displayGifs(characterArray[0][this.value],this.value);
             });
             
                $('.modal-close').click(function (){                
                    $('.modal-background').css('display', 'none');
                    $('.modal-header').removeClass("header-box" + charHeadValue);
                    $('.modal-header p').remove();
                    $('.modal-body').removeClass("body-box" + charBodyValue);
                    $('.modal-body p').remove();
                    $('.modal-body div').remove();
                    gifArray = [];
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
    scroll: () => {
            $(document).on('scroll',function(){
                let pos = $(window).scrollTop();
                if(pos > 120){
                    $('.scroll').css('display', 'block');
                }
                else{
                    $('.scroll').css('display', 'none');
                }
            });

                $('.scroll').click(function(){
                $('html, body').animate({   
                        scrollTop: 0
                    }, 900);
                });
    },

init: () => {
       sourceJs.scriptsJs();
       setTimeout( ()  => { sourceJs.charList(); }, 1600);
       setTimeout( ()  => { sourceJs.ui(); }, 2400);
       sourceJs.scroll();
},
};