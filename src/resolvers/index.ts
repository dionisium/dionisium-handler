// CLASS
import Home from "./home";
import Series from "./series";

// IMPLEMENTS
const home = new Home();
const series = new Series();

export default class {
    resolver = {
        Query:{
            // HOME
            get_covers_list:home.get_covers_list,
            get_viewing:home.get_viewing,
            get_recomendations:home.get_recomendations,
            // SERIE
            get_serie:series.get_serie,
            // PLAYER
            get_season:series.get_season,
            get_chapter:series.get_chapter,
            // SEARCHER
            search:home.search,
        }
    };
}