import {Cliente} from "./conta/Cliente.js"
import { Gerente } from "./funcionarios/Gerente.js"
import { Diretor } from "./funcionarios/Diretor.js"

const diretor = new Diretor("Rodrigo", 10000,  12345678900);
const gerente = new Gerente("Ricardor", 5000, 12378945601);

SistemaAtenticacao.login(diretor, "123456789");