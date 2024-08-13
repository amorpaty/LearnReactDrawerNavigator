import React, { useEffect } from "react";
import { View, Button } from 'react-native';

function HomeScreen({ navigation }) {

    useEffect(() => {
        navigation.setOptions({ title: '홈' })
    }, [navigation])

    return (
        <View>
            <Button title="Detail 1 열기" onPress={() => navigation.navigate('Detail', { id: 1 })}></Button>
            <Button title="Detail 2 열기" onPress={() => navigation.navigate('Detail', { id: 2 })}></Button>
            <Button title="Detail 3 열기" onPress={() => navigation.navigate('Detail', { id: 3 })}></Button>
            <Button title="Headerless 열기" onPress={() => navigation.push('Headerless')}></Button>
        </View>
    )
}

export default HomeScreen;