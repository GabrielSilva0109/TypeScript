import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from "./class/PeopleAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Gabriel", 10)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20)
companyAccount.deposit()

peopleAccount.setName("Gabriel Silva")
console.log(peopleAccount.getName())
