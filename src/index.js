import clsx from 'clsx'

const widths = (obj, screenWidth = window.innerWidth) => {
	const keys = Object.keys(obj)
	const newObj = {}
	const breakpoints = keys.map(key => {
		const width = parseInt(key, 10)
		if (isNaN(width)) {
			throw Error('keys must be number')
		} else {
			newObj[width] = obj[key]
			return width
		}
	})
	const sorted = breakpoints.sort((a, b) => a - b)
	const width = sorted.find(width => screenWidth < width)
	if (width) {
		return clsx(newObj[width])
	} else {
		return clsx(newObj[sorted[sorted.length - 1]])
	}
}

export default widths
