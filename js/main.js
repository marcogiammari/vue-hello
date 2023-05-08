const { createApp } = Vue;

createApp({
    data() {
        return {
            heading: 'Hello World!',
            source: 'https://picsum.photos/200'
        }
    }
}).mount('#app')