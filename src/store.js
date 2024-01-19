import {defineStore} from 'pinia'

export const useDataStore = defineStore('data', {
    state: () => ({
        data: [],
    }),
    getters: {
        getData: (state) => {
            /**
             * Retrieves the data from the state.
             *
             * @param {object} state - The state object.
             * @return {any} The data stored in the state.
             */
            return state.data
        },
        getDataRaw: (state) => {
            /**
             * Filters the raw data based on the absence of all annotation properties.
             *
             * @param {object} state - The state object containing the data to be filtered.
             * @return {array} - The filtered data.
             */
            return state.data.filter(({annotation}) => {
                const {topic, persona, authenticity} = annotation
                return !topic || !persona || !authenticity
            });
        },
    },
    actions: {
        setData(data) {
            /**
             * Sets the data for the object.
             *
             * @param {type} data - the data to be set
             */
            this.data = data
        },
        setAnnotation(id, value) {
            /**
             * Sets the annotation value for the specified ID.
             *
             * @param {type} id - the ID of the data object
             * @param {type} value - the new annotation value
             */
            this.data.find(x => x.id === id).annotation = value
        },
    },
})