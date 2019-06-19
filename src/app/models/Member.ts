export class Member {
    private firstName;
    private lastName;
    private age;
    private gender;
    private street;
    private city;
    private state;
    private phone;
    private cell;
    private email;
    private registrationDate;
    private membershipAge;
    private profileImg;
    private eligibility;

    constructor(public data: any){
        this.firstName = data.name.first.toUpperCase();
        this.lastName = data.name.last.toUpperCase();
        this.email = data.email;
        this.profileImg = data.picture.large;
        this.registrationDate = String(new Date(data.registered.date).getFullYear());
        this.membershipAge = data.registered.age
        this.age = data.dob.age;
        this.gender = data.gender
        this.street = data.location.street;
        this.city = data.location.city;
        this.state = data.location.state;

        this.phone = data.phone;
        this.cell = data.cell;

        if (this.membershipAge >= 10) {
            this.eligibility = "Eligible"
        } else {
            this.eligibility = "Ineligible"
        }
    }
}