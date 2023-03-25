
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native';
import GlobalStyle from '../Components/GlobalStyle';

import getDataMethod from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Home = () => {

    const [Loading, setLoading] = useState(true);
    const [fetchLoading, setFetchLoading] = useState(false);
    const [pageCurrent, setPageCurrent] = useState(1)

    const navigation = useNavigation();
    const dataFromApi = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        navigation.addListener('focus', async () => {
            console.log("use")
            setFetchLoading(true)
            getData();
        }), [navigation, pageCurrent]
    }

    )

    const getData = async () => {
        console.log("get")

        try {


            const res = await fetch('https://jsonplaceholder.typicode.com/posts?page=' + pageCurrent + '&limit=20');

            const data = await res.json();

            if (dataFromApi > 0) {
                dispatch(getDataMethod(dataFromApi.concat(data)));
            }
            else {
                dispatch(getDataMethod(data));
            }
            setFetchLoading(false);
            setLoading(false)
        }


        catch (error) {
            setFetchLoading(false);
            console.log(error);
        }


    }


    const handleLoadMore = () => {

        setPageCurrent(pageCurrent + 1);
        setFetchLoading(true);
    }
    return (
        <View style={styles.body}>


            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                Welcome !
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dataFromApi}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.id}</Text>
                        <Text style={styles.subtitle}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={() => getData()}
                refreshing={Loading}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={.5}


            />
            {fetchLoading ? (
                <View style={{ alignItems: 'center', width: '100%', height: 50, justifyContent: 'center', flexDirection: 'row', marginBottom: 5 }}>
                    <Text>Loading....</Text>
                    <ActivityIndicator size='large' />
                </View>
            ) : null}

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 60
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    item: {
        flex: 1,
        backgroundColor: "#fff",
    }
    ,
    title: {
        backgroundColor: '#f0fff0',
        fontSize: 30,
        margin: 10,
    },
    subtitle: {

        fontSize: 20,
        margin: 10,
        color: '#999999',
    },
})
export default Home;