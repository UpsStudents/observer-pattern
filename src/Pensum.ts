import { Certificado } from "./Certificado";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Pensum implements Observer {
  private pasoTodasLasMaterias = true;
  update(subject: Subject): void {
    if (subject instanceof Certificado) {
      console.log("Pensum: Certificado actualizado.");
      subject.puedeEmitirCertificado =
        subject.puedeEmitirCertificado && this.pasoTodasLasMaterias;
    }
  }
}
