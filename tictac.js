class Elem {
    #id;
    constructor(id, szuloelem, input){
        this.#id = id;
        szuloelem.append(
            `<div class="tarolo" id="${this.#id}"><p></p></div>`
        );
        const elem = $("article div:last-child")
        elem.on("click",() => {
            this.esemenyTrigger();
            
        })


    }

    esemenyTrigger(){
        const esemeny = new CostumEvent("elemKattintas", {detail:this.#id});
        window.dispatchEvent(esemeny);
    }
}



export default Elem;


