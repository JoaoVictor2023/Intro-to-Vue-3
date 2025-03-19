// une chaussette qui est un produit
const product = 'Socks'

// déclaration de description
const description = 'les chaussettes sont belles!'

// déclaration du chemin absolu de l'image chaussette bleue
const blueSocks = './assets/images/socks_blue.jpg'

// déclaration du chemin absolu de l'image chaussette verte
const greenSocks = './assets/images/socks_green.jpg'

// déclaration du chemin absolu de l'image chaussette verte
const etml = 'https://www.etml.ch/'

// déclaration du panier de base
const cart = 0

var inventory = 6

const inStock = inventory > 0

// création d'application Vue
const app = Vue.createApp({
    data() {
        return {
            product: product,
            brand: 'Vue Mastery',
            description: description,
            imageB: blueSocks,
            url: etml,
            inventory: inventory,
            inStock: inStock,
            onSale: true,
            details: ['50% cooton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: greenSocks },
                { id: 2235, color: 'blue', image: blueSocks }
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            cart: cart,
            
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.imageB = variantImage
        },
        removeCart(){
            this.cart -= 1
        },
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        }
    }
});
