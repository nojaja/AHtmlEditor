
var htmlparser = Tautologistics.NodeHtmlParser;

export class AHtmlCompiler {
    constructor () {
    }

    parseHtml (rawHtml) {
        return htmlparser.parseDOM(rawHtml, {
            enforceEmptyTags: true,
            ignoreWhitespace: true,
            caseSensitiveTags: true,
            caseSensitiveAttr: true,
            verbose: false
        })
    }
    async compile (data) {
        let webComponentParser = new WebComponentParser({
            builder: ReactComponentBuilder
        });

        let reactRootParser = new ReactRootComponentBuilder({
            builder: ReactComponentBuilder
        });

        let builder = new HtmlBuilder({});
        //let builder2 = new HtmlBuilder({});
        let debugBuilder = new DebugBuilder({});
        let cssbuilder = new CSSBuilder({});
        let reactComponentBuilder = new ReactComponentBuilder({});
        let compiler1 = new Compiler(
            [cssbuilder, webComponentParser, reactRootParser],
            {}
        );
        let compiler2 = new Compiler([builder], {});
        //let compiler3 = new Compiler([builder2], {});

        //-ここからDemo用処理----------------------------------
        let parseData = this.parseHtml(data.source.model.getValue().trim());
        data.dom.model.setValue(this.stringify(parseData));
        compiler1.compile(parseData); //jsonオブジェクトを各種コードに変換します

        //editor4.setValue(cssbuilder.getNodes());

        webComponentParser.build(); //react化処理の実行
        //変換されたコードはwindowに読み込まれ実行可能になります。
        reactRootParser.build(); //react化処理の実行
        //変換されたコードはwindowに読み込まれ実行可能になります。
        data.component.model.setValue(webComponentParser.getResult());
        data.app.model.setValue(reactRootParser.getResult());

        let bodyElements = parseData.getElementsByTagName("body");
        if (parseData.getElementsByTagName("head").length == 0) {
            let $html = parseData.getElementsByTagName("html");
            let newElement = $html[0].createElement("head");
            $html[0].insertBefore(newElement, bodyElements[0]);
        }
        let headElements = parseData.getElementsByTagName("head");
        headElements.forEach(function(headElement) {
        //head配下に追加
        let addpoint = headElement.getElementsByTagName("script")[0];
        {
            let newElement = headElement.createElement("script");
            let child = newElement.createTextNode(reactRootParser.getResult()+"\n//# sourceURL=app.js");
            newElement.appendChild(child);
            headElement.insertBefore(newElement, addpoint);
            addpoint = newElement;
        }
        {
            let newElement = headElement.createElement("script");
            let child = newElement.createTextNode(webComponentParser.getResult()+"\n//# sourceURL=Component.js");
            newElement.appendChild(child);
            headElement.insertBefore(newElement, addpoint);
            addpoint = newElement;
        }
        {
            let newElement = headElement.createElement("script");
            newElement.attributes = {
                src: [
                    {
                    type: "text",
              		data: "https://fb.me/react-dom-15.1.0.js"
                    }
                ]
            };
            headElement.insertBefore(newElement, addpoint);
            addpoint = newElement;
        }
        {
            let newElement = headElement.createElement("script");
            newElement.attributes = {
                src: [
                    {
                    type: "text",
                    data: "https://fb.me/react-15.1.0.js"
                    }
                ]
            };
            headElement.insertBefore(newElement, addpoint);
            addpoint = newElement;
        }
        {
            let newElement = headElement.createElement("script");
            newElement.attributes = {
                src: [
                    {
                    type: "text",
                    data:
                        "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
                    }
                ]
            };
            headElement.insertBefore(newElement, addpoint);
            addpoint = newElement;
        }
        }, this);

        bodyElements.forEach(function (bodyElement) {
            {
                let newElement = bodyElement.createElement("script");
                let child = newElement.createTextNode(`
        var render = function render() {
            ReactDOM.render(
                React.createElement(App, null),
                document.querySelector("#app")
            );
        };

        $(function () {
            /* render initial component */
            render();
        });
                `);
                newElement.appendChild(child);
                bodyElement.appendChild(newElement);
            }
        }, this);
        compiler2.compile(parseData.children); //jsonオブジェクトを各種コードに変換します
        // compiler3.compile(bodyElements[0].children); //jsonオブジェクトを各種コードに変換します
        data.html.model.setValue(builder.getNodes());
        // iframe内のコンテンツのdocumentオブジェクト追加
        // $("#child-frame").attr("srcdoc", builder.getNodes());

        /*
        var iframehead = document.getElementById("child-frame").contentDocument.head;
        {
        var newElement = document.createElement("script");
            newElement.type = "text/javascript";
            newElement.innerHTML  = reactRootParser.getResult();
            iframehead.appendChild(newElement);
        }
        {
        var newElement = document.createElement("script");
            newElement.type = "text/javascript";
            newElement.innerHTML  = webComponentParser.getResult();
            iframehead.appendChild(newElement);
        }
        // document.getElementById("child-frame").contentDocument.body.innerHTML = builder2.getNodes();
        */
        // document.getElementById("child-frame").contentDocument.innerHTML = builder.getNodes();

        // iframe内のコンテンツを更新
        $("#child-frame").attr("srcdoc", "");
        //$("#child-frame").attr("src", "./blank.html");
        var frame = document.getElementById("child-frame");
        frame.src = "./blank.html";
        frame.onload = function(){
            frame.onload=function(){};
            frame.contentDocument.open();
            frame.contentDocument.write(builder.getNodes());
            frame.contentDocument.close();
            $.UIkit.notify("compile..", {status:'success',timeout : 1000});
        }
    }

    stringify(str) {
        var cache = [];
        return JSON.stringify(
            str,
            function (key, value) {
            if (typeof value === "object" && value !== null) {
                if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
                }
                // Store value in our collection
                cache.push(value);
            }
            if (key == "parentNode") return;
            return value;
            },
            "\t"
        )
    }
}
export default AHtmlCompiler