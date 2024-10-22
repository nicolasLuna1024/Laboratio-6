import { listCampeones,campeones } from "./campeones.js";
import { saveFavoriteCampeon, getFavoriteCampeon } from "./guardados.js";


listCampeones();
saveFavoriteCampeon(campeones[5])
getFavoriteCampeon();

