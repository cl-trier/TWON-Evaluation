import {defineStore} from 'pinia'


export const useEvaluationStore = defineStore('evaluation', {
    state: () => ({
        evaluation: {},
    }),
    getters: {
        getEvaluation: (state) => {
            return state.evaluation
        },
        getEvaluationByID: (state) => {
            return (id) => state.evaluation[id]
        },
    },
    actions: {
        setEvaluation(id, value) {
            this.evaluation[id] = value
        },
    },
})