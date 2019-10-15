export class PersonModel {
  constructor(
    public name?: string,
    public birth_year?: string,
    public homeworld?: string,
    public species?: string,
    public films?: string[]
  ) { }
}
