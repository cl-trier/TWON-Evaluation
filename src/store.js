import {defineStore} from 'pinia'


export const useDataStore = defineStore('data', {
    state: () => ({
        data: [],
    }),
    getters: {
        getData: (state) => {
            return state.data
        },
        getDataRaw: (state) => {
            return state.data.filter(
                (x) =>
                    x.annotation.topic == null ||
                    x.annotation.persona == null ||
                    x.annotation.authenticity == null
            )
        },
    },
    actions: {
        setData(data) {
            this.data = data
        },
        setAnnotation(id, value) {
            this.data.find(x => x.id === id).annotation = value
        },
    },
})