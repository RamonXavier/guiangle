import { Component, Input, OnInit } from '@angular/core';
import { WebSitesDto } from 'src/shared/models/webSitesDto.models';

@Component({
  selector: 'app-webSites',
  templateUrl: './webSites.component.html',
  styleUrls: ['./webSites.component.css']
})
export class WebSitesComponent implements OnInit {
  @Input() valorPesquisado: string = '';
  public valorFiltradoCache: string = '';
  public webSites: WebSitesDto[] = [];

  constructor(private _suaService: WebSitesService) { }

  ngOnInit() {
    //Essa montagem de objetos:
    // deve chamar um metodo da service -> que chama um método da api
    //Oque deve ser feito pra isso:
    //Criar 1 - WebSitesService.ts
    //Criar 1 - WebSitesApi.ts
    //Usar injecao de dependencia

    //this.webSites = _suaService.buscarSites();
    this.webSites.push({id:1, titulo: 'Angular.io', descricao: 'O Angular.io é a página oficial do Angular, fornecida pela equipe do Angular. Ela serve como um hub central para desenvolvedores que desejam aprender, explorar e aprimorar suas habilidades em Angular. O site oferece documentação completa, guias passo a passo, tutoriais e exemplos práticos.', link: 'https://angular.io/'});
    this.webSites.push({id:2, titulo: 'Angular Blog', descricao: 'O Angular Blog é o blog oficial do Angular, onde você encontra as últimas notícias, atualizações e anúncios relacionados ao Angular. Além disso, ele oferece uma variedade de artigos técnicos e insights dos principais especialistas da equipe do Angular, abordando tópicos relevantes para a comunidade Angular.', link: 'https://blog.angular.io/'});
    this.webSites.push({id:3, titulo: 'Scotch.io', descricao: 'O Scotch.io é um website de tecnologia que oferece uma ampla gama de tutoriais, artigos e dicas relacionados ao desenvolvimento com Angular. Eles têm uma seção dedicada exclusivamente ao Angular, onde você pode encontrar recursos úteis para melhorar suas habilidades e aprender novos conceitos.', link: '	https://scotch.io/tag/angular'});
    this.webSites.push({id:4, titulo: 'AngularInDepth', descricao: 'O AngularInDepth é um website que se concentra em fornecer artigos técnicos aprofundados sobre o Angular. Os artigos publicados são escritos por membros ativos da comunidade Angular e abordam tópicos avançados, melhores práticas, dicas e truques, além de explorar conceitos complexos e detalhados do Angular.', link: 'https://indepth.dev/tag/angular/'});
    this.webSites.push({id:5, titulo: 'Angular University', descricao: 'A Angular University é um recurso educacional que oferece tutoriais, cursos e recursos para desenvolvedores que desejam aprender e aprimorar suas habilidades em Angular. O blog da Angular University aborda uma variedade de tópicos relacionados ao Angular, desde conceitos básicos até técnicas avançadas de desenvolvimento.', link: 'https://blog.angular-university.io/'});
  }

  ngOnChanges(){
    if(this.valorPesquisado != '' &&  this.valorPesquisado != this.valorFiltradoCache){
      this.filtrar();
    }
  }

  public filtrar(){
    console.log(this.valorPesquisado);
    this.valorFiltradoCache = this.valorPesquisado;
  }

  public exemploInjecao(){
    let suaLista = _suaService.SeuMetodo();
  }
}
