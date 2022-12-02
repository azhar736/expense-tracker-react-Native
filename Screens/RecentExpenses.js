import { useContext } from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../Components/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-contex";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const rencentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const recent = getDateMinusDays(today, 7);

    return expense.date > recent;
  });
  return (
    <ExpensesOutput
      expenses={rencentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No Expenses registered in Last 7 Days"
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
