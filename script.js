// Chart.js Example for Invoices and Sales Forecast
const ctxInvoices = document.getElementById("invoicesChart").getContext("2d");
const invoicesChart = new Chart(ctxInvoices, {
  type: "line",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "This Week",
        data: [20000, 30000, 50000, 60000, 40000, 75000, 70000],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Last Week",
        data: [15000, 25000, 40000, 50000, 35000, 50000, 60000],
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const ctxSales = document.getElementById("salesForecastChart").getContext("2d");
const salesForecastChart = new Chart(ctxSales, {
  type: "bar",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Weighted",
        data: [30000, 40000, 60000, 70000, 50000, 90000, 80000],
        backgroundColor: "orange",
      },
      {
        label: "Won",
        data: [20000, 30000, 50000, 60000, 40000, 70000, 60000],
        backgroundColor: "purple",
      },
    ],
  },
  options: {
    responsive: true,
  },
});
