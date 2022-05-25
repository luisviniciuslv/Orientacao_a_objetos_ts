class User {
    id: number;
    name: string;
    login: string;
    password: string;
    birthday: string;
    isActive: boolean;
    accounts: Account[];

    constructor(id: number, name: string,
        login: string,
        password: string,
        birthday: string,
        isActive: boolean){
            this.id = id;
            this.name = name;
            this.login = login;
            this.password = password;
            this. birthday = birthday;
            this.isActive = isActive;
        }
};

class Account {
    id: number;
    accountNumber: string;
    dv: string;
    cards: Card[]

    constructor(id: number, accountNumber: string, dv: string, cards: Card[]){
        this.id = id;
        this.accountNumber = accountNumber;
        this.dv = dv;
        this.cards = cards;
    }
};

class Card {
    id: string;
    product: string;
    cardNumber: string;
    flag: string;

    constructor(id:string, product: string, cardNumber:string, flag:string){
        this.id = id;
        this.product = product;
        this.cardNumber = cardNumber;
        this.flag = flag;
    }
};

class Transaction{
    id: number;
    date: string;
    value: number;
    isCredit: boolean;
    account: Account;
    card: Card;

    constructor(id: number, date: string, value: number, isCredit: boolean, account: Account, card: Card){
            this.id = id;
            this.date = date;
            this.value = value;
            this.isCredit = isCredit;
            this.account = account;
            this.card = card;
    }
}

function performCredit(value:number, account:Account, card: Card): Transaction{

    if(account.cards.find((c) => c.id === card.id) === null){
        throw Error("card not found");
    }

    const id = Math.random()

    const transaction = new Transaction(id, "2022-24-05", 100.00, false, account, card)

    //persiste no banco de dados

    return transaction
}

const value = 1000;
const transactionCard = new Card("a1v23-23", "BLACK", "0000 0000 0000 0000", "MASTER")
const cards = [
    transactionCard,
    new Card("a1v23-23", "BLACK", "0000 0000 0000 0000", "MASTER"),
    new Card("a1v5-541-", "PREMIUM", "1111 1111 1111 1111", "VISA")
];

const account = new Account(1, "010101", "1", cards);

const transaction = performCredit(8000.00, account, transactionCard);

abstract class Payment {
    name: string;
    type: string;
    value: number;
    tax: number 
    public abstract calculate(): number
    constructor(name: string, type: string, value: number,tax: number ){
        this.name = name;
        this.type = type;
        this.value = value;
        this.tax = tax;
    }
}

class DebitPayment extends Payment {
    constructor(name: string, type: string, value:number, tax:number){
        super(name, type, value, tax);
}

    public calculate(): number {
        return this.tax * 1.5 * value;
    }
}

class XPTOPayment extends Payment {
    constructor(name: string, type: string, value:number, tax:number){
        super(name, type, value, tax);
}

    public calculate(): number {
        return this.tax * 8 * (value/1.2);
    }
}

class Person {
    private _id: number;
    private _name: string;
    constructor(id:number, name:string){
        this._id = id;
        this._name = name;
    }

    public get id(): number{
        return this._id;
    }
    public set id(value: number){

        if(value === 0){
            throw Error("ID não pode ser zero!")
        }
        if(this.id != 0){
            throw Error("ID já informado!")
        }
        this._id = value;
    }

    public get name(): string{
        return this._name;
    }
    public set name(value: string){
        this._name = value
    }
}

const person = new Person(100, "vini");
