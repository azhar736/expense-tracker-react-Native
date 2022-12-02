import { useContext } from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../Components/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-contex";
const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
