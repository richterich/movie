export const selectFilters = (state: App.RootState) => state.filters;
export const selectGenreFilter = (state: App.RootState) => state.filters.genres;
export const selectYearFilter = (state: App.RootState) => state.filters.years;
export const selectRatingFilter = (state: App.RootState) => state.filters.rating;
export const selectPopularityFilter = (state: App.RootState) => state.filters.popularity;
export const selectKeywordFilter = (state: App.RootState) => state.filters.keywords;
