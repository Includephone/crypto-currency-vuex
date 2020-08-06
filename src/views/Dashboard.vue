<template>
    <CurrencyList v-if="getCurrencyList.length>1" v-bind:currencies="getCurrencyList"/>
    <Loading v-else/>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import CurrencyList from '../components/CurrencyList.vue';
import Loading from '../components/Loading.vue';
export default {
    name: 'Dashboard',
    components: {
        CurrencyList,
        Loading
    },
    methods: {
        ...mapActions(['GET_CURRENCY_LIST'])
    },
    mounted(){
        this.GET_CURRENCY_LIST();
    },
    computed:{
        ...mapGetters(['getCurrencyList'])
    }
}
</script>