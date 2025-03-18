// une chaussette qui est un produit
const product = 'Socks'

// déclaration de description
const description = 'les chaussettes sont belles!'

// déclaration du chemin absolu de l'image chaussette bleue
const imageB = './assets/images/socks_blue.jpg'

// déclaration du chemin absolu de l'image chaussette verte
const imageG = './assets/images/socks_green.jpg'

// déclaration du chemin absolu de l'image chaussette verte
const etml = 'https://www.etml.ch/'

// création d'application Vue
const app = Vue.createApp({
    data() {
        return{
            product: product,
            description: description,
            imageB: imageB,
            imageG: imageG,
            url: etml,
            inventory: 6,
            onSale: true,
            details: ['50% cooton', '30% wool', '20% polyester'],
            
        }
    }
});