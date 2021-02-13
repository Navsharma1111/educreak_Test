import {Request, Response, NextFunction} from "express";
import { ProductController } from "../controllers/ProductController";

export class Routes { 
    
    public contactController: ProductController = new ProductController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // Contact 
        app.route('/Product')
        

        // POST endpoint
        .post(this.contactController.addNewProduct);

        // Contact detail
        app.route('/Product/:ProductId')
        // get specific contact
        .put(this.contactController.updateProduct)
        .delete(this.contactController.deleteProduct)

    }
}