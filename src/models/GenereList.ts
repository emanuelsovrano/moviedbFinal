import { Genere } from "./Genere";

export class GenereList {
    public generes: Genere[] = [];

    constructor(data: any){
        if (data.results != null) {
            data.results.forEach((genere: any) => {
                this.generes.push(new Genere(genere));
            });
        }
    }
}