
import React from "react";
import {
    View,
    ScrollView,
    RefreshControl,
} from "react-native";
import PrimaryText from "components/PrimaryText";
import Styles from "config/Styles";
import PrimaryTouchable from "components/PrimaryTouchable";
import Colors from "config/Colors";
import { SafeAreaView } from "react-navigation";
import RecentlyActivitiesCarousel from "components/RecentlyActivitiesCarousel";
import Dimensions from "config/Dimensions";
import EngagingOpeners from "components/EngagingOpeners";
import HorizontalCreatorList from "components/HorizontalCreatorList";
import NavigationService from "service/NavigationService";
import ScreenID from "config/ScreenID";
import styles from "./styles";
import PrimaryButton from "components/PrimaryButton";
import VectorIcon from "components/VectorIcon";
import HeaderMain from "components/HeaderMain";
import BackgroundImageView from "components/BackgroundImageView";
import GetStartedList from "components/GetStartedList";
import LoadingView from "components/LoadingView";
import Constants from "config/Constants";
import ActivityService from "service/ActivityService";
import {
    createLoadingSelector,
    createRefreshSelector,
} from "store/selectors";
import fromActivity from "store/Activity";
import { connect } from "react-redux";
import ScreenComponent from "components/ScreenComponent";
import AppService from "service/AppService";
import DeviceHelper from "config/DeviceHelper";
import fromApp from "store/App";
import DisconnectionView from "components/DisconnectionView";

