export interface NavLinkInterface {
    navLocation:string;
    location:string;
    children:React.ReactNode;
}

export interface cardDataInterface {
    question:string;
    answers:string[];
    num:number;

}

export interface CardInterface {
    Author:string;
    date:string;
    description?:string;
    card:cardDataInterface[];
    name:string;
}