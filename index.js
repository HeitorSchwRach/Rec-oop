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

    get vida() { return this.#vida; }
    get forca() { return this.#forca; }
    get mana() { return this.#mana; }
    get stamina() { return this.#stamina; }
    get precisao() { return this.#precisao; }

    set vida(valor) {
        if (valor >= 0) this.#vida = valor;
        else console.log('Vida não pode ser menor que 0');
    }
    set forca(valor) {
        if (valor >= 0) this.#forca = valor;
        else console.log('Força não pode ser menor que 0');
    }
    set mana(valor) {
        if (valor >= 0) this.#mana = valor;
        else console.log('Mana não pode ser menor que 0');
    }
    set stamina(valor) {
        if (valor >= 0) this.#stamina = valor;
        else console.log('Stamina não pode ser menor que 0');
    }
    set precisao(valor) {
        if (valor >= 0) this.#precisao = valor;
        else console.log('Precisão não pode ser menor que 0');
    }

    atacar(inimigo) {
        inimigo.vida -= this.#forca;
    }

    defender(inimigo) {
        if (this.#vida > 0) {
            inimigo.atacar(this);
        }
    }

    usarMagia(inimigo) {
        if (this.#mana >= 5) {
            inimigo.vida -= this.#forca;
            this.#mana -= 5;
        } else {
            console.log('Mana insuficiente');
        }
    }
}

class Guerreiro extends Personagem {
    constructor(vida, forca, stamina) {
        super(vida, forca, 0, stamina, 0);
    }

    atacar(inimigo) {
        if (this.stamina >= 3) {
            console.log("Guerreiro ataca!");
            inimigo.vida -= this.forca;
            this.stamina -= 3;
        } else {
            console.log('Guerreiro está cansado demais para atacar.');
        }
    }
}

class Mago extends Personagem {
    constructor(vida, mana, forca) {
        super(vida, forca, mana, 0, 0);
    }

    usarMagia(inimigo) {
        if (this.mana >= 5) {
            console.log("Mago usa magia!");
            inimigo.vida -= this.forca;
            this.mana -= 5;
        } else {
            console.log('Mana insuficiente para usar magia.');
        }
    }

    atacar(inimigo) {
        this.usarMagia(inimigo);
    }
}

class Arqueiro extends Personagem {
    constructor(vida, forca, stamina, precisao) {
        super(vida, forca, 0, stamina, precisao);
    }

    atacar(inimigo) {
        if (this.stamina >= 2) {
            console.log("Arqueiro ataca!");
            inimigo.vida -= this.forca;
            this.stamina -= 2;
        } else {
            console.log('Arqueiro sem stamina suficiente para atacar.');
        }
    }

    cansar() {
        if (this.stamina >= 2) {
            this.stamina -= 2;
            this.precisao -= 15;
        }
    }
}

class InimigoG extends Personagem {
    constructor(vida, forca, stamina) {
        super(vida, forca, 0, stamina, 0);
    }

    atacar(inimigo) {
        if (this.stamina >= 3) {
            console.log("InimigoG ataca!");
            inimigo.vida -= this.forca;
            this.stamina -= 3;
        } else {
            console.log('InimigoG está cansado demais para atacar.');
        }
    }
}

class InimigoA extends Personagem {
    constructor(vida, forca, stamina, precisao) {
        super(vida, forca, 0, stamina, precisao);
    }

    atacar(inimigo) {
        if (this.stamina >= 2) {
            console.log("InimigoA ataca!");
            inimigo.vida -= this.forca;
            this.stamina -= 2;
        } else {
            console.log('InimigoA sem stamina suficiente para atacar.');
        }
    }

    cansar() {
        if (this.stamina >= 2) {
            this.stamina -= 2;
            this.precisao -= 15;
        }
    }
}

class InimigoM extends Personagem {
    constructor(vida, mana, forca) {
        super(vida, forca, mana, 0, 0);
    }

    usarMagia(inimigo) {
        if (this.mana >= 5) {
            console.log("InimigoM usa magia!");
            inimigo.vida -= this.forca;
            this.mana -= 5;
        } else {
            console.log('Mana insuficiente para usar magia.');
        }
    }

    atacar(inimigo) {
        this.usarMagia(inimigo);
    }
}

class Jogo {
    constructor() {
        this.personagens = [
            new Guerreiro(100, 20, 10),
            new Mago(80, 15, 18),
            new Arqueiro(90, 12, 8, 100),
            new InimigoG(120, 10, 5),
            new InimigoM(70, 10, 16),
            new InimigoA(80, 10, 7, 80),
        ];
    }

    turno() {
        const aliados = this.personagens.slice(0, 3);
        const inimigos = this.personagens.slice(3);

        const p1 = aliados[Math.floor(Math.random() * aliados.length)];
        const p2 = inimigos[Math.floor(Math.random() * inimigos.length)];

        console.log(`\n>> Novo turno iniciado!`);
        console.log(`Escolhido: ${p1.constructor.name} vs ${p2.constructor.name}`);
        batalhar(p1, p2);
    }
}

function batalhar(p1, p2) {
    console.log(`Batalha entre ${p1.constructor.name} e ${p2.constructor.name} começou!`);
    let rodada = 1;

    while (p1.vida > 0 && p2.vida > 0) {
        console.log(`\nRodada ${rodada}:`);

        console.log(`${p1.constructor.name} ataca!`);
        p1.atacar(p2);
        console.log(`${p2.constructor.name} tem ${p2.vida} de vida restante.`);

        if (p2.vida <= 0) {
            console.log(`${p2.constructor.name} foi derrotado!`);
            break;
        }

        console.log(`${p2.constructor.name} ataca!`);
        p2.atacar(p1);
        console.log(`${p1.constructor.name} tem ${p1.vida} de vida restante.`);

        if (p1.vida <= 0) {
            console.log(`${p1.constructor.name} foi derrotado!`);
            break;
        }

        rodada++;
    }
}


const jogo = new Jogo();
jogo.turno(); 
