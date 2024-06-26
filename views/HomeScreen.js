import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
export default function Home() {
  const [hightlight, sethightlight] = React.useState([]);
  const [listdatarecomments, setListdatarecomments] = React.useState([]);
  const [trending, settrending] = React.useState([]);
  const [data, setdata] = React.useState(
    []
  );

  useEffect(() => {
    fetch("https://6561fb1edcd355c083246fec.mockapi.io/courseInspires")
      .then((response) => response.json())
      .then((data) => {
        sethightlight(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://65636da6ee04015769a7312d.mockapi.io/recomment")
      .then((response) => response.json())
      .then((data) => {
        setListdatarecomments(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://65636da6ee04015769a7312d.mockapi.io/popularCourse")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
        console.log(data);
      });
  }, []);
  // trending
  useEffect(() => {
    fetch("https://6561fb1edcd355c083246fec.mockapi.io/TopTeacher")
      .then((response) => response.json())
      .then((data) => {
        settrending(data);
        // console.log(data);
      });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          height: 120,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor:'#fff',
        }}
      >
        <View
          style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
        >
          <Image
            source={require("../image/Data/IconButton2.jpg")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ fontSize: 20, fontWeight: 700, marginLeft: 20 }}>
            For you
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
        >
          <Image
            source={require("../image/Data/IconButton1.jpg")}
            style={{ width: 30, height: 30 }}
          />
          <Image
            source={require("../image/Data/Avatar5.jpg")}
            style={{ width: 50, height: 50, marginLeft: 10 }}
          />
        </View>
      </SafeAreaView>

      <View style={{flex:1, alignItems: "center" }}>
        <ScrollView
          style={{ width: "90%", height: "78%" }}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
        >
          {/* image  */}
          <View style={{ marginBottom: 5 }}>
            <Image
              source={require("../image/image1.png")}
              style={{ width: "100%", height: 200 }}
              resizeMode="contain"
            />
          </View>

          {/* View hightlight */}
          <View style={{ marginTop: 30 }}>
            {/* content popular */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Hightlight
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </TouchableOpacity>
            </View>
            {/* items popular */}
            <View>
              {hightlight.map((item) => {
                return (
                  <View style={{ marginBottom: 20 }} key={item.id}>
                    <TouchableOpacity
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                        flexDirection: "row",
                        alignItems: "center",
                        height: 150,
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: "40%", height: 100 }}
                      />

                      <View
                        style={{
                          flexDirection: "column",
                          marginLeft: 10,
                          width: "58%",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "space-between",

                            marginRight: 10,
                          }}
                        >
                          <Text>{item.network}</Text>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 700,
                              marginTop: 5,
                            }}
                          >
                            {item.title}
                          </Text>
                        </View>
                        <Text style={{ fontWeight: 600, color: "gray" }}>
                          {item.author}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.time}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          {/* View Trending */}
          <View style={{ marginTop: 15 }}>
            {/* content Trending */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Trending
              </Text>
            </View>
            <View style={{marginVertical:20}}>

              <Image source={require('../image/Data/global.png')} style={{ width: '100%', height: 150 }} />

            </View>
            {/* items trending */}
            <View style={{ height: 300 ,marginBottom:10}}>
              <FlatList
                data={trending}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250,width:320 }}>
                    <TouchableOpacity
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: 300, height: 150 }}
                        
                      />
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ fontWeight: 600, color: "gray" }}>
                          {item.network}
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: 700 ,marginTop:5,maxWidth:'98%'}}>
                          {item.title}
                        </Text>
                      </View>

                      <Text
                        style={{
                          fontWeight: 600,
                          color: "gray",
                          fontSize: 16,
                          marginTop: 10,
                        }}
                      >
                        {item.time}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
                
              />
              {/* View more */}
              <View style={{alignItems:'center'}}>
                <Pressable style={{ flexDirection: "row", alignItems: "center",backgroundColor:'#9aa',height:40,width:'70%',justifyContent:'center'}}>
                  <Text style={{ fontSize: 18, color: "black", fontWeight: 700 ,marginRight:10}}>
                    Read full coverage
                  </Text>
                  <Feather name="arrow-right-circle" size={24} color="black" />
                  </Pressable>
              </View>
            </View>
          </View>

          <View style={{marginTop:30}}>
            {
              data.map((item)=>{
                return(
                  <View style={{marginBottom:20}} key={item.id}>
                    <View style={{flexDirection:'column',justifyContent:'space-between',marginBottom:10}}>
                      <Image source={{uri:item.image}} style={{width:'100%',height:300}} />
                      <Text style={{fontSize:15,color:'gray',fontWeight:700,marginTop:5,marginBottom:5}}>{item.network}</Text>
                      <Text style={{fontSize:18,color:'black',fontWeight:700}}>{item.title}</Text>
                      <Text style={{fontSize:15,color:'gray',fontWeight:700,marginTop:5,marginBottom:5}}>{item.time}</Text>
                      
                    </View>
                    <View>
                      
                    </View>
                  </View>
                )
              })
            }
          </View>

          
        </ScrollView>
      </View>
    </>
  );
}
