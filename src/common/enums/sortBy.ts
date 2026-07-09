export const sortBy = {
    PopularityDesc: "popularity.desc",
    PopularityAsc: "popularity.asc",
    RatingDesc: "vote_average.desc",
    RatingAsc: "vote_average.asc",
    ReleaseDateAsc: "primary_release_date.asc",
    ReleaseDateDesc: "primary_release_date.desc",
    TitleAsc: "original_title.asc",
    TitleDesc: "original_title.desc",
} as const;

export type SortByType = typeof sortBy[keyof typeof sortBy];