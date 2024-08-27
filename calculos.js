function calcular() {
    // Obter o valor do salário bruto do input
    const salarioBruto = parseFloat(document.getElementById('salario').value);
  
    // Tabelas de alíquotas e teto do INSS (valores fictícios para demonstração)
    const faixas = [
      { teto: 1412, aliquota: 0.75 },
      { teto: 2666.68, aliquota: 0.09 },
      { teto: 4000.03, aliquota: 0.12 },
      { teto: 7786.02, aliquota: 0.14 },
    ];
  
    // Encontrar a faixa de salário correta
    let faixa = faixas.find(f => salarioBruto <= f.teto);
  
    // Calcular o INSS
    const inss = salarioBruto * faixa.aliquota;
  
    // Calcular o FGTS
    const fgts = salarioBruto * 0.08;
  
    // Calcular o Salário Líquido
    const salarioLiquido = salarioBruto - inss - fgts;
  
    // Atualizar os valores na tela
    document.getElementById('inss').textContent = `R$ ${inss.toFixed(2)}`;
    document.getElementById('fgts').textContent = `R$ ${fgts.toFixed(2)}`;
    document.getElementById('liquido').textContent = `R$ ${salarioLiquido.toFixed(2)}`;
  }
