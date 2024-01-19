export const annotationConfig = {
    min: 1,
    max: 5,
    value: 1,
    tooltipPosition: 'bottom',
    format: (value) => {
        const mapping = {
            1: 'low',
            2: 'semi-low',
            3: 'medium',
            4: 'semi-high',
            5: 'high'
        }

        return mapping[value] || 'undefined'
    }
};