import React from "react";
import {SafeAreaView ,View, Text , StyleSheet, FlatList, Dimensions, Image, TouchableOpacity} from "react-native";
import groceries from "../../component/groceries";

const width = Dimensions.get('window').width/2-30;

const Demo=()=>{
    
    const Card =({grocery})=> {
        return( 
        <View style={style.Card} >
            <View style={{height:100, alignItems:'center'}}>
            <Image style ={{flex:1, resizeMode:'contain'}} source={grocery.image}/>
            </View>
            <Text style={{fontWeight:"bold", fontSize: 17, marginTop: 10}}>
                {grocery.title}
            </Text>
            <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: 5,}}>
                <Text style={{fontSize: 19, fontWeight: "bold"}}>${grocery.price}</Text>
                <View style ={{
                    height:25, width: 25, borderRadius: 5, justifyContent: 'center', alignItems:'center',backgroundColor:'green'
                }}>
                    <TouchableOpacity><Text style={{fontSize: 22, fontWeight: "bold"}}>+</Text></TouchableOpacity>
                    
                </View>
            </View>
        </View>
        );
    };
    
    

    return(
        <SafeAreaView style={{marginHorizontal:20}}>
            <View style={style.header}>
                <View>
                <Text style={{fontSize:25, fontWeight:'bold'}}>Welcome to</Text>
                <Text style={{fontSize:38, fontWeight:'bold' , color: 'green'}}>Groceries shop</Text>
                </View>
        
        <Image source={require('../../Assets/cart1.png')} style={{width: 30, height: 30, marginTop:30 }}/>
        </View>
        <View><FlatList columnWrapperStyle={{justifyContent:'space-between'}}
showsVerticalScrollIndicator={false}
contentContainerStyle={{marginTop:10, paddingBottom: 50,}}
numColumns={2} data={groceries} renderItem={({item})=>{
return  <Card grocery={item}/> }
}/></View>
        </SafeAreaView>
          
    );
};

const style=StyleSheet.create({
    header:
{

    flexDirection:'row',
    justifyContent: 'space-between',
},
Card: {

    height: 225,
    width,
    marginHorizontal:2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    },
})
export default Demo;