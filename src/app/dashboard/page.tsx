import StatusContas from "./status-contas";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-6 gap-6 @container 3xl:gap-8">
      <StatusContas className="col-span-full" />
      {/*<TransactionHistoryTable className="col-span-full" />*/}
    </div>
  );
}
