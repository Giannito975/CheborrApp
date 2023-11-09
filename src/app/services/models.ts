import { IUser } from './interface';

export class User implements IUser {
 public id: string;
 public email: string;
 public password: string;

  constructor(user?: User) {
    if (user) {
      // Si por x razon cada atributo del usuario es falsy, se inicializa por default
      // o se asignan el valor de lso atributos del usuario que se paso por argumento
      this.id = user.id || '';
      this.email = user.email || '';
      this.password = user.password || '';
    } else {
      // Si no se pasa un usuario, inicializa las propiedades a valores por defecto o vacíos
      this.id = '';
      this.email = '';
      this.password = '';
    }
  }
}
