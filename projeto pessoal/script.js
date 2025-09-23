// Lista de heróis
const herois = [
  "Homem de Ferro",
  "Capitão América",
  "Thor",
  "Hulk",
  "Viúva Negra",
  "Pantera Negra",
  "Doutor Estranho",
  "Homem-Aranha",
  "Princesa Maria Vitória - minha namorada, me salva todos os dias e cuida muito bem de mim"
];

// Loop para verificar cada herói
herois.forEach((heroi) => {
  if (heroi === "Homem de Ferro") {
    console.log(`${heroi} usa tecnologia avançada para lutar!`);
  } else if (heroi === "Capitão América") {
    console.log(`${heroi} é o símbolo de coragem e liderança!`);
  } else if (heroi === "Thor") {
    console.log(`${heroi} tem o poder do trovão!`);
  } else if (heroi === "Hulk") {
    console.log(`${heroi} é a força bruta em pessoa!`);
  } else if (heroi === "Viúva Negra") {
    console.log(`${heroi} é ágil, inteligente e muito estratégica!`);
  } else if (heroi === "Pantera Negra") {
    console.log(`${heroi} defende Wakanda com honra!`);
  } else if (heroi === "Doutor Estranho") {
    console.log(`${heroi} manipula magia e o tempo!`);
  } else if (heroi === "Homem-Aranha") {
    console.log(`${heroi} é rápido, esperto e protege a vizinhança!`);
  } else if (heroi === "Princesa Maria Vitória - minha namorada, me salva todos os dias e cuida muito bem de mim") {
    console.log(`${heroi} é minha heroína real e especial!`);
  } else {
    console.log(`${heroi} é um herói misterioso!`);
  }
});
