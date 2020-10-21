export async function search(){
    const busca = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    const json = await busca.json();
    return json;
}