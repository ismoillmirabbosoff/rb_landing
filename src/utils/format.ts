export const numberFormat = (number: number | string) => {
	return parseInt(`${number}`)?.toLocaleString()
}

export const phoneFormat = (phone: string) => {
	return `+998${phone.replace(/\s/g, '')}`
}
