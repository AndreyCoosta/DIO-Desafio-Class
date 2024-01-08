class hero {
    constructor(Name, age, type) {
        this.Name = Name
        this.age = age;
        this.type = type;
    }
    
Atacar() {
    let Attack ="";
        switch (this.type) {
        case 'Mago':
            Attack = "Magia";
            break;
        case 'Guerreiro':
            Attack = "Espada";
            break;
        case 'Monge':
            Attack = "Artes Marciais";
            break;
        case 'Ninja':
            Attack = "Shuriken";
            break;    
        }   

        console.log(`O ${this.type} atacou usando ${Attack}`)
    }
}
let Hero1 = new hero("Andrey", "20", "Guerreiro")
console.log (Hero1)
Hero1.Atacar();
