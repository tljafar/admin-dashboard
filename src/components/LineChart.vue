<template>
    <simplebar class="card card-body">
        <h5 class="card-heading">Overview</h5>
        <div class="chart-line-wrapper">
            <div id="legend-container"></div>
            <LineChartGenerator
                id="my-chart-id"
                :chart-options="chartOptions"
                :plugins="plugins"
                :chart-data="chartData"
                style="height: 500px;" />
        </div>
    </simplebar>
</template>
  
<script>
import simplebar from 'simplebar-vue';
import { Line as LineChartGenerator } from 'vue-chartjs'
import {
    Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement, TimeScale
} from 'chart.js'
import 'chartjs-adapter-date-fns';
import { customTooltip, htmlLegendPlugin } from '../helper/chart'
import { randomScalingFactor, currencyFormat } from '../helper';


ChartJS.register(Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement,
    TimeScale)

const labels = ["2022-01-01", "2022-02-01", "2022-03-01", "2022-04-01", "2022-05-01", "2022-06-01", "2022-07-01", "2022-08-01", "2022-09-01", "2022-10-01", "2022-11-01", "2022-12-01"];

const datasetOption = function (label, color) {
    return {
        label: label,
        backgroundColor: color,
        borderColor: color,
        pointHoverBorderColor: color,
        pointBorderWidth: 3,
        pointRadius: -1,
        pointBorderColor: color,
        pointBackgroundColor: 'white',
        pointHoverBackgroundColor: 'white',
        pointHoverRadius: 5,
        pointHoverBorderWidth: 3,
        data: labels.map(() => randomScalingFactor(100).value)
    }
}

const datasets = [
    { label: 'Revenue', color: '#283977' },
    { label: 'Net Profit', color: '#55efc4' },
    { label: 'Marketing Costs', color: '#ff9e0e' },
    { label: 'COGS & POD Costs', color: '#0058ff' },
    { label: 'Other Costs', color: '#ff607b' },
].map((item) => datasetOption(item.label, item.color))

ChartJS.defaults.font.family = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
export default {
    name: 'LineChart',
    components: { LineChartGenerator, simplebar },
    data() {
        return {
            chartData: {
                labels: labels,
                datasets: datasets
            },
            chartOptions: {
                elements: {
                    line: {
                        tension: 0.4
                    }
                },
                pointDotRadius: 1,
                pointDotStrokeWidth: 8,
                pointHitDetectionRadius: 20,
                responsive: true,
                maintainAspectRatio: false,
                stacked: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                scales: {
                    y: {
                        ticks: {
                            padding: 20,
                            font: {
                                size: 14,
                                weight: 'bold',
                                family: "'Poppins', sans-serif"
                            },
                            color: '#7E84A3',
                            stepSize: 200,
                        },
                        beginAtZero: true,
                        grid: {
                            drawBorder: false,
                        },
                    },
                    x: {
                        ticks: {
                            color: '#7E84A3',
                        },
                        grid: {
                            display: false,
                        },
                        type: 'time',
                        time: {
                            unit: 'month',
                            displayFormats: {
                                month: 'MMM',
                                quarter: 'MMM YYYY',
                                millisecond: 'MMM YYYY',
                                second: 'MMM YYYY',
                                minute: 'MMM YYYY',
                                hour: 'MMM YYYY',
                                day: 'MMM YYYY',
                                week: 'MMM YYYY',
                                year: 'MMM YYYY',
                            }
                        }
                    }
                },
                plugins: {
                    htmlLegend: {
                        containerID: 'legend-container'
                    },
                    legend: {
                        display: false,
                        labels: {
                            usePointStyle: true,
                        }
                    },
                    tooltip: {
                        titleColor: 'black',
                        titleAlign: 'center',
                        titleMarginBottom: 12,
                        titleFont: {
                            weight: 'bold',
                            size: 18
                        },
                        bodyColor: 'black',
                        bodySpacing: 5,
                        bodyFont: {
                            size: 14
                        },
                        footerColor: 'black',
                        backgroundColor: 'white',
                        borderColor: 'black',
                        borderWidth: 1,
                        usePointStyle: true,
                        boxPadding: 10,
                        enabled: false,
                        external: customTooltip,
                        callbacks: {
                            label: function (context) {
                                let label = [context.dataset.label || ''];
                                if (context.parsed.y !== null) {
                                    label.push(currencyFormat(context.parsed.y, ''));
                                }
                                return label;
                            }
                        }
                    }
                }
            },
            plugins: [htmlLegendPlugin]
        }
    }
}


</script>