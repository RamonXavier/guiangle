export class WebSitesDto {

  id?: number;
  titulo?: string;
  descricao?: string;
  link?: string;

  constructor(init?: Partial<WebSitesDto>) {
    Object.assign(this, init);
  }
}
