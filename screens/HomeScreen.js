import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
   UserIcon,
   ChevronDownIcon,
   SearchIcon,
   AdjustmentsIcon,
}  from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
         headerShown: false,
        });
    }, []);

    useEffect(() => {
      sanityClient.fetch(`
      *[_type == "featured"] {
         ...,
        restaurants[]-> {
          ...,
          dishes[]->
        }
      }`).then(data => {
         setFeaturedCategories(data)
      })
    }, []);

    console.log(featuredCategories);

    return (
      <SafeAreaView className="bg-white pt-5">
          { /* HEADER */ }
          <View className="flex-row pb-3 items-center mx-4 space-x-2">
             <Image 
                source={{
                   uri: 'https://links.papareact.com/wru'
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
              />
              <View className="flex-1">
                 <Text className="font-bold text-gray-400 text-xs">
                    Deliver Now!
                  </Text>
                 <Text className="font-bold text-x1">
                   Current Location
                   <ChevronDownIcon size={20} color="#00CCBB" />
                 </Text>
              </View>

              <UserIcon 
                size={35}
                color="#00CCBB"
               />
         </View>

         { /* SEARCH  */}
         <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View 
            className="flex-row flex-1 space-x-2 bg-gray-200 p-3"
           >
            <SearchIcon
               color="gray" 
               size={20} 
             />
            <TextInput 
               placeholder="Restaurants and cuisiness"
               keyboardType="default"
             />
          </View>
           <AdjustmentsIcon 
              color="#00CCBB" 
           />
         </View>

         { /* BODY */ }
         <ScrollView 
            className="bg-gray-100"
            contentContainerStyle={{
              paddingBottom: 100,
            }}
         >
           {/* Categories */ }
           <Categories />

           {/* Featured */ }
           {/* {featuredCategories?.map(category => (
            <FeaturedRow 
              key={category.key}
              id={category.id}
              title={category.name}
              description={category.description}
              featuredCategory="featured"
            />
           ))} */}

           {/* Featured Rows */ }
           <FeaturedRow
              id="12345"
              title="Offer near you!"
              description="Why not support your local resturant tonight"
              featuredCategory="offers"
            />
            <FeaturedRow
               id="1234"
               title="Tasty Discounts"
               description="Everyone's been enjoying these juicy discounts!"
               featuredCategory="discounts"
            />
           <FeaturedRow 
              id="123"
              title="Featured"
              description="Paid placements from our partners"
              featuredCategory="featured"
            />
         </ScrollView>
      </SafeAreaView>
    );
}

export default HomeScreen;