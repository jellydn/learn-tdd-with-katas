import { logger } from "common";
import { Button } from "ui";

export default function Web() {
	return (
		<div>
			<h1>Web</h1>
			<Button
				onClick={() => {
					return logger.info("Test");
				}}
			/>
		</div>
	);
}
