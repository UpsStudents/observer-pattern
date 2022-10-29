import { Certificado } from "./Certificado";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Laboratorio implements Observer {
  private entregoTodosLosEquipos = true;
  update(subject: Subject): void {
    if (subject instanceof Certificado) {
      console.log("Laboratorios: Certificado actualizado.");
      subject.puedeEmitirCertificado =
        subject.puedeEmitirCertificado && this.entregoTodosLosEquipos;
    }
  }
}
