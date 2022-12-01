import { StyleSheet } from "react-native";
import ExpensesOutput from "../Components/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
