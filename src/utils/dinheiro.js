const formatadorReais = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const paraCentavos = (valor) =>
  Math.round((valor + Number.EPSILON) * 100);

export const arredondarDinheiro = (valor) => paraCentavos(valor) / 100;

export const formatarReais = (valor) =>
  formatadorReais.format(arredondarDinheiro(valor)).replace(/\u00a0/g, ' ');
