export const campeones =[
    "Aatrox",
    "Ahri",
    "Akali",
    "Akshan",
    "Alistar",
    "Amumu",
    "Anivia",
    "Annie",
    "Fizz",
    "Jinx",
    "Kayn"
]
export function listCampeones() {
    console.log("Lista de los campeones:");
    campeones.forEach((campeones)=>{
        console.log(campeones);
    })
}