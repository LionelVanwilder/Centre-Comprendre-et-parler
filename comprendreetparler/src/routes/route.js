

import axios from 'axios';

export default {
    data() {
        return {
            actualites: []
        };
    },
    mounted() {
        this.fetchActualites();
    },
    methods: {
        async fetchActualites() {
            try {
                const response = await axios.get('/actualites');
                this.actualites = response.data;
            } catch (error) {
                console.error('Error fetching actualites:', error);
            }
        }
    }
};

