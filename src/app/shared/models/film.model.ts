export class FilmModel {
  constructor(
    public title?: string,
    public release_date?: string,
    public director?: string,
    public characters?: string[],
    public url?: string,
    opening_crawl?: string
  ) {}
}
