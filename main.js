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

const inventory = 6


// création d'application Vue
const app = Vue.createApp({
    data() {
        return {
            product: product,
            brand: 'Vue Mastery',
            description: description,
            url: etml,
            inventory: inventory,
            onSale: true,
            details: ['50% cooton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: greenSocks, quantity: 50 },
                { id: 2235, color: 'blue', image: blueSocks, quantity: 0 }
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            cart: cart,
            selectedVariant: 0,
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
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
});
