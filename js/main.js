const { createApp } = Vue;

createApp({
    data() {
        return {
            heading: 'Hello World!',
            classiContainer: 'div-container',
            image: {
                source: 'https://picsum.photos/200',
                altTxt: "Immagine random presa da Picsum"
        }

        }
    }
}).mount('#app')