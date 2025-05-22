import { Card } from "@/components/Card";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import ThemedText from "@/components/ThemedText";
import { useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import { useThemedColors } from "@/hooks/useThemedColors";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonId } from "./functions/pokemon";

export default function Index() {
  const colors = useThemedColors()
  const {data, isFetching, fetchNextPage} = useInfiniteFetchQuery('/pokemon?limit=21')
  const pokemons = data?.pages.flatMap(page => page.results) ?? []
  return (
    <SafeAreaView
      style={
        [
          styles.container ,
          { backgroundColor: colors.tint }
        ] 
        
      }
    >
      <View style={styles.header}>
        {/* <Image style={styles.img} source={ require("@/assets/images/pokeball.png") } /> */}
          <ThemedText variant="headline" color="grayLight">Pokedex</ThemedText>
        </View>  
        <Card  style={styles.body}>
          <FlatList 
            data={pokemons}
            numColumns={3}
            columnWrapperStyle={styles.gridGap}
            ListFooterComponent={
              isFetching ? <ActivityIndicator color={colors.tint}/> : null
            }
            onEndReached={() => fetchNextPage()}
            contentContainerStyle={[styles.gridGap , styles.list]}
            renderItem={({item}) => <PokemonCard id={ getPokemonId(item.url) } name={item.name}  style={{flex: 1/3 , height: 100}} />} keyExtractor={(item) => item.url}/>
      </Card>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding: 4,
  },
  img:{
    height: 4,
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 12,
  },
  body:{
    flex: 1,
  },
  gridGap:{
    gap: 8
  },
  list:{
    padding: 12,
  }
})