class Activities extends ScreenComponent {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        super.componentDidMount();
        this.initData();
        requestAnimationFrame(() => {
            this.setState({
                isLoading: false,
            });
        });
    }

    componentDidFocus() {
        AppService.setBottomSheet(
            Constants.BottomSheetTypes.CreateOrUpdateActivity);
    }

    componentDidUpdate(prevProps) {
        if (this.props.keyChange !== prevProps.keyChange) {
            this.initData({
                skipUser: true,
            });
        }
        if (this.props.isConnected !== prevProps.isConnected &&
            !!this.props.isConnected) {
            setTimeout(() => {
                this.initData();
            }, 500);
        }
    }

    componentWillUnmount() {
        super.componentWillUnmount();
    }

    initData = (params = {}) => {
        const data = {
            ...params,
            skipUser: !!params.skipUser,
        };
        ActivityService.getDataActivity(data);
    };

    goToDetail = (item) => {
        NavigationService.pushToScreen(ScreenID.ActivityDetail, {
            id: item.id,
        });
    };

    goToSearch = () => {
        NavigationService.pushToScreen(ScreenID.Search);
    };

    goToFilter = () => {
        NavigationService.pushToScreen(ScreenID.Search, {
            showFilter: true,
        });
    };

    onIconPress = (index) => {
        if (index === 0) {
            this.goToSearch();
        } else {
            this.goToFilter();
        }
    };

    onCategory = item => {
        NavigationService.pushToScreen(ScreenID.CategoryDetail, { item });
    };

    onSeeAll = (type) => {
        switch (type) {
            case Constants.SeeAllType.EngagingOpeners:
                NavigationService.pushToScreen(ScreenID.EngagingOpeners);
                break;
            case Constants.SeeAllType.Categories:
                NavigationService.pushToScreen(ScreenID.Categories);
                break;
            case Constants.SeeAllType.Creators:
                NavigationService.pushToScreen(ScreenID.Creators);
                break;
            default:
                break;
        }
    };

    onCreate = () => {
        ActivityService.openCreateOrUpdate();
    };

    onRefresh = () => {
        if (this.props.isConnected) {
            this.initData({ isRefresh: true });
        }
    };
    onCreator = item => {
        NavigationService.pushToScreen(ScreenID.CreatorProfile, { item });
    };

    onRetry = () => {
        this.initData();
    };

    renderHeader = () => {
        const iconActions = this.props.isConnected ? [
            {
                name: "search",
                type: "image",
            },
            {
                name: "filter",
                type: "image",
            },
        ] : [];
        return (
            <HeaderMain
                onIconPress={this.onIconPress}
                title={"Activities"}
                iconActions={iconActions}
                widgetStyles={{
                    container: {
                        paddingBottom: this.props.isConnected ?
                            Dimensions.DistanceMedium : 0,
                    },
                }}
            />
        );
    };

    renderCreateActivity = () => {
        return (
            <PrimaryButton
                onPress={this.onCreate}
                title={"Create"}
                leftIcon={
                    <VectorIcon
                        size={13}
                        name={"add"}
                        containerStyle={{ paddingRight: 5 }}
                    />
                }
                {...styles.createActivityButton}
            />
        );
    };

    renderCategoryName = (name) => {
        const color = name === "Recently Added" ?
            Colors.primaryConstraint : Colors.blackPrimary;
        return (
            <PrimaryText style={[styles.categoryNameText, { color }]}>
                {name}
            </PrimaryText>
        );
    };

    renderSeeAllButton = (type) => {
        return (
            <PrimaryTouchable
                style={styles.seeAllContainer}
                onPress={() => this.onSeeAll(type)}>
                <PrimaryText style={styles.seeAllText}>
                    See All
        </PrimaryText>
            </PrimaryTouchable>
        );
    };

    renderImageBackground = () => {
        const { categoryNameContainer } = styles;
        return (
            <View>
                <View style={[
                    categoryNameContainer,
                    Styles.BetweenCenter,
                    { paddingTop: 10 },
                ]}>
                    {this.renderCategoryName("Recently Added")}
                    {this.renderCreateActivity()}
                </View>
                <RecentlyActivitiesCarousel
                    onItemPress={this.goToDetail}
                    dataActivity={this.props.dataActivity}
                />
            </View>
        );
    };

    renderCreators = () => {
        const { categoryNameContainer, creatorsContainer } = styles;
        return (
            <View style={creatorsContainer}>
                <View style={[
                    categoryNameContainer,
                    {
                        ...Styles.BetweenCenter,
                        paddingBottom: Dimensions.DistancePrimary,
                        paddingTop: 0,
                    }]}>
                    {this.renderCategoryName("Creators")}
                    {this.renderSeeAllButton(Constants.SeeAllType.Creators)}
                </View>
                <HorizontalCreatorList
                    dataActivity={this.props.dataActivity}
                    onItemPress={this.onCreator}
                />
            </View>
        );
    };

    renderGetStarted = () => {
        return (
            <>
                <View style={[
                    styles.categoryNameContainer,
                    {
                        paddingVertical: Dimensions.DistancePrimary,
                        ...Styles.BetweenCenter,
                    }]}>
                    {this.renderCategoryName("Get Started")}
                </View>
                <GetStartedList detail onItemPress={this.onCategory} />
            </>
        );
    };

    renderEngagingOpeners = () => {
        return (
            <>
                <View style={[
                    styles.categoryNameContainer,
                    {
                        paddingVertical: Dimensions.DistancePrimary,
                        ...Styles.BetweenCenter,
                    }]}>
                    {this.renderCategoryName("Engaging Openers")}
                    {this.renderSeeAllButton(Constants.SeeAllType.EngagingOpeners)}
                </View>
                <EngagingOpeners
                    dataActivity={this.props.dataActivity}
                    onItemPress={this.goToDetail}
                />
            </>
        );
    };

    renderViewContent = () => {
        if (this.props.isConnected) {
            return (
                <>
                    {this.renderImageBackground()}
                    {this.renderEngagingOpeners()}
                    {this.renderGetStarted()}
                    {this.renderCreators()}
                </>
            );
        }
        return (
            <DisconnectionView onRetry={this.onRetry} />
        );

    };

    renderContainer = () => {
        const { wrapper, containerStyle, loadingViewContainer } = styles;
        const { isLoading, dataActivity, refreshing, isConnected } = this.props;

        if (Object.keys(dataActivity).length === 0 && (this.state.isLoading ||
            isLoading)) {
            return (
                <View style={loadingViewContainer}>
                    <LoadingView />
                </View>
            );
        }
        return (
            <View style={wrapper}>
                {DeviceHelper.isIOS && <>
                    {DeviceHelper.isIphoneX && <View style={{
                        height: refreshing ? Dimensions.ExtraTop : 0,
                    }} />}
                    <View style={styles.refreshContainer}
                    />
                </>}
                <ScrollView
                    bounces={isConnected}
                    scrollEnabled={isConnected}
                    refreshControl={<RefreshControl
                        onRefresh={this.onRefresh}
                        refreshing={refreshing}
                        tintColor={Colors.primaryConstraint}
                    />}
                    contentContainerStyle={containerStyle}
                    showsVerticalScrollIndicator={false}>
                    <BackgroundImageView />
                    {this.renderHeader()}
                    {this.renderViewContent()}
                </ScrollView>
            </View>
        );
    };

    render() {
        const { container } = styles;
        return (
            <SafeAreaView
                forceInset={{ top: "never", bottom: "never" }}
                style={container}>
                {this.renderContainer()}
            </SafeAreaView>
        );
    }
}

const loadingSelector = createLoadingSelector([
    fromActivity.actions.GET_DATA_ACTIVITY_PREFIX,
    fromApp.actions.GET_CONSTANTS_PREFIX,
]);

const refreshSelector = createRefreshSelector([
    fromActivity.actions.GET_DATA_ACTIVITY_PREFIX,
]);

const mapStateToProps = state => {
    return {
        isLoading: loadingSelector(state),
        keyChange: state.activity.get("keyChange") +
            state.playlist.get("keyChange"),
        dataActivity: state.activity.get("dataActivity"),
        refreshing: refreshSelector(state),
        isConnected: state.network.get("isConnected"),
    };
};

export default connect(mapStateToProps, null)(Activities);
