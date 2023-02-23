<FlatList columnWrapperStyle={{justifyContent:'space-between'}}
showsVerticalScrollIndicator={false}
contentContainerStyle={{marginTop:10, paddingBottom: 50,}}
numColumns={2} data={groceries} renderItem={({item})=>{
return  <Card grocery={item}/> }
}/>


import groceries from "../../component/groceries";

const width = Dimensions.get('window').width/2-30;


const Card =({grocery})=> {
    return( 
    <View style={style.card}>
        <View style={{height:100, alignItems:'center'}}>
        <Image style ={{flex:1, resizeMode:'contain'}} source={grocery.image}/>
        </View>
        <Text style={{fontWeight:"bold", fontSize: 17, marginTop: 10}}>
            {grocery.title}
        </Text>
        <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: 5,}}>
            <Text style={{fontSize: 19, fontWeight: "bold"}}>${grocery.price}</Text>
            <View style ={{
                height:25, width: 25, borderRadius: 5, justifyContent: 'center', alignItems:'center'
            }}>
                <Text style={{fontSize: 22, fontWeight: "bold"}}>+</Text>
            </View>
        </View>
    </View>
    );
};





/*card: {

    height: 225,
    width,
    marginHorizontal:2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    },
*/