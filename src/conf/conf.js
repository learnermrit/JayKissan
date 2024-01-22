const conf ={
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default conf

/*
As whenever we need to take data from .env we have to write
console.log(import.meta.env.VITE_APPWRITE_URL); 
so we are using this file to make it production grade 
1)in some cases it may haapen .env file is not loaded then full application crases then it difficult to find problem
2) may id's can be treated as number but all variable should be in string
    for eg:- VITE_APPWRITE_PROJECT_ID="65ae9fe67f2d99c3f035"  
*/

// console.log(process.env.REACT_APP_APPWRITE_URL); usually .env variables is accessed by this
  //vite me in front we have to use VITE in Prefix in .env 