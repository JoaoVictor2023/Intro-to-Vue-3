app.component('product-display', {
    template:
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <div
                        v-for="(variant, index) in variants"
                        :key="variant.id"
                        @mouseover="updateVariant(index)"
                        class="color-circle"
                        :style="{ backgroundColor: variant.color }">
                    </div>
                    <button
                        class="button"
                        :class="{ disabledButton: !inStock }"
                        :disabled="!inStock"
                        v-on:click="addToCart">
                            Add to Cart
                    </button>
                </div>
            </div>
        </div>`,
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
        removeCart() {
            this.cart -= 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
})