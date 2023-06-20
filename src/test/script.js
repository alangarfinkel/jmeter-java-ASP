
const axios = require('axios');
//const suppliers =require('./suppliers.json');

class Data {
idsProducts = [];
idsProviders = [];
Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyYW5yb3NzaTAyQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY0NTAyM2RjNjI3YTc1Y2MzYzEyMWQ2ZiIsInJvbGUiOiJhZG1pbiIsImNvbXBhbnkiOiI2NDUwMjNkYzYyN2E3NWNjM2MxMjFkNmQiLCJpYXQiOjE2ODI5NzM2NzcsImV4cCI6MTY4Mjk4NDQ3N30.89cRLWZKQ837-vXQWDTIBZlDPSdHyINiCw8LIsDY0H8'
companyIds = ["6490e5bd4904ab2dc977a7cf", "6490e5cb4904ab2dc977a7d2", "6490e5d74904ab2dc977a7d5", "6490e5e34904ab2dc977a7d8"]


async run(){
    for (var i = 0; i < 4; i++) {
        await this.createProducts(this.companyIds[i]);
        await this.createProviders(this.companyIds[i]);
        await this.createSales(this.companyIds[i], this.idsProducts[i]);
        await this.createPurchases(this.companyIds[i], this.idsProducts[i], this.idsProviders[i]);
    }
}

  async createProducts(companyId) {
    let productAdded = true; 
    for (var i = 1; i < 7; i++){
        try{
            const product = {
                name: 'producto' + i,
                description: 'descripcion' + i,
                price: 100,
                stock: 200,
            }
            let response =  await axios.post('http://localhost:3010/products', product, {headers: 
            {'Authorization': `Bearer ${this.Token}`,
            'company-id': companyId},
        }).catch((err) => { throw new Error(err)});
            if (productAdded) {
                this.idsProducts.push(response.data.id); 
                productAdded = false;     
            }
        }catch(err){
            console.log(err);
            continue;
        }
    }

  };

  async createProviders(companyId) {
    let providerAdded = true; 
    for (var i = 1; i < 6; i++){
        try{
            const provider = {
                "name": "Provider " + i,
                "address": "Address provider " + i,
                "email": "provider" + i + "@gmail.com",
                "telephoneNumber": 1111111 + i
            }
            let response =  await axios.post('http://localhost:3010/providers', provider, {headers: 
            {'Authorization': `Bearer ${this.Token}`,
            'company-id': companyId}})
            .catch((err) => { throw new Error(err)});
            if (providerAdded) {
                this.idsProviders.push(response.data.id);
                providerAdded = false;
            }
            
        }catch(err){
            console.log(err);
            continue;
        }
    }
  };

  async createSales(companyId, productId) {
    for (var i = 0; i < 100; i++){
        try{
            const thisSale = {
                date: this.generateRandomDate(),
                client: "Cliente " + i %15,
                saleProducts: [
                  {
                    productId: productId,
                    quantity: 1
                  }
                ],
                totalAmount: 100
              }
             await axios.post('http://localhost:3010/sales', thisSale, 
            {
                headers: 
                {
                    'Authorization': `Bearer ${this.Token}`,
                    'company-id': companyId
                },
            }).catch((err) => { console.log(err)});
        }catch(err){
            console.log(err, "AAAAAAA",responde.data);
            continue;
        }
    }
  }

  async createPurchases(companyId, productId, providerId){
    
        for (var i = 0; i < 40; i++){
            try{
                const purchase = {
                    date: this.generateRandomDate(),
                    providerId: providerId,
                    purchaseProducts: [
                        {
                            productId: productId,
                            quantity: 2
                        }
                    ],
                    totalAmount: 200
                  }

                await axios.post('http://localhost:3010/purchase', purchase, {
                    headers: 
                    {
                        'Authorization': `Bearer ${this.Token}`,
                        'company-id': companyId
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
      
        return `${year}-${month}-${day}`;
      }
}

(async () => {
  const data = new Data();
  await data.run();
})();