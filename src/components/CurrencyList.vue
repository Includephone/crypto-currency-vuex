<template>
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Change</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(currency, index) in currencies" :key="currency.CoinInfo.Id">
                <th scope="row">{{index+1}}</th>
                <td class="w-50">
                    <div class="d-flex">
                        <router-link class="d-flex" :to="'currency/'+currency.CoinInfo.Name">
                        <img class="mr-3 mb-1" :src="'https://www.cryptocompare.com/'+currency.CoinInfo.ImageUrl" width="32px" height="32px"/>
                        <h3>{{currency.CoinInfo.FullName}}</h3>
                        </router-link>
                    </div>
                </td>
                <td>{{currency.DISPLAY.USD.PRICE}}</td>
                <td>{{currency.DISPLAY.USD.MKTCAP}}</td>
                <td :class="{
                    'text-danger': currency.DISPLAY.USD.CHANGEPCT24HOUR<0,
                    'text-success': currency.DISPLAY.USD.CHANGEPCT24HOUR>0
                }">{{currency.DISPLAY.USD.CHANGEPCT24HOUR}}%</td>
            </tr>
        </tbody>
        </table>
</template>

<script>

export default {
    name:'CurrencyList',
    props: ['currencies']
}
</script>