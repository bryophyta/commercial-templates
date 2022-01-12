export type Source = {
	minWidth: string;
	sizes: string;
	hidpiSrcset: string;
	lodpiSrcset: string;
};

export type Single = {
	articleHeadline: string;
	articleText: string;
	articleUrl: string;
	articleImage: {
		sources: Array<Source>;
		backupSrc: string;
	};
	audioTag: boolean;
	galleryTag: boolean;
	videoTag: boolean;
	branding: {
		brandingType: {
			name: string;
		};
		sponsorName: string;
		logo: {
			src: string;
			dimensions: {
				width: number;
				height: number;
			};
			link: string;
			label: string;
		};
	};
};
