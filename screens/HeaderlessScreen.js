import React, { useEffect } from "react";
import { View, Text, Button } from 'react-native';

function HeaderlessScreen({ navigation }) {
    useEffect(() => {
        navigation.setOptions({ title: '홈' })
    }, [navigation])

    return (
        <View>
            <Text>Header가 없네?</Text>
            <Button onPress={() => navigation.pop()} title="뒤로가기"></Button>
        </View>
    )
}

export default HeaderlessScreen;