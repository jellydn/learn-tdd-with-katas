import pino from "pino";

const logger = pino({
	level: process.env.LOGLEVEL ?? "info",
});

export default logger;
