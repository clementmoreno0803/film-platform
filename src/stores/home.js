import { defineStore } from "pinia";
import axios from "axios";

export const useHomeStore = defineStore("homeStore", {
    state: () => ({
        home: [],
        filtered: [],
    }),
    getters: {
        isMovie() {
            return this.home.filter((m) => m.type == 'Movie')
        },
        isSeries() {
            return this.home.filter((m) => m.type == "TV Show")
        },
        // TROUVER UNE SOLUTION POUR POUVOIR L'UTILISER AVEC UNE V-FOR 
        // filterByCategory(category) {
        //     return this.home.filter((t) => t.listed_in.includes(`${category}`))
        // },
        isAComedie() {
            return this.home.filter((m) => m.listed_in.includes('Comedie'))
        },
        isAThriller() {
            return this.home.filter((t) => t.listed_in.includes('Thrillers'))
        },
        isAnAction() {
            return this.home.filter((a) => a.listed_in.includes('Action & Adventure'))
        },
        isAHorror() {
            return this.home.filter((h) => h.listed_in.includes('Horror'))
        },
        isADocumentary() {
            return this.home.filter((d) => d.listed_in.includes('Documentaries'))
        },
        isADrama() {
            return this.home.filter((dr) => dr.listed_in.includes('Dramas'))
        },
        isAnInternationalMovie() {
            return this.home.filter((im) => im.listed_in.includes('International Movies'))
        },
        isFav() {
            return this.home.filter((m) => m.isFav)
        },
        filterCount(state) {
            return state.filtered.length
        }
    },
    actions: {
        // Faire en sorte d'avoir l'ensemble de la liste si rien est passé en Params
        // 
        async getNews(updateFilter) {
            try {
                await axios
                    .get(`https://netflix-af578-default-rtdb.firebaseio.com/.json`)
                    .then((response) => {
                        this.filtered = []
                        this.home = response.data
                    })
                    .then(() => {
                        if (updateFilter) {
                            this.filtered = this.home.filter((t) => t.title.toLowerCase().includes(updateFilter.toLowerCase()))
                        } else {
                            return this.home
                        }
                    })
            } catch (error) {
                console.log(error);
            }
        },
        async toggleFav(show_id) {
            const showFav = this.home.find((obj) => obj.show_id == show_id);
            showFav.isFav = !showFav.isFav;
            await axios.put(
                `https://netflix-af578-default-rtdb.firebaseio.com/${show_id}.json`,
                showFav
            );
        },
    },
});