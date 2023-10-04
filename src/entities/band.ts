export class Band {
  public constructor(
    public id: string,
    public name: string,
    public image: string,
    public genre: string,
    public biography: string,
    public numPlays: number,
    public albums: string[]
  ) {}
}
