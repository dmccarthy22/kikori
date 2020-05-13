import {
    StackActions,
    NavigationActions,
    DrawerActions,
} from "@react-navigation/native";

function getCurrentRouteData(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteData(route);
    }
    return { routeName: route.routeName, params: route.params };
}

export default class NavigationService {
    static navigator = null;
    static currentRouterName = null;
    static currentRouteParams = null;

    static pushToScreen = (routeName, params = null, resultCallback = null) => {
        this.navigator &&
            this.navigator.dispatch(
                NavigationActions.navigate({
                    routeName,
                    params: params ? { ...params, resultCallback } : { resultCallback },
                }),
            );
    };

    static forcePushScreen = (routeName, params = null) => {
        this.navigator &&
            this.navigator.dispatch(
                StackActions.push({
                    routeName,
                    params,
                }),
            );
    };

    static resetToScreen = routeName => {
        const resetActions = {
            type: NavigationActions.NAVIGATE,
            routeName,
            action: {
                type: StackActions.RESET,
                index: 0,
                actions: [{ type: NavigationActions.NAVIGATE, routeName }],
            },
        };
        this.navigator && this.navigator.dispatch(resetActions);
    };

    static reset = (routeName, params = null) => {
        this.navigator &&
            this.navigator.dispatch(
                StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName, params })],
                }),
            );
    };

    static resetMultiple = (actions, index) => {
        this.navigator &&
            this.navigator.dispatch(
                StackActions.reset({
                    index,
                    actions,
                }),
            );
    };

    static replace = (routeName, params = null) => {
        this.navigator &&
            this.navigator.dispatch(
                StackActions.replace({
                    routeName,
                    params,
                    //actions: [NavigationActions.navigate({ routeName, params })],
                }),
            );
    };

    static goBack = (n = 1, resultData = null) => {
        if (
            resultData &&
            this.currentRouteParams &&
            this.currentRouteParams.resultCallback
        ) {
            this.currentRouteParams.resultCallback(resultData);
        }

        this.navigator &&
            this.navigator.dispatch(
                StackActions.pop({
                    n,
                }),
            );
    };

    static popToTop = () => {
        this.navigator && this.navigator.dispatch(StackActions.popToTop());
    };

    static openDrawer = () => {
        this.navigator && this.navigator.dispatch(DrawerActions.openDrawer());
    };

    static closeDrawer = () => {
        this.navigator && this.navigator.dispatch(DrawerActions.closeDrawer());
    };

    static onNavigationStateChange = (prevState, currentState) => {
        const { routeName, params } = getCurrentRouteData(currentState);
        this.currentRouterName = routeName;
        this.currentRouteParams = params;
    };
}