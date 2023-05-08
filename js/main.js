const { createApp } = Vue;

createApp({
    data() {
        return {
            heading: 'Hello World!',
            classiContainer: 'div-container',
            image: {
                source: 'https://picsum.photos/200',
                altTxt: "Immagine random presa da Picsum"
            },
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
            this.image.altTxt = this.inputCaption;
        }
    }
}).mount('#app')