import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { AnyTxtRecord } from 'dns';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

@ViewChild('barCanvas') barCanvas;
@ViewChild('lineCanbas') lineCanvas;
@ViewChild('pieCanvas')pieCanvas;
@ViewChild ('doughutCanvas')doughnutCanvas; 

barChart: any;
lineChart: any;
pieChart: any;
doughnutChart: any;
constructor(
 
) { }

  ngOnInit() {
  
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.barChart = this.getBarChart();
   
    }, 150)
    setTimeout(() => {
      this.pieChart = this.getPieChart();
     
    }, 250)
  }

  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      data,
      options,
      type: chartType
    })
  }

  getBarChart(){
    const data = {
      labels: ['Vermelho', 'Azul', 'Amarelo', 'Verde', 'Roxo'],
      datasets: [{
        label: 'número de votos',
        data: [12, 23, 15, 90, 5],
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(20, 0, 255)',
          'rgb(255, 230, 0)',
          'rgb(0, 255, 10)',
          'rgb(60, 0, 70)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }

 
  getPieChart(){
    const data = {
      labels: ['Vermelho', 'Azul', 'Amarelo'],
      datasets: [{
        data: [300, 75, 224],
        backgroundColor: ['rgb(200, 6, 0)', 'rgb(36, 0, 255)', 'rgb(242, 255, 0)']
      }]
    }

    return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
  }
 
 
}
