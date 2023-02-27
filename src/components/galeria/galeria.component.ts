import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-galeria',
    templateUrl: './galeria.component.html',
    styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent {

    // public titulo = 'Galeria de Imagens';
    // public fotos = '../assets/img01.jpg';
    @Input() public titulo : string = '';
    @Input() public fotos : string[] = [];

    public fotoAtual = 0;

    public primeira() {
        return 0;
    }

    public voltarParaPrimeira() {
        this.fotoAtual = this.primeira();
    }

    public voltarParaAnterior() {
        this.fotoAtual--;
    }

    public vaiParaProxima() {
        this.fotoAtual++;
    }

    public vaiParaUltima() {
        this.fotoAtual = this.ultima();
    }
    
    public ultima() {
        return this.fotos.length - 1;
    }

}
