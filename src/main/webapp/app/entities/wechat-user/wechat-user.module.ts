import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { A5BackendSharedModule } from '../../shared';
import {
    WechatUserService,
    WechatUserPopupService,
    WechatUserComponent,
    WechatUserDetailComponent,
    WechatUserDialogComponent,
    WechatUserPopupComponent,
    WechatUserDeletePopupComponent,
    WechatUserDeleteDialogComponent,
    wechatUserRoute,
    wechatUserPopupRoute,
    WechatUserResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...wechatUserRoute,
    ...wechatUserPopupRoute,
];

@NgModule({
    imports: [
        A5BackendSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        WechatUserComponent,
        WechatUserDetailComponent,
        WechatUserDialogComponent,
        WechatUserDeleteDialogComponent,
        WechatUserPopupComponent,
        WechatUserDeletePopupComponent,
    ],
    entryComponents: [
        WechatUserComponent,
        WechatUserDialogComponent,
        WechatUserPopupComponent,
        WechatUserDeleteDialogComponent,
        WechatUserDeletePopupComponent,
    ],
    providers: [
        WechatUserService,
        WechatUserPopupService,
        WechatUserResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class A5BackendWechatUserModule {}
