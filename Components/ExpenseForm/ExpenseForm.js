import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../ui/Button";
import Input from "./Input";
const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel }) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const AmoutChangeHandler = (e) => {
    setAmount(e);
  };

  const dateHandler = (e) => {
    setDate(e);
  };

  const descriptionHandler = (e) => {
    setDescription(e);
  };

  console.log("The Data is", amount, date, description);

  const submitHandler = (e) => {
    const expenseData = {
      amount: amount,
      // date: date,
      description: description,
    };
    console.log("The expense data in Submit Handler is", expenseData);
    onSubmit(expenseData);
  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: AmoutChangeHandler,
          value: amount,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: dateHandler,
          value: date,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "words",
          onChangeText: descriptionHandler,
          value: description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
