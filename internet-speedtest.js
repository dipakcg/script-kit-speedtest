// Menu: Speed Test
// Description: Internet Upload/Download Speed Test
// Author: Dipak C. Gajjar
// Twitter: @dipakcgajjar

console.log(`dipakcgajjar made a internet-speedtest script!`)

show(`Please wait...`)

let speedtest = await npm(`@dominickolbe/speedtest-cli`)

const result = await exec(`speedtest-cli | grep \"Download\\|\\Upload\"`)

console.log(
  `> Speedtest result: "${result}"`,
)

show(`${result}`)
