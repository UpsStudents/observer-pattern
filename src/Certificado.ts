import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Certificado implements Subject {
  puedeEmitirCertificado: boolean = true;
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
    console.log("Subject: Attached an observer.");
  }
  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log("Subject: Detached an observer.");
  }
  notify(): void {
    console.log("Subject: Notifying observers...");
    this.observers.forEach((observer) => observer.update(this));
    console.log("Subject: Notified observers.");
    console.log("Puede Emitir?:", this.puedeEmitirCertificado);
  }
}
