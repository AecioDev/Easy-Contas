import StatusContas from "./status-contas";

export default function Dashboard() {
  const contasNoVermelho = false;
  const emotion = contasNoVermelho ? "😱" : "😌";
  const textConta = contasNoVermelho
    ? "Socoooooorroooooo!!!!!"
    : "Tranquilidaaaaadee!";
  return (
    <>
      <h1 className="text-xl font-bold text-black text-center mb-4">Status</h1>
      <div className="grid grid-cols-2 py-4">
        <div
          className="flex items-center justify-center text-8xl text-center"
          style={{ fontSize: "200px" }}
        >
          {emotion}
        </div>
        <div className="flex flex-col items-center justify-center text-8xl text-center">
          <h1 className="text-xl font-bold text-black text-center mb-4">
            {textConta}
          </h1>
          <h1
            className={`text-xl font-bold text-center mb-4 ${
              contasNoVermelho ? "text-red-800" : "text-blue-800"
            }`}
          >
            R$ 1.802.69
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 @container 3xl:gap-8">
        <StatusContas className="col-span-full" />
        {/*<TransactionHistoryTable className="col-span-full" />*/}
      </div>
    </>
  );
}
