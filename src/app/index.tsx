import { styles } from "@/app/index/style";
import { colors } from "@/colors/colors";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={colors.primary}> Hello React Native!  </Text>
            <Text style={colors.secondary}> Cardoso </Text>
        </View>
    )
}

