import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
// import { useDispatch, useSelector } from "react-redux";
// import { addToBasket, selectBasketItems, selectBasketItemsWithId } from "../features/basketSlice";

const DishRow = ({id, menu, paragraph, price, image}) => {
    const [isPressed, setIsPressed] = useState(false);
  //  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  //  const dispatch = useDispatch();

  //  const addItemToBasket = () => {
  //      dispatch(addToBasket({ id, menu, description, price, image}));
  //  };

  //  console.log(items);

    return (
     <>
     <TouchableOpacity 
       onPress={() => setIsPressed(!isPressed)}
       className={`bg-white border p-4 border-gray-200 ${
         isPressed &&  "border-b-0"
       }`}>
     <View className="flex-row">
      <View className="flex-1 pr-2">
       <Text className="text-lg mb-1">{menu}</Text>
       <Text className="text-gray-400">{paragraph}</Text>
       <Text className="text-gray-400 mt-2">
         <Currency 
           quantity={price}
           currency="GBP"
         />
       </Text>
      </View>

      <View>
        <Image 
          source={image}
          style={{
            borderWidth: 1,
            borderColor: "#F3F3F4"
          }}
          className="h-20 w-20 bg-gray-300 p-4"
        />
      </View>
      </View>
     </TouchableOpacity>

     {isPressed && (
      <View className="bg-white px-4">
         <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon 
                color="#00CCBB"
                 size={40}
              />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
                <PlusCircleIcon 
                 color="#00CCBB"
                  size={40}
                />
            </TouchableOpacity>
         </View>
      </View>
     )}
     </>
    );
}

export default DishRow;