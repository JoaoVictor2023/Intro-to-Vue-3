// une chaussette qui est un produit
const product = 'Socks'

// déclaration de description
const description = 'les chaussettes sont belles!'

// création d'application Vue
const app = Vue.createApp({
    data() {
        return{
            product: product,
            description: description
        }
    }
});