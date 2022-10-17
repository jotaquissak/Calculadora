import React from 'react';
import { Text, View } from 'react-native';
import styles from './style'

export default props=>{
    return(
        <View style={styles.display}>
            <Text
                style={styles.textDspOpr}
                numberOfLines={1}
            >{props.value}</Text>
            <Text
                style={styles.textDspResult}
                numberOfLines={1}
            >{props.result}</Text>
        </View>
    )
}
