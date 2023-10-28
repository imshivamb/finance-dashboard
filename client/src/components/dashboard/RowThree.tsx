import BoxStyle from "@/components/styles/BoxStyle";
import { useGetTransactionsQuery } from "@/state/api";

const RowThree = () => {
  const { data: transactionsData } = useGetTransactionsQuery();
  console.log("transactions", transactionsData);
  return (
    <>
      <BoxStyle bgcolor="#fff" gridArea="g"></BoxStyle>
      <BoxStyle bgcolor="#fff" gridArea="h"></BoxStyle>
      <BoxStyle bgcolor="#fff" gridArea="i"></BoxStyle>
      <BoxStyle bgcolor="#fff" gridArea="j"></BoxStyle>
    </>
  );
};

export default RowThree;
