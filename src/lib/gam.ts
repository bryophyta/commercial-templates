const CLICK_MACRO = '%%CLICK_URL_UNESC%%';
const CACHE_BUST = '%%CACHEBUSTER%%';

type GAMVariable<T extends string = string> = `[%${T}%]`;

const gamVar = <T extends string>(s: T): GAMVariable<T> => `[%${s}%]`;

const replaceGAMVariables = (
	input: string,
	variables: Record<string, string>,
): string => {
	const output = Object.entries(variables).reduce((replaced, [key, value]) => {
		return (
			replaced
				// Variables in the form [%MyOneVariable%]
				.replaceAll(gamVar(key), value)
				// Variables in the form %%MY_OTHER_VARIABLE%%
				.replaceAll(`%%${key}%%`, value)
		);
	}, input);

	return output;
};

const addTrackingPixel = (url: string) => {
	const pixel = new Image();
	pixel.src = url + CACHE_BUST;
};

const isValidReplacedVariable = (s: GAMVariable): boolean =>
	s.length > 0 && !s.startsWith('[%') && !s.endsWith('%]');

export type { GAMVariable };
export {
	CACHE_BUST,
	CLICK_MACRO,
	addTrackingPixel,
	gamVar,
	isValidReplacedVariable,
	replaceGAMVariables,
};
