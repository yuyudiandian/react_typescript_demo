import React from 'react'

type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void
}

const Lists = <T extends number | string >({ items, onClick }: ListProps<T>) => {
	return (
		<div>
			<h2>List of items</h2>
			{items.map((item, index) => {
				return (
					<div key={index} onClick={() => onClick(item)}>
						
					</div>
				)
			})}
		</div>
	)
}

export default Lists