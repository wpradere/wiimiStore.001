export function formatPrice(price:number){

    const formattedPrice = new Intl.NumberFormat('es-Co', {
        style: 'currency',
        currency: 'COP',
    })
    return formattedPrice.format(price);
}