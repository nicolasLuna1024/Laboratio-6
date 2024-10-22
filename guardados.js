export function saveFavoriteCampeon(campeones){
    localStorage.setItem("favoriteChampion",campeones);
    console.log(`${campeones} se guardo como tu CAMPEON favorito!!`);
}

export function getFavoriteCampeon() {
    const campeonFavorite = localStorage.getItem("favoriteChampion")
    if(campeonFavorite){
        console.log(`Tu campeon favorito es ${campeonFavorite}`);
    }else{
        console.log("Aun no has seleccionado tu campeon favorito");
        
    }
}