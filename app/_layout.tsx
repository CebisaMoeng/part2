import { View, Text, ScrollView, StyleSheet, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

const HomeScreen = () => {
    const [menuList] = useState([
        {
            id: 1,
            course: 'Appetizer',
            name: 'Bruschetta',
            description: 'Grilled bread topped with diced tomatoes, basil, garlic, and olive oil.',
            price: 'R150'

        },
        {
            id: 2,
            name: 'Calamari Fritti',
            description: 'Lightly breaded and fried calamari served with marinara sauce and lemon.',
            price: 'R220'
        },
        {
            id: 3,
            course: 'Main_Courses',
            name: 'Grilled Salmon',
            description: 'Fresh salmon fillet grilled, served with asparagus and lemon butter sauce.',
            price: 'R450'

        },
        {
            id: 4,
            name: 'Pasta Primavera',
            description: 'Seasonal vegetables sautéed with garlic and olive oil over linguine.',
            price: 'R350'
        },
        {
            id: 5,
            course: 'Desserts',
            name: 'Tiramisu',
            description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.',
            price: 'R120'
        },
        {
            id: 6,
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
            price: 'R160'
        },
        {
            id: 7,
            course: 'Beverages',
            name: 'House Red Wine',
            description: 'Smooth blend with notes of cherry and oak.',
            price: 'R90/glass'
        },
        {
            id: 8,
            name: 'Sparkling Water',
            description: 'Refreshing sparkling water with a slice of lemon.',
            price: 'R40'
        },
        {
            id: 9,
            name: 'Craft Beer',
            description: 'Locally brewed beer with rich flavors.',
            price: 'R70'
        },
        {
            id: 10,
            name: 'Soft Drink',
            description: 'Choice of cola, lemon-lime, or ginger ale.',
            price: 'R30'
        },
    ])

    return (
        <ScrollView>
            <Text style={styles.header}>Christoffel's Restaurant!</Text>
            <Text style={{ fontSize: 10, fontWeight: 'bold', fontStyle: 'normal', color: 'plum' }}>HomeScreen [Menu Provided By Christoffel's Restaurant]</Text>
            <View style={{ padding: 1 }}>
                <Text>Food Course</Text>
                <TextInput style={{ borderWidth: 3, margin: 2 }} />
                <Text>Dish Name</Text>
                <TextInput style={{ borderWidth: 3 }} />
                <Text>Price</Text>
                <TextInput style={{ borderWidth: 3, margin: 2 }} />
                {menuList.map(menu => {
                    return (
                        <View key={menu.id} style={styles.menuDisplayBox}>
                            {menu.course && <Text style={{ fontWeight: 'bold' }}>{menu.course}</Text>}
                            <Text style={{ fontSize: 10, fontWeight: 'bold', fontStyle: 'normal', color: 'blue' }}>{menu.name}</Text>
                            <Text style={{ fontSize: 10, fontWeight: 'bold', fontStyle: 'normal', color: 'purple' }}>{menu.description}</Text>
                            <Text style={{ fontSize: 10, fontWeight: 'bold', fontStyle: 'normal', color: 'green' }}>{menu.price}</Text>

                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'pink',
    },

    menuDisplayBox: {
        borderWidth: 1,
        borderRadius: 16,
        padding: 4,
        marginTop: 5,
        color: 'white',
    },
    style: {
        fontSize: 10,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: 'blue',
    },

})

export default HomeScreen
