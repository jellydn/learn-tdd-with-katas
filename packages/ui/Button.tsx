import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ onClick }: Props) {
	return (
		<button type="button" onClick={onClick}>
			Button
		</button>
	);
}
