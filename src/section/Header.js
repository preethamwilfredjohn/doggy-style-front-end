import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Header extends React.Component {
    render() {
        return (<View>
            <Text style={styles.header}>
                Doggy Style
            </Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'brown'
    }
})