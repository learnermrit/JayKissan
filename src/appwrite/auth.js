import conf from '../conf/conf.js'
import {Client, Account,ID} from "appwrite";


export class AuthService{
    client = new Client(); // we want when object is created then only account should be created
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account= new Account(this.client);

    }

    //we will make a wrapper so we can prevent vendor locking
    async createAccount ({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //if account is created then make him login
                return this.login({email,password});
            }
            else{
                return userAccount; // if not creaed then we will handel it.
            }

        }catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try {
            //returning when login is done
           return  await this.account.createEmailSession(email,password);
        } catch (error) {
           throw error;
            
        }
    }

    async getCurrentUser(){
        //we can ask direct from the account about user
        try{
           return  await this.account.get();

        }catch(error){
            console.log("Appwrite Service :: getCurrentUser :: error",error);
        }

        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();

        }catch(error){
            console.log("Appwrite Service :: logout :: error",error);
        }
    }
}

const authService= new AuthService(); // constructor will be called

export default authService;

/*
As we want to keep safe from vendor locking(means if we want to take out backend from appwrite and use firebase then 
we just need to change inner code)
1)here we are making a class and then making a object from it and then exporting it so we can use methods by it as by object only we 
can access the methods
 for eg:- export class AuthService{}
          const authService= new AuthService();
          export default authService;
2) we need to create Client then and then account as all methods in appwrite is on account
*/