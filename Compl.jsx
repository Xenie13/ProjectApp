import React, { useState, useEffect } from "react";
import Form from "./Form";
import ButtonGroup from "./ButtonGroup";
import Pagination from "./Pagination";

const transactionData = [
  { label: "transakce", amount: 1000 },
  { label: "transakce", amount: -1000 },
  { label: "transakce", amount: 1000 },
  { label: "transakce", amount: 1000 },
  { label: "transakce", amount: -1000 },
  { label: "transakce", amount: 1000 },
  { label: "transakce", amount: -1000 }
];

const Compl = () => {
  const [isClicked, setIsClicked] = useState(transactionData);
  const [filter, setFilter] = useState("input");
  const [paged, setPaged] = useState("firstPage");

  const ClickMe = e => {
    e.preventDefault();
    setIsClicked([
      ...isClicked,
      {
        label: e.target.trname.value,
        amount: e.target.tramount.value
      }
    ]);
  };

  React.useEffect(() => {
    switch (filter) {
      case "input":
        setIsClicked(isClicked.filter(({ amount }) => amount > 0));
        break;

      case "output":
        setIsClicked(isClicked.filter(({ amount }) => amount < 0));
        break;

      case "allofthem":
        setIsClicked(transactionData);
        break;

      default:
        setIsClicked();
        break;
    }
  }, [filter]);

  return (
    <div>
      <ButtonGroup setFilter={setFilter} />
      {isClicked.map(({ label, amount }) => (
        <Form label={label} amount={amount} />
      ))}
      <form onSubmit={ClickMe}>
        New transaction:
        <input type="text" name="trname" />
        Amount:
        <input type="number" name="tramount" />
        <button>Add new transaction</button>
      </form>
      <Pagination setPaged={setPaged} />
    </div>
  );
};

export default Compl;
