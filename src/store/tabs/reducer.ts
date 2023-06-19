import { SET_ACTIVE_TAB } from "./actionTypes";
import { ITabsState, TitleTabType  } from "./interfaces";


const initialState: ITabsState = {
    tabs: [
        {id: 1, title: 'All', isActive: true, isDisabled: false},
        {id: 2, title: 'My favorites', isActive: false, isDisabled: false},
        {id: 3, title: 'Popular', isActive: false, isDisabled: true},
    ],
    activeTab: 'All'
}

export const tabsReducer = (state = initialState, action: any): ITabsState => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            if (state.tabs.find((tab) => tab.id === action.payload && tab.isDisabled)) {
                return state;
            }

            let activeTab: TitleTabType = 'All';

            const newTabs = state.tabs.map((tab) => {
                if (tab.id === action.payload) {
                    activeTab = tab.title;
                    return {...tab, isActive: true};
                }
                return {...tab, isActive: false};
            });

            return {...state, tabs: newTabs, activeTab}
        default:
            return state;
    }
}