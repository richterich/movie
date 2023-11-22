import type {MovieVideosResponse, MovieVideo} from '~/shared/api/dto';
import {VideoType} from '~/shared/api/dto';
import {createValByKeyMapper, createKeyByValMapper} from '~/shared/lib';
import type {Video, VideoList} from '../model';

export const mapVideo = (dto: MovieVideo): Video => {
  return {
    name: dto.name,
    key: dto.key,
    size: dto.size,
    publicationDate: dto.publicationDate,
    type: mapVideoTypes(dto.type),
    isOfficial: dto.isOfficial,
  };
};

export const mapVideoList = (dto: MovieVideosResponse): VideoList => {
  return {
    id: dto.id,
    videos: dto.results.map(mapVideo),
  };
};

export const mapVideoType = createValByKeyMapper(VideoType);

export const mapVideoTypes = createKeyByValMapper(VideoType);
