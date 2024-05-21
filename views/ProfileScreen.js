import { View, Text, SafeAreaView, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useEffect } from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [listUser, setListUser] = React.useState([]);
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    fetch("https://6561fb1edcd355c083246fec.mockapi.io/TopTeacher")
      .then((response) => response.json())
      .then((responseJson) => {
        setListUser(responseJson);
        setFilteredUsers(responseJson);
        console.log("List user: ", responseJson);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setFilteredUsers(listUser.filter(user => user.network.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredUsers(listUser);
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>List User</Text>
      </View>
      <Searchbar
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchQuery}
        style={{ margin: 30 }}
      />
      {filteredUsers.map((user, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              margin: 10,
              height: 100,
              alignItems: "center",
              borderWidth: 0.2,
              borderRadius: 20,
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderColor: "gray",
              shadowColor: "#000",
              backgroundColor: "white",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,

            }}
          >
            <Image
              source={{ uri: user.image }}
              style={{ width: 80, height: 80, borderRadius: 100 }}
              resizeMode="cover"
            />
            <View style={{ flexDirection: "column" ,marginLeft: 10}}>
              <Text style={{ }}>{user.network}</Text>
              <Text style={{  }}>{user.title}</Text>
              <Image
              source={{ uri: user.imageRating }}
              style={{ width: 80, height: 10, borderRadius: 100 }}
              resizeMode="cover"
            />
            </View>
          </View>
        );
      })}

      
    </SafeAreaView>
  );
}
