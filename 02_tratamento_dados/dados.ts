import * as fs from "fs";
import * as path from 'path';
import csv from 'csv-parser';

const results: any[] = [];

fs.createReadStream(path.resolve(__dirname, 'nomes.csv'))
  .pipe(csv({headers: false}))
  .on('data', (data) => { 
    let nomeCompleto = primeiraLetraMaiuscula(data[0])
    results.push(nomeCompleto)
  })
  .on('end', () => {
    const csvContent = results.map(nome => `${nome}`).join("\n");

    // Escreve em novo arquivo
    fs.writeFileSync(path.resolve(__dirname, "nomes_formatados.csv"), csvContent, "utf8");
    console.log("Arquivo nomes_formatados.csv criado com sucesso!");
});

function primeiraLetraMaiuscula(nome: string){
  const naoFormata:string[] = ["de", "da", "das", "do", "dos", "e"];

  //Remove quebra de linha e espaços no final dos nomes
  const nomeLimpo:string = nome.trim().replace(/\s+/g, ' ').replace(/[\r\n]+/g, '').toLowerCase(); 

  // separa cada nome por espaços
  const nomeSplit:string[] = nomeLimpo.split(' '); 
  const nomeCorreto:string[] = nomeSplit.map(palavra => 
    // se a palavra nao estiver no array "naoFormata" ele transforma a primeira letra para maiuscula, caso contrario, retorna a palavra
    naoFormata.includes(palavra) ? palavra : `${palavra.charAt(0).toUpperCase()}${palavra.slice(1)}`
  );
  
  // junta todos os nomes com espaços no meio
  return nomeCorreto.join(' ');
}
