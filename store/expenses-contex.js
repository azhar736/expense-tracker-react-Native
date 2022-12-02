import { createContext, useReducer } from "react";
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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  //Dispatching Differnet actions
  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
