import {
	FC,
	FunctionComponent,
	ImgHTMLAttributes,
	useEffect,
	useState,
} from "react";
import { useRef } from "react";

export function LazyImageInferido() {
	return <div>LazyImage</div>;
}

export const LazyImageFC: FC = () => {
	return <img />;
};

export const LazyImageFunctionComponent: FunctionComponent = () => {
	return <img />;
};

/* -------------------------------------------------------------------------- */

type LazyImageProps = {
	img: string;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

//* Más usada en teoría
export function LazyImage({ img, ...imgProps }: Props): JSX.Element {
	const node = useRef<HTMLImageElement>(null);
	const [src, setSrc] = useState(
		// imagen mágica de next
		"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
	);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setSrc(img);
				}
			});
		});

		if (node.current) {
			observer.observe(node.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [img]);

	return <img ref={node} src={src} {...imgProps} />;
}
