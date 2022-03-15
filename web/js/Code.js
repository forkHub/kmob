"use strict";
var ha;
(function (ha) {
    var kmob;
    (function (kmob) {
        class Code {
            kons = new ha.kmob.Kons();
            pindah(url) {
                window.top.location.href = this.kons.SERVER + url;
            }
            init() {
                console.log('code init');
                this.fungsiIframe.src = this.fungsiIframe.getAttribute("data-src") + "?r=" + Math.floor(Math.random() * 100);
                this.pilihBarisIframe.src = this.pilihBarisIframe.getAttribute("data-src") + "?r=" + Math.floor(Math.random() * 100);
                window.top.location.href = "#fungsi";
                // window.scrollTo(0, 0);
            }
            get fungsiIframe() {
                return ha.comp.Util.getEl("iframe#fungsi");
            }
            get pilihBarisIframe() {
                return ha.comp.Util.getEl("iframe#pilih-baris");
            }
        }
        kmob.Code = Code;
    })(kmob = ha.kmob || (ha.kmob = {}));
})(ha || (ha = {}));
var code;
window.onload = () => {
    console.log('window on load');
    code = new ha.kmob.Code();
    window.code = code;
    console.log(window["code"]);
    code.init();
};
