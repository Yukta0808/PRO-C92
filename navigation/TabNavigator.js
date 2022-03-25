import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Homescreen';
import Article from '../screens/Articlescreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Articlescreen') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'Homescreen') {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'green',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Homescreen" component={Home} />
            <Tab.Screen name="Articlescreen" component={Article} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;