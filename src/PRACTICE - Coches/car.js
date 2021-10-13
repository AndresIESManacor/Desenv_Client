class Car {
    constructor(enrollment, model, color, price) {
        this.enrollment = enrollment;
        this.model = model;
        this.color = color;
        this.price = price;
        this.type = "€";
    }

    info() {
        return this.enrollment+", "+this.model+", "+this.color+", "+this.price+this.type;
    }
}