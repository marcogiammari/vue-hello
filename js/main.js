const { createApp } = Vue;

createApp({
    data() {
        return {
            heading: 'Hello World!',
            classiContainer: 'div-container',
            currentImg: 0,
            urls: ['https://picsum.photos/200?random=1', 'https://picsum.photos/200?random=2', 'https://picsum.photos/200?random=3', 'https://picsum.photos/200?random=4'],
            altTxt: "Immagine random presa da Picsum",
            bgColor: "",
            inputCaption: ""
        }
    },
    methods: {
        // metodo (con l'orribile style inline) per settare uno sfondo di colore casuale
        randomBackgroundColor() {
            x = Math.floor(Math.random() * 256);
            y = Math.floor(Math.random() * 256);
            z = Math.floor(Math.random() * 256);
            this.bgColor = `background-color: rgb(${x},${y},${z}`;
            console.log(this.bgColor);
        },
        // metodo per cambiare la caption dell'immagine
        changeCaption() {
            this.altTxt = this.inputCaption;
        },
        generateSrc() {
            return this.urls[this.currentImg]
        },
        changeImg() {
            this.currentImg == 3 ? this.currentImg = 0 : null;
            this.currentImg++
        }
    }
}).mount('#app')