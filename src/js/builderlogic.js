import * as monaco from 'monaco-editor'
import AHtmlCompiler from './compiler/ahtmlcompiler.js'

export class BuilderLogic {
    constructor () {
        this.aHtmlCompiler = new AHtmlCompiler()
    }
 
    //全てのsourceのcompile
    compileAll (data,cb) {
        this.aHtmlCompiler.compile(data)
        return (cb)?cb():true
    }
}
export default BuilderLogic