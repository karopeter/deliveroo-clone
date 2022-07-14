import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation  } from "@react-navigation/native";
import { 
    ArrowLeftIcon,
    ChevronRightIcon,
    LocationMarkerIcon,
    StarIcon
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
   const navigation = useNavigation();

    const {
       params: {
         id, 
         imgUrl,
         title, 
         rating,
         genre,
         address,
         short_description,
         dishes,
         long,
         lat
       }
    } = useRoute();

    useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      });
    }, []);

    return (
      <ScrollView>
         <View className="relative">
           <Image 
            className="w-full h-56 bg-gray-300 p-4"
             source={require('../assets/sushi.jpg')}
           />
           <TouchableOpacity 
             onPress={navigation.goBack}
             className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
               <ArrowLeftIcon 
                 size={20} 
                 color="#00CCBB" 
                />
           </TouchableOpacity>
         </View>
         <View classname="bg-white">
           <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{title}</Text>
              <View className="flex-row space-x-2 my-1">
                 <View className="flex-row items-center space-x-1">
                   <StarIcon 
                      color="green"
                      opacity={0.5}
                      size={22}
                   />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> . {genre}
                  </Text>
                 </View>
                 <View className="flex-row items-center space-x-1">
                   <LocationMarkerIcon 
                      color="gray"
                      opacity={0.4}
                      size={22}
                   />
                   <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                 </View>
              </View>
              <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
           </View>
           <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
             <QuestionMarkCircleIcon 
               color="gray"
               opacity={0.6}
               size={20}
              />
              <Text className="pl-2 flex-1 text-md font-bold">
                 Have a food  allergy?
              </Text>
              <ChevronRightIcon 
                  color="#00CCBB"
               />
           </TouchableOpacity>
         </View>
         <View>
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

            { /* Dishrows */ }
            <DishRow 
              id="1"
              menu="PERI-PERI Nuts"
              paragraph="Crunchy diamonds cashews and macadamia nuts in-a fiery PERI-PERI seasoning. Serves 2-3"
              price="$3.75"
              image={require("../assets/wallnuts.jpg")}
            />
            <DishRow 
              id="2"
              menu="3 Chicken Wings"
              paragraph="Flame-grilled, infused with PERI PERI and perfect for paring with slide. Served in your choice of spice."
              price="4.50"
              image={require("../assets/chicken.png")}
            />
            <DishRow 
              id="3"
              menu="Family Platter"
              paragraph="2 whole chicken and 5 large sides. Serves-4-6"
              price="$50.55"
              image={require("../assets/family.jpg")}
            />
            <DishRow 
              id="4"
              menu="1/2 Chicken"
              paragraph="One breast and one leg. flame-grilled and infused with PERI PERI served on the bone with crispy skin, in your choice of spice."
              price="$8.25"
              image={require("../assets/grill.jpeg")}
            />
            <DishRow 
              id="5" 
              menu="Chicken Butterfly"
              paragraph="Two chicken breasts, flame-grilled with crispy skin infused with PERI PERI, and served in your choice of spice."
              price="5.75"
              image={require("../assets/butterfly.jpg")}
            />
            <DishRow 
              id="6"
              menu="Quinoa & PERi-Tomato Salad"
              paragraph="Crunchy lettuce, tightly salted pitta croutons, semi-dried PERI Tomatoes, crumbly feta and generous handful of quinoa in a Lemon & Wild Garlic dressing It's filling and then some"
              price="$60.80"
              image={require("../assets/salad.jpg")}
            />
         </View>
      </ScrollView>
    );
}

export default RestaurantScreen;