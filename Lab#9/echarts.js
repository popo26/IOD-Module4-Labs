// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById("main"));

axios.get("https://fakestoreapi.com/products").then((response) => {
  console.log(response.data);
  let nbProductsPerCategory = new Map();

  response.data.forEach((product) => {
    if (!nbProductsPerCategory.has(product.category)) {
      nbProductsPerCategory.set(product.category, 1);
    } else {
      nbProductsPerCategory.set(
        product.category,
        nbProductsPerCategory.get(product.category) + 1
      );
    }
  });
  console.log(Array.from(nbProductsPerCategory.keys()));

  // Specify the configuration items and data for the chart
  let option = {
    title: {
      text: "ECharts Getting Started Example",
    },
    legend: {
      data: ["Categories"],
    },
    xAxis: {
      data: Array.from(nbProductsPerCategory.keys()),
    },
    yAxis: {},
    series: [
      {
        name: "Categories",
        type: "bar",
        data: Array.from(nbProductsPerCategory.values()),
      },
    ],
  };

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
});
