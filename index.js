import {Cliente} from "./conta/Cliente.js"
import {ContaCorrente} from "./conta/ContaCorrente.js"
import { ContaPoupanca } from "./conta/ContaPoupanca.js";
import { ContaSalario } from "./conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233344);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);


console.log(contaSalario);