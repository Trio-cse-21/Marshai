var xValues = ["Machine learning","Compiler design","Web technologies","Computer networks","Fundamentals of software engineering","Soft skills & personality development","Mentoring session", "Compiler design lab","Web technologies lab","Computer networks lab"];
var yValues = [95, 98, 96, 82, 73, 82, 90, 72, 94, 86, 0];
var barColors = ["red", "green","blue","rgb(172, 12, 246)","rgb(8, 185, 234)","greenyellow", "hotpink","orange","blueviolet","aqua"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Sem VI Attendance Percentage",
    }
  }
});