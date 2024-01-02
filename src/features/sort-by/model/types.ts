import {SortOptions, SortOrders} from '~/shared/model';

export type SortByOption = KeyOf<typeof SortOptions>;
export type SortByOrder = KeyOf<typeof SortOrders>;
