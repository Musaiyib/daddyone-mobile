import React, { useState } from "react";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { emailValidator } from "../helpers/emailValidator";
import { phoneValidator } from "../helpers/phoneValidator";
import { Text } from "react-native";
import { user_forgot_password } from "../api/user_api";

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    const phoneError = phoneValidator(phone.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    if (phoneError) {
      setPhone({ ...phone, error: phoneError });
      return;
    }
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    try {
      user_forgot_password({
        email_f: email.value.toLocaleLowerCase(),
        mobile: phone.value,
      }).then((res) => {
        // handle success
        console.log(res);
        alert(res.msg);
      });
      navigation.navigate("LoginScreen");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Phone Number"
        returnKeyType="done"
        value={phone.value}
        onChangeText={(num) => setPhone({ value: num, error: "" })}
        error={!!phone.error}
        errorText={phone.error}
        keyboardType="numeric"
        maxLength={14}
      />
      <Text style={{ alignSelf: "left", fontSize: 12 }}>
        You will receive email with password reset link.
      </Text>
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Reset Link
      </Button>
    </Background>
  );
}
