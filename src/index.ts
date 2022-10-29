import { Biblioteca } from "./Biblioteca";
import { Certificado } from "./Certificado";
import { Contabilidad } from "./Contabilidad";
import { Laboratorio } from "./Laboratorios";
import { Pensum } from "./Pensum";

const laboratorio = new Laboratorio();
const contabilidad = new Contabilidad();
const biblioteca = new Biblioteca();
const pensum = new Pensum();
const certificado = new Certificado();

certificado.attach(laboratorio);
certificado.attach(contabilidad);
certificado.attach(biblioteca);
certificado.attach(pensum);
certificado.notify();
