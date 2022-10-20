export interface Pokemon {
    id: number;
    nivel: number;
    name: string;
    type: [string, string];
    img: string;
    stats: { 
        hp: number, 
        attack: number, 
        defense: number,
        spattack: number,
        spdefense: number,
        speed: number,
    };
    habilidades: string;
}