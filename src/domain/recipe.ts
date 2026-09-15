export class Recipe {
  _name!: string;
  _category?: string;
  _description!: string;
  _time!: string;

  constructor(aName: string, aDesc: string) {
    this.name = aName;
    this.description = aDesc;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(aDescription: string) {
    this._description = aDescription;
  }

  get time(): string | undefined {
    return this._time;
  }

  set time(aTime: string) {
      this._time = aTime;
  }


  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripcion: ${this.description} - tiempo: ${this.time}`;
  }
}
