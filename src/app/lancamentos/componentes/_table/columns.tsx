"use client";

import { Lancamento } from "@/services/lancamento.schema";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Lancamento>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "data",
    header: "Data",
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
  },
  {
    accessorKey: "categoria",
    header: "Categoria",
  },
  {
    accessorKey: "descricao",
    header: "Descrição",
  },
  {
    accessorKey: "valor",
    header: "Valor",
  },
];
