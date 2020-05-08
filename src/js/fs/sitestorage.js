

export class SiteStorage {
    constructor () {
    }
    loadList (cb) {

    }

    saveDraft (source) {
    }

    loadDraft (fileContainer, url, cb) {
        $.ajax({
            url: url,
            dataType: "html"
        }).done( (source) => {
            //editor.setValue(d);
            console.log("source:" + JSON.stringify(source));
            return (cb)?cb(source):source;
        });
    }

}
export default SiteStorage