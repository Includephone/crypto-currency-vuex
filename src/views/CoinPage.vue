<template>
    <div v-if="this.getCurrencyByName">
        <CurrencyItem
            v-bind:currency="getCurrencyByName"
            v-bind:currencySymbol="this.$route.params.name"
        />
        <CurrencyChart v-if="this.getCurrencyChartByName"
            :styles="myStyles"
            v-bind:chartInfo="this.getCurrencyChartByName"    
        />
    </div>
    <Loading v-else/>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import CurrencyItem from '../components/CurrencyItem.vue';
import CurrencyChart from '../components/CurrencyChart.vue';
import Loading from '../components/Loading.vue';
export default {
    name: 'CoinPage',
    components:{
        CurrencyItem,
        CurrencyChart,
        Loading
    },
    methods:{
        ...mapActions(['GET_CURRENCY_INFO', 'GET_CURRENCY_CHART'])
    },
    mounted(){
        this.GET_CURRENCY_INFO(this.$route.params.name);
        this.GET_CURRENCY_CHART(this.$route.params.name);
    },
    computed:{
        ...mapGetters(['getCurrencyInfo', 'getCurrencyChart']),
        getCurrencyByName(){
            return this.getCurrencyInfo(this.$route.params.name)
        },
        getCurrencyChartByName(){
            return this.getCurrencyChart(this.$route.params.name)
        },
        myStyles(){
            return{
                height: '500px',
                position: 'relative'
            }
        }
    }
}
</script>

<style scoped>
    .chart{
        height:40vh
    }
</style>