import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import uuid from "react-native-uuid";
import MTN from "../../assets/mtn.png";
import Airtel from "../../assets/airtel.png";
import Etisalat from "../../assets/9mobile.png";
import Glo from "../../assets/glo.png";

const CableTvScreen = () => {
  const [subscriptions, setSubscriptions] = useState([
    { plan: "Nova Plan", amount: 1800, id: uuid.v4() },
    { plan: "Kids Plan", amount: 2800, id: uuid.v4() },
    { plan: "Test Plan", amount: 3800, id: uuid.v4() },
    { plan: "Starter Plan", amount: 4800, id: uuid.v4() },
    { plan: "Joy Plan", amount: 5800, id: uuid.v4() },
    { plan: "Smarter Plan", amount: 6800, id: uuid.v4() },
  ]);

  const handleSmartCard = () => {
    smartCardNum ? console.log(cableTv) : null;
  };

  return (
    <View
      style={{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
      }}
    >
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.itemWrapper}>
          <View style={styles.Mtn}>
            <Image style={styles.images} source={MTN} />
            <View>
              <Text style={styles.text}>MTN SME: *461*4#</Text>
              <Text style={styles.text}>MTN Gifting: *460*260#</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemWrapper}>
          <View style={styles.Airtel}>
            <Image style={styles.images} source={Airtel} />
            <View>
              <Text style={styles.text}>Airtel: *140#</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemWrapper}>
          <View style={styles.Etisalat}>
            <Image style={styles.images} source={Etisalat} />
            <View>
              <Text style={styles.text}>MTN SME: *228#</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemWrapper}>
          <View style={styles.Glo}>
            <Image style={styles.images} source={Glo} />
            <View>
              <Text style={styles.text}>MTN SME: *127*0#</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  itemWrapper: {
    backgroundColor: "#ffebe6",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  images: {
    marginHorizontal: 40,
  },
  text: {
    fontWeight: "800",
    marginVertical: 3,
  },
  Mtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Airtel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Glo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Etisalat: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CableTvScreen;
