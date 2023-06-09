export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthsDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthsDate = obj ? obj.birthsDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthsDate: this.birthsDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        }
    }
}