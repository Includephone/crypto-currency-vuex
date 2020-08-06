<template>
    <div class="row h-100 mt-3">
        <div class="col-3">
            <div class="d-flex align-self-center">
                <img class="mr-1" :src="'https://www.cryptocompare.com/'+ this.currency.IMAGEURL" width="32px" height="32px"/>
                <h3>{{this.currency.nameCurrency}}</h3>
                <p>({{this.currencySymbol}})</p>
            </div>
        </div>
        <div class="col-9">
            <div class="d-flex">
                <h3>{{this.currency.PRICE}}</h3>
                <p :class="{
                    'text-danger': this.currency.CHANGEPCT24HOUR<0,
                    'text-success': this.currency.CHANGEPCT24HOUR>0
                }">({{this.currency.CHANGEPCT24HOUR}}%)</p>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Market Cap</th>
                        <th>24h Low/High</th>
                        <th>24h Volume</th>
                        <th>Current Supply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{this.currency.MKTCAP}}</td>
                        <td class="d-flex"><p class="text-danger">{{this.currency.LOWDAY}}</p> -&nbsp; <p class="text-success">{{this.currency.HIGHDAY}}</p></td>
                        <td>{{this.currency.VOLUME24HOUR}} ({{this.currency.VOLUME24HOURTO}})</td>
                        <td>{{this.currency.SUPPLY}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import names from '../data/currency-names';
export default {
    data(){
        return names
    },
    name: 'CurrencyItem',
    props: ['currency', 'currencySymbol']
}
</script>