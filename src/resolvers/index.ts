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
            get_series_list:home.get_series_list,
            get_recomendations:home.get_recomendations,
            // SERIE
            get_serie:series.get_serie,
            // PLAYER
            get_chapter:series.get_chapter,
            // SEARCHER
            search:home.search,
        }
    };
}