const kifle = "Kifle Wodajo";
const diallo = 'Diallo Telli';
const nzo = `Nzo Ekangaki`;
const william = "William Eteki";
const edem = "  Edem Kodjo  ";
const peter = "Peter Onu";
const ide = "Ide Oumarou";
const salim = "Salim Ahmed Salim";
const amara = "Amara Essy";

const year = "1989-2001";

console.log(kifle[0])

console.log(diallo.length - 1)

console.log(nzo.slice(4))
console.log(nzo.indexOf(" "))
console.log(nzo.slice(4, 12))

console.log((william.slice(0, 7).toLowerCase()) + william.slice(7, 13).toUpperCase())

console.log(edem.trim(""))
console.log(edem.trimStart(""))
console.log(edem.trimEnd(""))

console.log(peter.slice(0, 5).repeat(3))

console.log(ide.replace("m", "mm").slice(4))

console.log(`"The 8th secretary-general of the OAU: ${salim}, who held this position from ${year}."`)

console.log(amara[0])
console.log(amara.slice(amara.lastIndexOf(" ") +1))
console.log(amara[0] + ". " + amara.slice(amara.lastIndexOf(" ") +1))