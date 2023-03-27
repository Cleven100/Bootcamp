const atividades = [
    {
      reflorestamento: "Feito",
      esgotoTratado: "Em progresso",
      emissaoDeCarbono: "Não feito",
      energiaSustentavel: "Em progresso"
    },
    {
      reflorestamento: "Não feito",
      esgotoTratado: "Feito",
      emissaoDeCarbono: "Em progresso",
      energiaSustentavel: "Feito"
    }
  ];
 

  const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);

for (const atividade of atividades) {
  const reflorestamento = atividade[findItem(atividade, "reflorestamento")];
  const esgotoTratado = atividade[findItem(atividade, "esgotoTratado")];
  const emissaoDeCarbono = atividade[findItem(atividade, "emissaoDeCarbono")];
  const energiaSustentavel = atividade[findItem(atividade, "energiaSustentavel")];

  console.log(reflorestamento === "Não feito" ? "Multa" : reflorestamento === "Em progresso" ? "Avaliação de progresso" : "Não multar");
  console.log(esgotoTratado === "Não feito" ? "Multa" : esgotoTratado === "Em progresso" ? "Avaliação de progresso" : "Não multar");
  console.log(emissaoDeCarbono === "Não feito" ? "Multa" : emissaoDeCarbono === "Em progresso" ? "Avaliação de progresso" : "Não multar");
  console.log(energiaSustentavel === "Não feito" ? "Multa" : energiaSustentavel === "Em progresso" ? "Avaliação de progresso" : "Não multar");
}