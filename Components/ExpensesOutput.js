import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "./constant/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummery from "./ExpensesSummery";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A Pair of shoes",
    amount: 59.9,
    date: new Date("2022-12-01"),
  },
  {
    id: "e2",
    description: "A Pair of trousers",
    amount: 40.9,
    date: new Date("2022-12-05"),
  },
  {
    id: "e3",
    description: "Some Banana",
    amount: 14.9,
    date: new Date("2022-10-25"),
  },
  {
    id: "e4",
    description: "A New Bike",
    amount: 400,
    date: new Date("2022-10-15"),
  },
  {
    id: "e5",
    description: "A Pair of shoes",
    amount: 59.9,
    date: new Date("2022-12-01"),
  },
  {
    id: "e6",
    description: "A Pair of trousers",
    amount: 40.9,
    date: new Date("2022-12-05"),
  },
  {
    id: "e7",
    description: "Some Banana",
    amount: 14.9,
    date: new Date("2022-10-25"),
  },
  {
    id: "e8",
    description: "A New Bike",
    amount: 400,
    date: new Date("2022-10-15"),
  },
  {
    id: "e9",
    description: "A New Bike",
    amount: 400,
    date: new Date("2022-10-17"),
  },
  {
    id: "e10",
    description: "A New Bike",
    amount: 400,
    date: new Date("2022-10-20"),
  },
];
const ExpensesOutput = ({ expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
