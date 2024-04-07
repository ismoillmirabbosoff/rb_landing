export const numberFormat = (number: number | string) => {
	return parseInt(`${number}`)?.toLocaleString()
}
