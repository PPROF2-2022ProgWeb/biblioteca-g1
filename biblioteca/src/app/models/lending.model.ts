import { BookModel } from "./book.model";
import { UserModel } from "./user.model";

export class LendingModel {


    constructor(
        ){}
        
        public id:number;
        public date_out:string;
        public date_return:string;
        public book:BookModel;
        public user:UserModel;
}
