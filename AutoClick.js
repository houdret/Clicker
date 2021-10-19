class AutoClick {
    constructor(count){
        this.autoClick = document.getElementById("autoClick");
        this.count = count;
    }
    stateHandleAuto() {
        if (this.count !== 100) {
            this.autoClick.disabled = true;
        } else {
            this.autoClick.disabled = false;
        }
    }
}