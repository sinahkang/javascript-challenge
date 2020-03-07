const button = d3.select("button")
const input = d3.select("input")
const dropdown = d3.select("select")
const tableBody = d3.select("tbody")

const handler = function() {
  let col = dropdown.property("value")
  let filterCond = input.property("value")

  tableBody.html("")

  if (col === "datetime") {
    data.filter(dataRow => dataRow.datetime === filterCond).forEach(dataRow => {
      let tableRow = tableBody.append("tr")
      tableRow.append("td").text(dataRow.datetime)
      tableRow.append("td").text(dataRow.city)
      tableRow.append("td").text(dataRow.state)
      tableRow.append("td").text(dataRow.country)
      tableRow.append("td").text(dataRow.shape)
      tableRow.append("td").text(dataRow.durationMinutes)
      tableRow.append("td").text(dataRow.comments)
    })} else if (col === "city") {
      data.filter(dataRow => dataRow.city === filterCond).forEach(dataRow => {
        let tableRow = tableBody.append("tr")
        tableRow.append("td").text(dataRow.datetime)
        tableRow.append("td").text(dataRow.city)
        tableRow.append("td").text(dataRow.state)
        tableRow.append("td").text(dataRow.country)
        tableRow.append("td").text(dataRow.shape)
        tableRow.append("td").text(dataRow.durationMinutes)
        tableRow.append("td").text(dataRow.comments)
      })} else if (col === "state") {
      data.filter(dataRow => dataRow.state === filterCond).forEach(dataRow => {
        let tableRow = tableBody.append("tr")
        tableRow.append("td").text(dataRow.datetime)
        tableRow.append("td").text(dataRow.city)
        tableRow.append("td").text(dataRow.state)
        tableRow.append("td").text(dataRow.country)
        tableRow.append("td").text(dataRow.shape)
        tableRow.append("td").text(dataRow.durationMinutes)
        tableRow.append("td").text(dataRow.comments)
      })} else if (col === "country") {
      data.filter(dataRow => dataRow.country === filterCond).forEach(dataRow => {
        let tableRow = tableBody.append("tr")
        tableRow.append("td").text(dataRow.datetime)
        tableRow.append("td").text(dataRow.city)
        tableRow.append("td").text(dataRow.state)
        tableRow.append("td").text(dataRow.country)
        tableRow.append("td").text(dataRow.shape)
        tableRow.append("td").text(dataRow.durationMinutes)
        tableRow.append("td").text(dataRow.comments)
      })} else if (col === "shape") {
      data.filter(dataRow => dataRow.shape === filterCond).forEach(dataRow => {
        let tableRow = tableBody.append("tr")
        tableRow.append("td").text(dataRow.datetime)
        tableRow.append("td").text(dataRow.city)
        tableRow.append("td").text(dataRow.state)
        tableRow.append("td").text(dataRow.country)
        tableRow.append("td").text(dataRow.shape)
        tableRow.append("td").text(dataRow.durationMinutes)
        tableRow.append("td").text(dataRow.comments)
      })} 
}

input.on("change", handler)
button.on("click", handler)