import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Ariba 2.5 EC', 'SL 12', 'BIONET', 'SODIUM CYANIDE', 'DDX', 'SL-20H', 'Gold 20sc', 'DDX', 'NSIC 2018', 'SL 12', 'LongPing 937', 'C 18'],
      datasets: [
        {
          label: 'Keywords',
          backgroundColor: 'rgba(243, 156, 18,0.9)',
          data: [20, 40, 32, 29, 40, 10, 69, 30, 10, 60, 22, 51]
        }
      ]
    })
  }
}