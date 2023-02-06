import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { userTrx } from "../api/trx_api";
import { getStoredData } from "../helpers/dataStorage";

export default function TransactionsScreen({ navigation }) {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStoredData()
      .then((res) => setUser(JSON.parse(res)))
      .catch((error) => console.error(error));
  }, []);

  const getTrx = () => {
    userTrx(user)
      .then((res) => {
        setTransactions(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(true);
        console.error(error);
      });
  };

  useEffect(() => {
    if (!user) return;
    setInterval(() => {
      getTrx();
    }, 1000);
  }, [user]);

  const TransactionItem = ({ transaction }) => {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.label}>Network:</Text>
          <Text style={styles.value}>{transaction.network}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{transaction.phone}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>{transaction.amount}</Text>
        </View>
        {transaction.plan && (
          <View style={styles.container}>
            <Text style={styles.label}>Plan:</Text>
            <Text style={styles.value}>{transaction?.plan}</Text>
          </View>
        )}
        <View style={styles.container}>
          <Text style={styles.label}>Type:</Text>
          <Text style={styles.value}>
            {!transaction.plan ? "Airtime" : "Data"}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>
            {new Date(transaction.createdAt).toLocaleDateString()}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        keyExtractor={(item) => item._id}
      />
      {loading && (
        <View style={styles.noTrx}>
          <Text style={styles.noTrxText}>No transaction yet</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
  },
  noTrx: {
    justifyContent: "center",
    marginVertical: 300,
  },
  noTrxText: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
  },
  value: {
    textTransform: "uppercase",
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
