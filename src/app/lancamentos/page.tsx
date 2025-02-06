import React, { useState } from "react";
import { Lancamento } from "@/services/lancamento.schema";
import { DataTable } from "./componentes/_table/data-table";
import { columns } from "./componentes/_table/columns";
import LancamentoAddModal from "./componentes/LancamentoAddModal";

function getData(): Lancamento[] {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      data: "2025-05-02",
      tipo: "ganho",
      categoria: "mercado",
      descricao: "Compra Carrefour",
      valor: 115.9,
      formaPagamento: "credito",
      status: "realizado",
    },
    {
      id: 2,
      data: "2025-05-02",
      tipo: "gasto",
      categoria: "combustivel",
      descricao: "Abastecimento Carro Posto Trokar",
      valor: 50.0,
      formaPagamento: "debito",
      status: "pendente",
    },
  ];
}

export default function LancamentosPage() {
  const data = getData();
  const [lancamentos, setLancamentos] = useState<Lancamento[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveLancamento = (lancamento: Lancamento) => {
    setLancamentos((prevLancamentos) => [...prevLancamentos, lancamento]);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-bold ">Lançamentos</h1>
        <LancamentoAddModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveLancamento}
        />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
