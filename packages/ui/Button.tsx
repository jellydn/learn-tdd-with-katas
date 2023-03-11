export const Button = ({ onClick }: { onClick: () => void }) => {
	return (
		<button type="button" onClick={onClick}>
			Button
		</button>
	);
};
