import { Shadows } from "@/app/constants/Shadows";
import { useThemedColors } from "@/hooks/useThemedColors";
import { View, ViewStyle, type ViewProps } from "react-native";

 
type Props = ViewProps

export function Card({style, ...rest} : Props){
    const colors = useThemedColors()
    return <View style={[style , styles, { backgroundColor: colors.grayWhite }]} {...rest} />

}

const styles = {
    borderRadius: 8,
    overflow: "hidden",
    ...Shadows.dp2
} satisfies ViewStyle