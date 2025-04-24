class Personagem {
    constructor(vida, forca, mana, stamina, precisao) {
        this.vida = vida
        this.forca = forca
        this.mana = mana
        this.stamina = stamina
        this.precisao = precisao
    }
    atacar() {
        InimigoG.vida -= this.forca
    }

    defender() {
        if (this.vida) {
            InimigoG.atacar() && Personagem.defender()
            this.vida = this.vida
        }
    }

    usarMagia() {
        InimigoG -= this.forca
    }
}

class Guerreiro extends Personagem {
    constructor(vida, forca, stamina) {
        super(vida, forca, stamina)
    }
    atacar() {
        if (this.forca, this.stamina)
            Guerreiro.atacar = true
        InimigoG.vida -= this.forca
        this.stamina -= 3
    }
}

class Mago extends Personagem {
    constructor(vida, mana, forca) {
        super(vida, mana, forca)
    }
    usarMagia() {
        if (this.mana, this.forca) {
    Mago.usarMagia = true
    InimigoG.vida -= this.forca
    this.mana -=5
        }
    }
}

class Arqueiro extends Personagem {
    constructor(vida, forca, stamina, precisao) {
        super(vida, forca, stamina, precisao)
    }
    atacar() {
        if (this.forca, this.stamina)
            Arqueiro.atacar = true
        InimigoG.vida -= this.forca
        this.stamina -= 2
    }
    cansar() {
        if (stamina, precisao) {
            this.stamina -= 2
            this.precisao -= 1
        } else {
            this.precisao = this.precisao
        }
    }
}

class InimigoG extends Personagem {
    constructor(vida, forca, stamina, precisao) {
        super(vida, forca, stamina, precisao)
    }
}