class Personagem{
    constructor(vida, forca, mana, stamina, precisao){
        this.vida = vida
        this.forca = forca
        this.mana = mana
        this.stamina = stamina
        this.precisao = precisao
    }
}

class Guerreiro extends Personagem{
    constructor(vida, forca,stamina){
        super(vida, forca, stamina)
    }
}

class Mago extends Personagem{
    constructor(vida, mana, forca){
        super(vida, mana, forca)
    }

}

class Arqueiro extends Personagem{
    constructor(vida, forca, stamina, precisao){
        super(vida, forca, stamina, precisao)
    }
}