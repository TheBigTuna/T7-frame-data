

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
        let gifs = list.gifs;
           if(list.gifs == undefined){
               let noGif = {name : name, game : game, moves: moves, gifs : "Not Available"};
             return noGif;
     }  
        return {
            name: name,
            game: game,
            moves: moves,
            gifs: gifs,
        } 
        });

        for (i = 0; i < charDetails.length; i++) {
            // Entire Char List
            console.log(charDetails[i])  
        }
            // Single Char
            // console.log(charDetails[2])
},
    homeClick: () => {
        let home = document.getElementById('home');
        let app = document.getElementById('app');
        let headerBtn = document.getElementById('headerBtn');
        home.style.display="none";
        app.style.display="block";
},  

init: () => {
       sourceJs.scriptsJs();
       setTimeout( ()  => { sourceJs.charList(); }, 1000);
},
};