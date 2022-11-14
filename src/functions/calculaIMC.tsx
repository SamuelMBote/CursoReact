import IIMC from '../interfaces/IIMC';

export default function calculaIMC(peso: string, altura: string): IIMC {
  let valorIMC: number = 0;
  let mensagemIMC: string = '';

  if (peso && altura)
    valorIMC =
      Number(peso) / (Number(altura) * 0.01 * (Number(altura) * 0.01)) / 1;

  if (valorIMC < 18.5) {
    mensagemIMC = 'Você está abaixo do peso';
  } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
    mensagemIMC = 'Você está no seu peso normal';
  } else if (valorIMC >= 25 && valorIMC <= 29.9) {
    mensagemIMC = 'Você está pré-obeso';
  } else if (valorIMC >= 30 && valorIMC <= 34.9) {
    mensagemIMC = 'Você está obeso grau 1';
  } else if (valorIMC >= 35 && valorIMC <= 39.9) {
    mensagemIMC = 'Você está obeso grau 2';
  } else {
    mensagemIMC = 'Você está obeso grau 3';
  }

  return {imc: valorIMC.toPrecision(4), mensagem: mensagemIMC};
}
