import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

function DetailScreen({ route, navigation }) {

    useEffect(() => {
        navigation.setOptions({
            title: `상세 정보 - ${route.params.id}`,

        })
    }, [navigation, route.params.id])

    return (
        <View style={styles.block}>
            <Text style={styles.text}> id : {route.params.id} </Text>
            <View style={styles.buttons}>
                {/* <Button title="다음" onPress={() => navigation.navigate('Detail', { id: route.params.id + 1 })}></Button>*/}
                <Button title="다음" onPress={() => navigation.push('Detail', { id: route.params.id + 1 })}></Button>
                <Button title="뒤로가기" onPress={() => navigation.pop()}></Button>
                <Button title="처음으로" onPress={() => navigation.popToTop()}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 48,
    },
    buttons: {
        flexDirection: 'row'
    }
})

export default DetailScreen;