export class UserModel {
    constructor(public id:number,
        public name:string,
        public last_name_p:string,
        public last_name_m:string,
        public domicilio:string,
        public tel:string,
        public sanctions:number,
        public sanc_money:number){}
}
