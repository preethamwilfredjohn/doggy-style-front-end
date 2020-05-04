import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { exp } from 'react-native-reanimated';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export class DogProfile extends React.Component {
    state = {
        breed: '',
        name: '',
        placeOfBirth: '',
        sex: '',
        isCertified: '',
        color: '',
        age: '',
        description: ''
    }
    setBreed = (text) => {
        this.setState({ dogBreed: text })
    }
    setName = (text) => {
        this.setState({ dogName: text })
    }
    setPlaceOfBirth = (text) => {
        this.setState({ placeOfBirth: text })
    }
    setSex = (text) => {
        this.setState({ sex: text })
    }
    setIsCertified = (text) => {
        this.setState({ isCertified: text })
    }
    setColor = (text) => {
        this.setState({ color: text })
    }
    setAge = (text) => {
        this.setState({ age: text })
    }
    setDescription = (text) => {
        this.setState({ description: text })
    }
    onSubmit = () => { alert('Submitted') }
    render() {
        return (
            <View>
                <Text style={styles.header}>Dog Details</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Dog Breed"
                    onChangeText={this.setBreed}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Dog Name"
                    onChangeText={this.setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Place Of Birth"
                    onChangeText={this.setPlaceOfBirth}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sex"
                    onChangeText={this.setSex}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Is Certified?"
                    onChangeText={this.setIsCertified}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Color"
                    onChangeText={this.setColor}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    onChangeText={this.setAge}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Other Fur-Kid details"
                    onChangeText={this.setDescription}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.onSubmit()
                    }>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    header: {
        paddingTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'brown'
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        width: 200
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center'
    }
})