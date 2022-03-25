import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Article extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text> Article Screen </Text>
                <Text>Ma'am, I will create the pagescreen in the upcoming   projects :D</Text>
            </View>
        )
    }
}
