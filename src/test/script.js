
const axios = require('axios');
//const suppliers =require('./suppliers.json');

class Data {
idsProducts = [];
idsProviders = [];
Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyYW5yb3NzaTAyQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY0NTAyM2RjNjI3YTc1Y2MzYzEyMWQ2ZiIsInJvbGUiOiJhZG1pbiIsImNvbXBhbnkiOiI2NDUwMjNkYzYyN2E3NWNjM2MxMjFkNmQiLCJpYXQiOjE2ODI5NzM2NzcsImV4cCI6MTY4Mjk4NDQ3N30.89cRLWZKQ837-vXQWDTIBZlDPSdHyINiCw8LIsDY0H8'
companyId = "645023dc627a75cc3c121d6d"


async run(){
   
    await this.createProducts();
    await this.createProviders();
    await this.createSales();
    await this.createPurchases();

}

  async createProducts() {

    for (var i = 1; i < 7; i++){
        try{
            const product = {
                name: 'producto' + i,
                description: 'descripcion' + i,
                price: 100,
                stock: 200,
            }
            let response =  await axios.post('http://localhost:3000/products', product, {headers: 
            {'Authorization': `Bearer ${this.Token}`,
            'company-id': this.companyId},
        }).catch((err) => { throw new Error(err)});
            this.idsProducts.push(response.data.id);     
 
        }catch(err){
            console.log(err);
            continue;
        }
    }

  };

  async createProviders() {

    for (var i = 1; i < 6; i++){
        try{
            const provider = {
                "name": "Provider " + i,
                "address": "Address provider " + i,
                "email": "provider" + i + "@gmail.com",
                "telephoneNumber": 1111111 + i
            }
            let response =  await axios.post('http://localhost:3000/providers', provider, {headers: 
            {'Authorization': `Bearer ${this.Token}`,
            'company-id': this.companyId}})
            .catch((err) => { throw new Error(err)});

            this.idsProviders.push(response.data.id);
 
        }catch(err){
            console.log(err);
            continue;
        }
    }
  };

  async createSales() {
    for (var i = 0; i < 100; i++){
        try{
            const thisSale = {
                date: this.generateRandomDate(),
                client: "Cliente " + i %15,
                saleProducts: [
                  {
                    productId: this.idsProducts[this.generateRandomNumber(6)],
                    quantity: 2
                  },
                  {
                    productId: this.idsProducts[this.generateRandomNumber(6)],
                    quantity: 3
                  }
                ],
                totalAmount: 500
              }
             await axios.post('http://localhost:3000/sales', thisSale, 
            {
                headers: 
                {
                    'Authorization': `Bearer ${this.Token}`,
                    'company-id': this.companyId
                },
            }).catch((err) => { console.log(err)});
        }catch(err){
            console.log(err, "AAAAAAA",responde.data);
            continue;
        }
    }
  }

  async createPurchases(){
    
        for (var i = 0; i < 40; i++){
            try{
                const purchase = {
                    date: this.generateRandomDate(),
                    providerId: this.idsProviders[this.generateRandomNumber(5)],
                    purchaseProducts: [
                        {
                            productId: this.idsProducts[this.generateRandomNumber(6)],
                            quantity: 1
                        },
                        {
                            productId: this.idsProducts[this.generateRandomNumber(6)],
                            quantity: 2
                        }
                    ],
                    totalAmount: 300
                  }

                await axios.post('http://localhost:3000/purchase', purchase, {
                    headers: 
                    {
                        'Authorization': `Bearer ${this.Token}`,
                        'company-id': this.companyId
                    },
                }).catch((err) => { throw new Error(err)});
            } catch(err){
                console.log(err);
                continue;
            }
            
        }
  }

    generateRandomNumber(num) {
    return Math.floor(Math.random() * num); // Genera un número aleatorio entre 0 y num
    }

    generateRandomDate() {
        const startDate = new Date('2023-01-01');
        const endDate = new Date('2023-04-01');
        const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
        const randomDate = new Date(randomTime);
        const day = String(randomDate.getDate()).padStart(2, '0');
        const month = String(randomDate.getMonth() + 1).padStart(2, '0');
        const year = randomDate.getFullYear();
      
        return `${month}/${day}/${year}`;
      }
}

(async () => {
  const data = new Data();
  await data.run();
})();