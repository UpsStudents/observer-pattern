import { Certificado } from "./Certificado";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Contabilidad implements Observer {
  private tieneDeudas = true;
  update(subject: Subject): void {
    if (subject instanceof Certificado) {
      console.log("Contabilidad: Certificado actualizado.");
      subject.puedeEmitirCertificado =
        subject.puedeEmitirCertificado && this.tieneDeudas;
    }
  }
}
