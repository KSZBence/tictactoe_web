import Tictac from "./tictac.js";
$(function() {
    const szuloelem = $("article");
    
    for (let index = 0; index < 9; index++) {
        const t1 = new Tictac(index,szuloelem);
    }
})