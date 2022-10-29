import { Certificado } from "./Certificado";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Biblioteca implements Observer {
  private entregoTodosLosLibros = true;
  update(subject: Subject): void {
    if (subject instanceof Certificado) {
      console.log("Biblioteca: Certificado actualizado.");
      subject.puedeEmitirCertificado =
        subject.puedeEmitirCertificado && this.entregoTodosLosLibros;
    }
  }
}
