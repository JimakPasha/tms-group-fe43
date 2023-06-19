import { SET_ACTIVE_TAB } from './actionTypes';

export type TitleTabType = 'All' | 'My favorites' | 'Popular';

interface ITab {
    id: number;
    title: TitleTabType;
    isActive: boolean;
    isDisabled: boolean;
}

export interface ITabsState {
    tabs: ITab[];
    activeTab: TitleTabType;
}

export interface ISetActiveTabAction {
    type: typeof SET_ACTIVE_TAB;
    payload: number;
}

export type TabsActionsTypes = ISetActiveTabAction;