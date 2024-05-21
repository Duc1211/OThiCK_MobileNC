import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Signin() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{alignItems:'center',marginTop:30}}>
        <Text style={{ fontSize: 30 }}>signin</Text>
      </View>
      {/* input email */}
      <View style={{marginTop:30,marginLeft:45}}>
      <Text style={{fontSize:20}}>Email or Phone number</Text>
      </View>
      
      <View style={{ alignItems: "center", marginHorizontalH: "20%",marginBottom:30 }}>
        
        <TextInput
          placeholder="Email"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "80%",
          }}
        />
      </View>

      <View>
        <Pressable
          style={{
            backgroundColor: "blue",
            marginHorizontal: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            Continue with password
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderWidth: 1,
            borderColor: "blue",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20 }}>
            Send one-time passcode
          </Text>
        </Pressable>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 50,
          }}
        >
          <Text>---------Or----------</Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("App");
          }}
          style={{
            marginHorizontal: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderWidth: 1,
            borderColor: "blue",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20 }}>
            Continue with Facebook
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderWidth: 1,
            borderColor: "blue",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20 }}>
            Continue with Google
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderWidth: 1,
            borderColor: "blue",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20 }}>
            Continue with Apple
          </Text>
        </Pressable>

        <Pressable></Pressable>
      </View>
    </SafeAreaView>
  );
}
