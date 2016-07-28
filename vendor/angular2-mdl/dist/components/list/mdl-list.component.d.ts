import { OnChanges, OnInit } from '@angular/core';
import { MdlError } from './../common/mdl-error';
export declare class MdlUnsupportedCountOfListItemLinesError extends MdlError {
    constructor(lines: number | string);
}
export declare class MdlListComponent {
}
export declare class MdlListItemComponent implements OnInit, OnChanges {
    private mdlListComponent;
    private lines;
    constructor(mdlListComponent: MdlListComponent);
    ngOnInit(): void;
    ngOnChanges(): void;
}
export declare class MdlListItemPrimaryContentComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemComponent);
    ngOnInit(): void;
}
export declare class MdlListItemSecondaryContentComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemComponent);
    ngOnInit(): void;
}
export declare class MdlListItemSecondaryActionComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemComponent);
    ngOnInit(): void;
}
export declare class MdlListItemSubTitleComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemPrimaryContentComponent);
    ngOnInit(): void;
}
export declare class MdlListItemSecondaryInfoComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemSecondaryContentComponent);
    ngOnInit(): void;
}
export declare class MdlListItemTextBodyComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemComponent);
    ngOnInit(): void;
}
export declare class MdlListItemIconDirective {
}
export declare class MdlListItemAvatarDirective {
}
export declare const MDL_LIST_DIRECTIVES: (typeof MdlListComponent | typeof MdlListItemComponent | typeof MdlListItemPrimaryContentComponent | typeof MdlListItemSecondaryContentComponent | typeof MdlListItemSecondaryActionComponent | typeof MdlListItemSubTitleComponent | typeof MdlListItemSecondaryInfoComponent | typeof MdlListItemTextBodyComponent)[];
