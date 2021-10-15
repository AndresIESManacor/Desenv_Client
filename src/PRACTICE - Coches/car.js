class Car {
    constructor(enrollment, model, price, color) {
        this.enrollment = enrollment;
        this.model = model;
        this.price = price;
        this.color = color;
        this.type = "€";
    }

    info() {
        return this.enrollment+", "+this.model+", "+this.price+this.type+", "+this.color;
    }

    convertToDollars(){
        if (this.type==="€") {
            this.price *= 1.16;
            this.type = "$";
        }
    }
    convertToEuros(){
        if (this.type==="$") {
            this.price /= 1.16;
            this.type = "€";
        }
    }
}