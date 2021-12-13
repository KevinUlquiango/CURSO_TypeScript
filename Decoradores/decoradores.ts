const Saludar = (target: Function): void => {
  target.prototype.saludos = (): void => {
    console.log("saludos desde Decoradores");
  };
};

@Saludar
class Hola {
  constructor() {}
}

let hola1 = new Hola();
hola1.saludos();
