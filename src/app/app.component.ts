import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { WebSitesDto } from 'src/shared/models/webSitesDto.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  public title = 'guiangle';
  public deveMostrarWebSites: boolean = false;
  public falhaAoBuscarWebSites : boolean = false;
  public valorPesquisado: string = "";

  ngOnInit(): void { }

  public exibirWebSites(): void {

    if(this.valorPesquisado == null || this.valorPesquisado == ''){
      this.falhaAoBuscarWebSites = true;
      return;
    }

    this.deveMostrarWebSites = true;
    this.falhaAoBuscarWebSites = false;
  }
}

