import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Ariba 2.5 EC', 'SL 12', 'BIONET', 'SODIUM CYANIDE', 'DDX', 'SL-20H', 'Gold 20sc', 'DDX', 'NSIC 2018', 'SL 12', 'LongPing 937', 'C 18'],
      datasets: [
        {
          label: 'GitHub Commits',
          FontColor: '#ffffff',
          borderColor: '#ffffff',
          backgroundColor: ['#f87979', 'rgba(26, 188, 156,1.0)', 
          'rgba(22, 160, 133,1.0)', 'rgba(46, 204, 113,1.0)', 'rgba(39, 174, 96,1.0)', 'rgba(52, 152, 219,1.0)',
            'rgba(41, 128, 185,1.0)', 'rgba(155, 89, 182,1.0)', 'rgba(142, 68, 173,1.0)',
            'rgba(241, 196, 15,1.0)', 'rgba(243, 156, 18,1.0)'],
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    })
  }
}