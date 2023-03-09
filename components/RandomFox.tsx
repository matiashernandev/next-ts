import type { FC, FunctionComponent } from "react";

export function RandomFoxInferido() {
	return <div>RandomFox</div>;
}

export const RandomFoxFC: FC = () => {
	return <img />;
};

export const RandomFoxFunctionComponent: FunctionComponent = () => {
	return <img />;
};

/* -------------------------------------------------------------------------- */

type Props = {
	img: string;
};

//* Más usada en teoría
export function RandomFox({ img }: Props): JSX.Element {
	return <img width="320" height="auto" className="rounded-lg" src={img} />;
}
