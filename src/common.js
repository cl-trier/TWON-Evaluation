import {saveAs} from 'file-saver'
import {sha1} from 'object-hash'


export async function uploadJSON(file) {
    /**
     * Uploads a JSON file and returns its parsed content.
     *
     * @param {File} file - The JSON file to be uploaded.
     * @return {Promise} A promise that resolves with the parsed JSON content of the file.
     */
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = event => resolve(JSON.parse(event.target.result))
        fileReader.onerror = error => reject(error)
        fileReader.readAsText(file)
    })
}

export function downloadJSON(object) {
    /**
     * Downloads a JSON object as a file.
     *
     * @param {object} object - The JSON object to be downloaded.
     */
    saveAs(
        new Blob(
            [JSON.stringify(object, null, 4)],
            {type: 'application/json'}
        ),
        Date.now() + sha1(object) + '.json'
    )
}