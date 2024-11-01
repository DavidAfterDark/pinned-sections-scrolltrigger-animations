export default function toPascalCase(text: string) {
    const splitText = text.split('-') // Divide el texto en palabras usando el guion como delimitador
    //console.log('splitText: ', splitText)

    const capitalizeText = splitText.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Mayúscula + resto en minúsculas
    //console.log('capitalizeText: ', capitalizeText)

    const pascalCaseText = capitalizeText.join('')
    //console.log(pascalCaseText)

    return pascalCaseText
}