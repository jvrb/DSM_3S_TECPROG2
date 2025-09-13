"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const results = [];
fs.createReadStream(path.resolve(__dirname, 'nomes.csv'))
    .pipe((0, csv_parser_1.default)({ headers: false }))
    .on('data', (data) => {
    let nomeCompleto = primeiraLetraMaiuscula(data[0]);
    results.push(nomeCompleto);
})
    .on('end', () => {
    const csvContent = results.map(nome => `${nome}`).join("\n");
    // Escreve em novo arquivo
    fs.writeFileSync(path.resolve(__dirname, "nomes_formatados.csv"), csvContent, "utf8");
    console.log("Arquivo nomes_formatados.csv criado com sucesso!");
});
function primeiraLetraMaiuscula(nome) {
    const naoFormata = ["de", "da", "das", "do", "dos", "e"];
    //Remove quebra de linha e espaços no final dos nomes
    const nomeLimpo = nome.trim().replace(/\s+/g, ' ').replace(/[\r\n]+/g, '').toLowerCase();
    // separa cada nome por espaços
    const nomeSplit = nomeLimpo.split(' ');
    const nomeCorreto = nomeSplit.map(palavra => 
    // se a palavra nao estiver no array "naoFormata" ele transforma a primeira letra para maiuscula, caso contrario, retorna a palavra
    naoFormata.includes(palavra) ? palavra : `${palavra.charAt(0).toUpperCase()}${palavra.slice(1)}`);
    // junta todos os nomes com espaços no meio
    return nomeCorreto.join(' ');
}
//# sourceMappingURL=dados.js.map