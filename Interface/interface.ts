interface Usuario {
  nombreUsuario: string;
  password: string;
  confirmarPassword: string;
}

let usuario1: Usuario = {
  nombreUsuario: "Kevin",
  password: "12345",
  confirmarPassword: "12345"
};

console.log(usuario1);

interface Abordar {
  abordarTransporte(): void;
}

let avion: Abordar = {
  abordarTransporte: function () {
    console.log("abordando");
  }
};
avion.abordarTransporte();
