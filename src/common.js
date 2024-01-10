import {saveAs} from 'file-saver'
import {sha1} from 'object-hash'

export function download_as_JSON(object) {
    console.log(JSON.stringify(object))

    saveAs(
        new Blob(
            [JSON.stringify(object)],
            {type: 'application/json'}
        ),
        Date.now() + sha1(object) + '.json'
    )
}