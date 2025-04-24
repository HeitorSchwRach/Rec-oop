class Personagem {
    #vida;
    #forca;
    #mana;
    #stamina;
    #precisao;

    constructor(vida, forca, mana, stamina, precisao) {
        this.#vida = vida;
        this.#forca = forca;
        this.#mana = mana;
        this.#stamina = stamina;
        this.#precisao = precisao;
    }


    get vida() {
        return this.#vida;
    }

    get forca() {
        return this.#forca;
    }

    get mana() {
        return this.#mana;
    }

    get stamina() {
        return this.#stamina;
    }

    get precisao() {
        return this.#precisao;
    }


    set vida(valor) {
        if (valor >= 0) {
            this.#vida = valor;
        } else {
            console.log('Vida não pode ser menor que 0');
        }
    }

    set forca(valor) {
        if (valor >= 0) {
            this.#forca = valor;
        } else {
            console.log('Força não pode ser menor que 0');
        }
    }

    set mana(valor) {
        if (valor >= 0) {
            this.#mana = valor;
        } else {
            console.log('Mana não pode ser menor que 0');
        }
    }

    set stamina(valor) {
        if (valor >= 0) {
            this.#stamina = valor;
        } else {
            console.log('Stamina não pode ser menor que 0');
        }
    }

    set precisao(valor) {
        if (valor >= 0) {
            this.#precisao = valor;
        } else {
            console.log('Precisão não pode ser menor que 0');
        }
    }

    atacar(Inimigo) {
        Inimigo.vida -= this.#forca;
    }

    defender(Inimigo) {
        if (this.#vida) {
            Inimigo.atacar(this);
        }
    }

    usarMagia(Inimigo) {
        Inimigo.vida -= this.#forca;
        this.#mana -= 5;
    }
}

class Guerreiro extends Personagem {
    constructor(vida, forca, stamina) {
        super(vida, forca, 0, stamina, 0);
    }

    atacar(Inimigo) {
        if (this.stamina >= 3) {
            Inimigo.vida -= this.forca;
            this.stamina -= 3;
        }
    }
    cansado(){
        if(this.stamina = 0){
            Guerreiro.atacar = false
            console.log("Guerreiro sem stamina")
        }
    }
}

class Mago extends Personagem {
    constructor(vida, mana, forca) {
        super(vida, forca, mana, 0, 0);
    }

    usarMagia(Inimigo) {
        if (this.mana >= 5) {
            Inimigo.vida -= this.forca;
            this.mana -= 5;
        }
    }
    cansado() {
        if (this.mana = 0) {
            Mago.usarMagia = false
            console.log("Mana insuficiente")
        }
    }
}

class Arqueiro extends Personagem {
    constructor(vida, forca, stamina, precisao) {
        super(vida, forca, 0, stamina, precisao);
    }

    atacar(Inimigo) {
        if (this.stamina >= 2) {
            Inimigo.vida -= this.forca;
            this.stamina -= 2;
        }
    }

    cansar() {
        if (this.stamina >= 2) {
            this.stamina -= 2;
            this.precisao -= 1;
        }
    }
    cansado(){
        if(this.stamina = 0){
            Arqueiro.atacar = false
            console.log("Sem stamina suficiente para atacar")
        }
    }
}

class InimigoG extends Personagem {
    constructor(vida, forca, stamina, precisao) {
        super(vida, forca, 0, stamina, precisao);
    }
}

class Jogo {

}
