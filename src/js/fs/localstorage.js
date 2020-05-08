

export class LocalStorage {
    constructor () {
    }
    loadList (cb) {

    }

    saveDraft (source) {
        // ローカルストレージに最新の状態を保存
        const name = 'draft'+location.pathname.replace(/\//g, '.');
        localStorage.setItem(name, JSON.stringify(source));
        console.log("draft:" + JSON.stringify(source));
        $.UIkit.notify("save..", {status:'success',timeout : 1000});
    }

    loadDraft (fileContainer, path, cb) {
        // ページが読み込まれたら、ローカルストレージから状態を読み込む
        const name = 'draft'+location.pathname.replace(/\//g, '.');
        const source = JSON.parse(localStorage.getItem(name)) || null;
        console.log("source:" + JSON.stringify(source));
        return (cb)?cb(source):source;
    }

}
export default LocalStorage