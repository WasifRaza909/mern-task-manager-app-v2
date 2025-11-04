export const validateEmail  = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email)
}

export const addThousandsSeparator = (num) => {
    if(num == null || isNaN(num)) return;
    console.log(num," <-num")
    const [integerPart, fractionalPart] = num.toString().split('.')
    const formettedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    return fractionalPart ? `${formettedInteger}.${fractionalPart}` : formettedInteger
}