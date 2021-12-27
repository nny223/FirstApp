//common-layouts.js
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default function commonLayouts() {
return (
<View style={styles.container}>
       <View style={styles.item1}></View> 
       <View style={styles.item2}></View>
       <View style={styles.item3}></View>
       <View style={styles.item4}></View>
       <View style={styles.item5}></View>
</View>
)
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'center',
    },
    item1: {
    height: 300,
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    },
    item2: {
        height: 200,
        width: 162,
        backgroundColor: 'green',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: 5,
        marginLeft: 0,

        },
        item3: {
            height: 200,
            width: 162,
            backgroundColor: 'yellow',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
            marginRight: 5,
            marginLeft: 0,
            },
            item4: {
                height: 200,
                width: 162,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
                marginRight: 5,
                marginLeft: 0,
                },
                item5: {
                    height: 200,
                    width: 162,
                    backgroundColor: 'purple',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginRight: 5,
                    marginLeft: 0,
                    },
    })
    