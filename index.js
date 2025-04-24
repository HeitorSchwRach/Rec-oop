class Personagem{
    constructor(vida, forca, mana, stamina, precisao){
        this.vida = vida
        this.forca = forca
        this.mana = mana
        this.stamina = stamina
        this.precisao = precisao
    }
    atacar(){
        InimigoG.vida -= this.forca
    }

    defender(){
        if(this.vida ){
            InimigoG.atacar() && Personagem.defender()
            this.vida = this.vida
        }
    }
    usarMagia(){
        InimigoG -= this.forca
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

class InimigoG extends Personagem{
    constructor(vida, forca, stamina){
        super(vida, forca, stamina)
    }
}