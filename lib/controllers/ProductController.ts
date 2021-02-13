import * as mongoose from 'mongoose';
import { ProductSchema } from '../models/ProductModel';
import { Request, Response } from 'express';

const Product = mongoose.model('Product', ProductSchema);

export class ProductController{


  

    public addNewProduct (req: Request, res: Response) {                
        let newProduct = new Product(req.body);
    
        newProduct.save((err, result) => {
            if(err){
                res.status(400).send(err);
            }    
            res.status(200).send(result);
        });
    }

    public updateProduct (req: Request, res: Response) {     
        var  responseObject = {
            error: "Provide IteamID not exist", //TODO: get the message from constants messages json.
        }      
        Product.findOneAndUpdate({ _id: req.params.Productid }, req.body, { new: true }, (err, result) => {
            if(err){
                console.log("err",err)
                res.send(err);
            }
            console.log("contact",result)

            if(result == null)
            {
               
                res.status(400).send(responseObject);
            }
            else
            {
                res.status(200).send(result);
            }
            
        });
    }

    public deleteProduct (req: Request, res: Response) { 
        var  responseObject = {
            error: "Provide IteamID not exist", //TODO: get the message from constants messages json.
        }
        console.log("Id",req.params.Productid );         
        Product.remove({ _id: req.params.Productid }, (err, result) => {
            if(err){
                res.send(err);
            }
           //
           console.log("contact",result)
           if(result == null)
           {
            var  responseObject = {
                error: "Provide IteamID not exist", //TODO: get the message from constants messages json.
            }
               res.status(400).send("Provide IteamID not exist");
           }
           else
           {
               res.status(200).send("Provide IteamID not exist");
           }
        });
    }
    
}