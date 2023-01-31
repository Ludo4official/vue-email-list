const { createApp } = Vue;

createApp({

    data() {
        
        return {

            message: 'Lista Emails:',
            randomNames: []

        };

    },

    mounted() {

        for (let index = 0; index < 11; index++) {

            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {

                    console.log('Mail random:', resp.data.response);

                    this.randomName = resp.data.response;

                    this.randomNames.push(resp.data.response);

                });
            }
            
        }


}).mount('#app');