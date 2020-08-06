<script>
import {Line} from 'vue-chartjs';

const options = {
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    lineTension: 1
  };

export default {
    extends: Line,
    name:'CurrencyChart',
    props: ['chartInfo'],
    mounted(){
        this.renderChart({
                labels: this.chartInfo.labels,
                datasets: [
                {
                    backgroundColor: 'rgba(230,239,245,1)',
                    borderColor: 'rgba(24,102,156,1)',
                    data: this.chartInfo.data
                }
                ]
            }, 
            options);
    }    
}
</script>