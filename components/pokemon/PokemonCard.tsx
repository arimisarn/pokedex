import { ThemedText } from "@/app-example/components/ThemedText"
import { Card } from "@/components/Card"
import { useThemedColors } from "@/hooks/useThemedColors"
import { type ViewStyle, Image, StyleSheet, View } from "react-native"

type Props = {
    style?: ViewStyle,
    id : number,
    name: string
}

export function PokemonCard({style , id , name}: Props){
    const colors = useThemedColors()
    return <Card style={[style , styles.card]}>
        <View style={[styles.shadow ,  {backgroundColor: colors.grayBackground}] }/>
        <ThemedText style={styles.id} variant="caption" color="grayMedium"> #{id.toString().padStart(3, '0')} </ThemedText>
        <Image 
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` }}
            width={100}
            height={100}
            />
        <ThemedText >{name}</ThemedText>
    </Card>
}

const styles = StyleSheet.create({
    card :{
        position: 'relative',
        alignItems: 'center', 
        padding: 4
    }, id:{
        alignSelf: 'flex-end'
    },
    shadow:{
        position: 'absolute',
        bottom: 0,
        left:0,
        right: 0,
        height: 80,
        borderRadius: 7
    }
})