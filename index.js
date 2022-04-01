import {Cliente} from "./Cliente.js"
import { Gerente } from "./funcionarios/Gerente.js"
import { Diretor } from "./funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000,  12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardor", 5000, 12378945601);
gerente.cadastrarSenha("1234");

const cliente = new Cliente("Lais", 78945612379, "4567")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
console.log(gerenteEstaLogado, diretorEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4567");
console.log(clienteEstaLogado);