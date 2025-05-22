import { Colors } from "@/app/constants/Colors";
import { useColorScheme } from "react-native";

export function useThemedColors (){
    const theme = useColorScheme() ?? "light"
    return Colors[theme]

}