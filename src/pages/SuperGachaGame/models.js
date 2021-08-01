export class GachaItem {
    constructor(name) {
        this.id = Math.random().toString().slice(2);
        this.name = name;
    }
}

export class GachaPrize {
    constructor(name, quantity = 1) {
        this.id = Math.random().toString().slice(2);
        this.name = name;
        this.quantity = quantity;
        this.percentage = null;
    }
}

export class GachaSystem {
    items = []
    prizes = []

    setPrizes(prizes) {
        this.prizes = prizes;
        this.generateGachaPercentages();
    }

    generateGachaPercentages() {
        if (this.prizes.length === 0) {
            return
        }
        const countItems = this.prizes.reduce((prev, current) => {
            return prev + current.quantity
        }, 0)

        this.prizes.forEach(p => {
            p.percentage = Number((p.quantity / countItems).toFixed(4))
        })
    }

    pullGacha() {
        const randomNumber = Math.random()
        let acumulador = 0;
        let prizeDrawn;

        for (let i = 0; i < this.prizes.length; i++) {
            const element = this.prizes[i];

            if (randomNumber >= acumulador && randomNumber < (acumulador + element.percentage)) {
                prizeDrawn = element
                break
            }

            acumulador += element.percentage
        }

        return prizeDrawn
    }
}