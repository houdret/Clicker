class Bonus {
    constructor(count, cpt) {
        this.bonus = document.getElementById("bonus");
        this.bonus.disabled = true;
        this.count = count;
        this.cpt = cpt;
    }
    stateHandle() {
        this.bonus.disabled = false;
    }
    funcBonus(cpt) {

        switch (cpt) {
            case 1:
                this.stateHandle();
                this.count -= 10;
                this.count *= 2;
                this.Bonus.disabled = true;
                break;
            case 2:
                this.stateHandle();
                this.count -= 100;
                this.count *= 4;
                this.bonus.disabled = true;
                break;
            case 3:

                this.stateHandle();
                this.count -= 100;
                this.count *= 6;
                this.bonus.disabled = true;
                break;
            default:
                break;
        }

        return this.count;
    }
}