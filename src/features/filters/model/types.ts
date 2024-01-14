export interface RatingFilter {
  min?: number;
  max?: number;
}

export interface PopularityFilter {
  min?: number;
  max?: number;
}

export interface YearsFilter {
  min?: string;
  max?: string;
}

export interface MinMaxFilter<T> {
  min?: T;
  max?: T;
}
