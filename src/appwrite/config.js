import conf from "../conf/conf.js"
import {ID,Client,Databases,Storage,Query} from "appwrite"

export class Service {

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases= new Databases(this.client);
        this.bucket= new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
                
                );

        }catch(error){
            console.log("Appwrite Service :: createPost :: error",error);
        }
    }

    async updatePost (slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );

        }catch(error){
            console.log("Appwrite Service :: updatePost :: error",error);
        }

    }

    async deletePost(slug){
        try{
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
                
            );
            return true;

            
        }catch(error){
            console.log("Appwrite Service :: deletePost :: error",error);
            return false;
        }

    }

    async getPost(slug){
        try{

            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );

        }catch(error){
            console.log("Appwrite Service :: getPost :: error",error);
            return false;
        }

    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // async getPosts(queries = [Query.equal("status","active")]){
    //     //here we are created a variable queries and by default we are seting it
    //     // and we want all posts which are in active status
    //     // we have to create indexes on which we want to do querry in appwrite

    //     try{
    //         await this.databases.listDocuments(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             queries,
    //         );

    //     }catch(error){
    //         console.log("Appwrite Service :: getPosts :: error",error);
    //         return false;
    //     }

    // }

    // file upload Services

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );

        }catch(error){
            console.log("Appwrite Service :: uploadFile :: error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            ); 
            return true;
        }catch(error){
            console.log("Appwrite Service :: uploadFile :: error",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }




}


const service = new Service();

export default service;