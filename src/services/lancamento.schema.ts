export interface Lancamento {
  id: number;
  data: string;
  tipo: "ganho" | "gasto";
  categoria: "mercado" | "combustivel" | "casa" | "carro";
  descricao: string;
  valor: number;
  formaPagamento: "dinheiro" | "pix" | "credito" | "debito";
  status: "pendente" | "realizado" | "cancelado";
}
