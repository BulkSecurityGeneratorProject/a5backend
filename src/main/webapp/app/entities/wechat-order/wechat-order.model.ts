import { BaseEntity } from './../../shared';

export class WechatOrder implements BaseEntity {
    constructor(
        public id?: number,
        public status?: string,
        public orderAmount?: number,
        public customerId?: number,
        public salerId?: number,
        public wechatOrderItems?: BaseEntity[],
    ) {
    }
}
