"use strict";
var ha;
(function (ha) {
    var kmob;
    (function (kmob) {
        class Fungsi {
            code;
            constructor() {
            }
            init() {
                console.log('fungsi init');
                this.code = window.parent.window.code;
                console.log(this.code);
                console.log(window.parent.window);
                this.tbl.onclick = (e) => {
                    e.stopPropagation();
                    console.log('pilih baris');
                    // window.top.location.href = this.code.kons.HAL_PILIH_BARIS;
                    this.code.pindah(this.code.kons.HAL_PILIH_BARIS);
                };
                console.log(this.tbl);
                console.log(this.tbl.onclick);
                // throw new Error("");
            }
            load() {
            }
            get tbl() {
                return ha.comp.Util.getById("tambah-baris");
            }
        }
        kmob.Fungsi = Fungsi;
    })(kmob = ha.kmob || (ha.kmob = {}));
})(ha || (ha = {}));
window.onload = () => {
    let fungsi = new ha.kmob.Fungsi();
    fungsi.init();
};
