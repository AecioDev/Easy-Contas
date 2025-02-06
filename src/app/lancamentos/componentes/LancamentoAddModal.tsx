import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Lancamento } from "@/services/lancamento.schema";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface LancamentosAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (lancamento: Lancamento) => void;
}

const LancamentoAddModal: React.FC<LancamentosAddModalProps> = ({
  onClose,
  onSave,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(new Date().toISOString().split("T")[0]);
  const [status, setStatus] = useState<"pendente" | "realizado" | "cancelado">(
    "pendente"
  );
  const [tipo, setTipo] = useState<"ganho" | "gasto">("ganho");
  const [categoria, setCategoria] = useState<
    "mercado" | "combustivel" | "casa" | "carro"
  >("mercado");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [formaPagamento, setFormaPagamento] = useState<
    "dinheiro" | "pix" | "credito" | "debito"
  >("dinheiro");

  const handleSubmit = () => {
    if (!descricao || !valor) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const novoLancamento = {
      id: Date.now(),
      status,
      data,
      tipo,
      categoria,
      descricao,
      valor,
      formaPagamento,
    };

    onSave(novoLancamento);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setData(new Date().toISOString().split("T")[0]);
    setTipo("ganho");
    setCategoria("mercado");
    setDescricao("");
    setValor(0);
    setFormaPagamento("dinheiro");
    setStatus("pendente");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button
          className="bg-green-600 hover:bg-green-800"
          onClick={() => setIsOpen(true)}
        >
          <PlusIcon /> Novo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Adicionar Lançamento
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4">
          {/* Tipo */}
          <Select
            value={tipo}
            onValueChange={(value) => setTipo(value as "ganho" | "gasto")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ganho">Ganho</SelectItem>
              <SelectItem value="gasto">Gasto</SelectItem>
            </SelectContent>
          </Select>

          {/* Data */}
          <Input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Data"
          />

          {/* Categoria */}
          <Select
            value={categoria}
            onValueChange={(value) =>
              setCategoria(
                value as "mercado" | "combustivel" | "casa" | "carro"
              )
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mercado">Mercado</SelectItem>
              <SelectItem value="combustivel">Combustível</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="carro">Carro</SelectItem>
            </SelectContent>
          </Select>
          {/* Forma de Pagamento */}
          <Select
            value={formaPagamento}
            onValueChange={(value) =>
              setFormaPagamento(
                value as "dinheiro" | "pix" | "credito" | "debito"
              )
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Forma de Pagamento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dinheiro">Dinheiro</SelectItem>
              <SelectItem value="pix">Pix</SelectItem>
              <SelectItem value="credito">Crédito</SelectItem>
              <SelectItem value="debito">Débito</SelectItem>
            </SelectContent>
          </Select>

          {/* Status */}
          <Select
            value={status}
            onValueChange={(value) =>
              setStatus(value as "pendente" | "realizado" | "cancelado")
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pendente">Pendente</SelectItem>
              <SelectItem value="realizado">Realizado</SelectItem>
              <SelectItem value="cancelado">Cancelado</SelectItem>
            </SelectContent>
          </Select>

          <div className="col-span-3">
            {/* Descrição */}
            <Input
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descrição"
            />
          </div>
          <div className="col-span-3">
            {/* Valor */}
            <Input
              type="number"
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
              placeholder="Valor"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose} variant="outline">
            Cancelar
          </Button>
          <Button onClick={handleSubmit}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LancamentoAddModal;
