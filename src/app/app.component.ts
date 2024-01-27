import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  telaPequena: boolean = false;

  ngOnInit(): void {
    this.verificarTamanhoDaTela();
  }
  // Método para verificar o tamanho da tela e atualizar a variável telaPequena
  private verificarTamanhoDaTela() {
    this.telaPequena = window.innerWidth < 1050; // Defina a largura limite que define quando a tela é pequena
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.verificarTamanhoDaTela();
  }

  public onFacebookClick() {
    window.open('https://www.facebook.com/tkdbiancamaica', '_blank');
  }

  public onInstagramClick() {
    window.open('https://www.instagram.com/biancamaica_/', '_blank');
  }

  public onEnderecoClick() {
    window.open('https://www.google.com/maps/@-29.3360437,-49.7336009,3a,47.1y,246.03h,97.81t/data=!3m6!1e1!3m4!1sDeF39NERiLosaI6XHMIIkw!2e0!7i16384!8i8192?authuser=0&entry=ttu', '_blank');
  }
}
