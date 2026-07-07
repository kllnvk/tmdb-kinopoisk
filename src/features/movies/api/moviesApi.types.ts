export type MovieType = {
    adult: boolean
    backdrop_path: string
    genre_ids: [string]
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    softcore: boolean
    video: boolean
    vote_average: number
    vote_count: number
}

export type MovieWithFavorite = MovieType & {
    isFavorite: boolean;
};

export type MovieDates = {
    maximum: string
    minimum: string
}

export type MoviesResponse = {
    dates?: MovieDates
    page: number
    results: MovieType[]
    total_pages: number
    total_results: number
}

export type MoviesResponseWithFavorite = Omit<MoviesResponse, 'results'> & {
    results: MovieWithFavorite[];
};

export type Category = 'popular' | 'now_playing' | 'top_rated' | 'upcoming'

// Movie details types

export type BelongsToCollection = {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

export type Genre = {
    id: number;
    name: string;
}

export type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

export type ProductionCountry = {
    iso_3166_1: string;
    name: string;
}

export type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export type MovieDetailsResponse = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: BelongsToCollection | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    softcore?: boolean;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

// Movie credits type

export type MovieCreditsResponse = {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
};

export type CastMember = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
};

export type CrewMember = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
};

