import {SortOption} from '~/shared/api/dto';
import {createKeyByValMapper, createValByKeyMapper} from '../enums';

export const mapSortOption = createValByKeyMapper(SortOption);

export const mapSortOptions = createKeyByValMapper(SortOption);
