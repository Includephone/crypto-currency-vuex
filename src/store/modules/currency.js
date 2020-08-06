import axios from 'axios';
import names from '../../data/currency-names';

const header={
    'authorization': 'Apikey {09fa59a7af761de6ac039f1ea6235b81d5b155f1fdbf045301e781de8f917f9b}'
}

export default {
    actions:{
        GET_CURRENCY_LIST({commit}){
            axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD',{
                headers:header
            })
            .then((res)=>{
                commit('updateCurrencyList', res.data.Data);
            })
            .catch((err)=>console.error(err));
        },
        GET_CURRENCY_INFO({commit}, name){
            axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${name}&tsyms=USD`,{
                headers:header
            })
            .then((res)=>{
                commit('updateCurrencyInfo', {
                    data: res.data,
                    name: name
                })
            }).catch((err)=>console.log(err));
        },
        GET_CURRENCY_CHART({commit}, name){
            axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${name}&tsym=USD&limit=50`,{
                headers: header
            })
            .then((res)=>{
                commit('updateCurrencyChart', {
                    data:res.data.Data.Data,
                    name
                })
            })
            .catch(err=>console.log(err))
        }
    },
    mutations:{
        updateCurrencyList(state, data){
            state.currencyList = data;
        },
        updateCurrencyInfo(state, {data, name}){
            const currencyName = names[name];
            data.DISPLAY[name].USD.nameCurrency=currencyName;
            state.currencyInfo=data;
        },
        updateCurrencyChart(state, {data, name}){
            state.currencyChart = {
                name,
                data
            };
        }
    },
    state:{
        currencyList: [],
        currencyInfo:[],
        currencyChart:[]
    },
    getters:{
        getCurrencyList(state){
            return state.currencyList;
        },
        getCurrencyInfo: (state)=>(name)=>{
            if(state.currencyInfo.DISPLAY){
                const keys = Object.keys(state.currencyInfo.DISPLAY)
                if(keys[0] == name){
                    return state.currencyInfo.DISPLAY[name].USD
                }
            }
            return false;
        },
        getCurrencyChart: (state)=>(name)=>{
            if(state.currencyChart.name == name){
                const labels=[];
                const data=[];
                state.currencyChart.data.map((point)=>{
                    const date = new Date();
                    date.setTime(point.time*1000);
                    data.push(point.close);
                    labels.push(date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear())
                });
                return {
                    labels,
                    data
                }
            }
            return false;
        }
    }
}