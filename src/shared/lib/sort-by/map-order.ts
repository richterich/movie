import {SortOrder} from '~/shared/api/dto';
import {createKeyByValMapper, createValByKeyMapper} from '../enums';

export const mapSortOrder = createValByKeyMapper(SortOrder);

export const mapSortOrders = createKeyByValMapper(SortOrder);
