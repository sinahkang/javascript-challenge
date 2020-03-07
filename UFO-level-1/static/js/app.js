
const tableBody = d3.select("tbody")
const button = d3.select("button")
const input = d3.select("input")


const handler = function(){

  let filterCond = input.property("value")

  tableBody.html("")

  data.filter(dataRow => dataRow.datetime === filterCond).forEach(dataRow => {
    let tableRow = tableBody.append("tr")
    tableRow.append("td").text(dataRow.datetime)
    tableRow.append("td").text(dataRow.city)
    tableRow.append("td").text(dataRow.state)
    tableRow.append("td").text(dataRow.country)
    tableRow.append("td").text(dataRow.shape)
    tableRow.append("td").text(dataRow.durationMinutes)
    tableRow.append("td").text(dataRow.comments)
})}


input.on("change", handler)
button.on("click", handler)