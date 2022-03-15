namespace ha.kmob {
    export class Code {
        readonly kons: ha.kmob.Kons = new ha.kmob.Kons();

        pindah(url: string): void {
            window.top.location.href = this.kons.SERVER + url;
        }

        init(): void {
            console.log('code init');
            this.fungsiIframe.src = this.fungsiIframe.getAttribute("data-src") + "?r=" + Math.floor(Math.random() * 100);
            this.pilihBarisIframe.src = this.pilihBarisIframe.getAttribute("data-src") + "?r=" + Math.floor(Math.random() * 100);

            window.top.location.href = "#fungsi";
            // window.scrollTo(0, 0);
        }

        get fungsiIframe(): HTMLIFrameElement {
            return ha.comp.Util.getEl("iframe#fungsi") as HTMLIFrameElement;
        }

        get pilihBarisIframe(): HTMLIFrameElement {
            return ha.comp.Util.getEl("iframe#pilih-baris") as HTMLIFrameElement;
        }
    }
}

var code: ha.kmob.Code;
window.onload = () => {
    console.log('window on load');
    code = new ha.kmob.Code();
    (window as any).code = code;
    console.log(window["code"]);
    code.init();
}