export {
    MovieSchema,
    MovieDatesSchema,
    MoviesResponseSchema,
    CategorySchema,
    type Movie,
    type MovieDates,
    type MoviesResponse,
    type Category,
} from './movie.schemas';

export {
    BelongsToCollectionSchema,
    GenreSchema,
    GenreResponseSchema,
    ProductionCompanySchema,
    ProductionCountrySchema,
    SpokenLanguageSchema,
    MovieDetailsSchema,
    type BelongsToCollection,
    type Genre,
    type GenreResponse,
    type ProductionCompany,
    type ProductionCountry,
    type SpokenLanguage,
    type MovieDetails,
} from './movieDetails.schemas';

export {
    CastMemberSchema,
    CrewMemberSchema,
    MovieCreditsResponseSchema,
    type CastMember,
    type CrewMember,
    type MovieCreditsResponse,
} from './movieCredtis.schemas';

export {
    SortBySchema,
    MovieFilterParamsSchema,
    type SortBy,
    type MovieFilterParams,
} from './movieFilter.schemas';

export {
    MovieWithFavoriteSchema,
    MoviesResponseWithFavoriteSchema,
    type MovieWithFavorite,
    type MoviesResponseWithFavorite,
} from './movieWithFavorite.schemas';