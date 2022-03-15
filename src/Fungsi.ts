namespace ha.kmob {
    export class Fungsi {
        private code: ha.kmob.Code;

        constructor() {
        }

        init(): void {
            console.log('fungsi init');

            this.code = (window.parent.window as any).code;
            console.log(this.code);
            console.log(window.parent.window);

            this.tbl.onclick = (e: MouseEvent) => {
                e.stopPropagation();
                console.log('pilih baris');
                // window.top.location.href = this.code.kons.HAL_PILIH_BARIS;
                this.code.pindah(this.code.kons.HAL_PILIH_BARIS);
            }

            console.log(this.tbl);
            console.log(this.tbl.onclick);

            // throw new Error("");
        }

        load(): void {

        }

        get tbl(): HTMLButtonElement {
            return ha.comp.Util.getById("tambah-baris") as HTMLButtonElement;
        }
    }

}

window.onload = () => {
    let fungsi: ha.kmob.Fungsi = new ha.kmob.Fungsi();
    fungsi.init();
}