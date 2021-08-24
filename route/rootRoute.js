import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Splash from './../screens/splash';
import Login from './../screens/login';
import Signup from './../screens/signup';
import Home from './../screens/home';
import Chat from './../screens/chat';
import Message from './../screens/message';
import Projects from './../screens/projects';
import Property from './../screens/property';
import Favourite from './../screens/favourite';
import FavProperty from './../screens/favProperty';
import News from './../screens/news';
import NewsArticle from './../screens/newsArticle';
import About from './../screens/about';
import Contact from './../screens/contact';
import Settings from './../screens/settings';
import SendFeedback from './../screens/sendFeedback';
import DrawerContent from './../components/drawerContent';
import HeaderRight from './../components/headerRight';
import HeaderLeft from './../components/headerLeft';
import ChatHeader from './../components/chatHeader';
import PropertyHeader from './../components/propertyHeader';
import { AuthContext } from './../components/context';
import { AsyncStorage } from "@react-native-async-storage/async-storage";
// import Users from './../models/users';


const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const ProjectStack = createStackNavigator();
const FavouriteStack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
const NewsStack = createStackNavigator();
const AboutStack = createStackNavigator();
const ContactStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const SendFeedbackStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();


const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
        headerTintColor: 'white', headerStyle: { backgroundColor: 'red', },
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerRight: () => <HeaderRight />,
    }}>
        <HomeStack.Screen name="Home" component={Home} options={{ title: 'MyKay', }} />
    </HomeStack.Navigator>
);

const ChatStackScreen = ({ navigation, route }) => {
    return (
        <ChatStack.Navigator initialRouteName="Chat" screenOptions={{
            headerTintColor: 'white', headerStyle: { backgroundColor: 'red', },
            headerRight: () => <HeaderRight />,
        }}>
            <ChatStack.Screen name="Chat" component={Chat} options={{
                headerLeft: () => <HeaderLeft navigation={navigation} />,
            }} />
            <ChatStack.Screen name="Message" component={Message}
                options={({ route }) => ({
                    headerTitle: () => <ChatHeader route={route} />
                })} />
        </ChatStack.Navigator >
    );
}

const ProjectStackScreen = ({ navigation }) => (
    <ProjectStack.Navigator initialRouteName="Projects" screenOptions={{
        headerTintColor: 'white', headerStyle: { backgroundColor: 'red', },
        headerRight: () => <HeaderRight />,
    }}>
        <ProjectStack.Screen name="Projects" component={Projects} options={{
            headerLeft: () => <HeaderLeft navigation={navigation} />,
        }} />
        <ProjectStack.Screen name="Property" component={Property}
            options={({ route }) => ({
                headerTitle: () => <PropertyHeader route={route} />
            })} />
    </ProjectStack.Navigator>
);

const FavouriteStackScreen = ({ navigation }) => (
    <FavouriteStack.Navigator initialRouteName="Favourite" screenOptions={{
        headerTintColor: 'white', headerStyle: { backgroundColor: 'red', },
        headerRight: () => <HeaderRight />,
    }}>
        <FavouriteStack.Screen name="Favourite" component={Favourite} options={{
            headerLeft: () => <HeaderLeft navigation={navigation} />,
        }} />
        <FavouriteStack.Screen name="FavProperty" component={FavProperty}
            options={({ route }) => ({
                headerTitle: () => <PropertyHeader route={route} />
            })} />
    </FavouriteStack.Navigator>
);

const TabsScreen = () => {
    return (
        <Tabs.Navigator
            initialRouteName='Home'
            activeColor='white'
            inactiveColor='salmon'
            labelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: 'red' }}
        >
            <Tabs.Screen name="Home" component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />),
                }} />
            <Tabs.Screen name="Chat" component={ChatStackScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-text" color={color} size={26} />),
                }} />
            <Tabs.Screen name="Projects" component={ProjectStackScreen}
                options={{
                    tabBarLabel: 'Projects',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="office-building" color={color} size={26} />),
                }} />
            <Tabs.Screen name="Favourite" component={FavouriteStackScreen}
                options={{
                    tabBarLabel: 'Favourite',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={26} />),
                }} />
        </Tabs.Navigator>
    );
};

const NewsStackScreen = ({ navigation }) => (
    <NewsStack.Navigator initialRouteName="News" screenOptions={{
        headerTintColor: 'white', headerStyle: { backgroundColor: 'red', },
        headerRight: () => <HeaderRight />,
    }}>
        <NewsStack.Screen name="News" component={News} options={{
            headerLeft: () => <HeaderLeft navigation={navigation} />,
        }} />
        <ChatStack.Screen name="NewsArticle" component={NewsArticle} options={{ title: 'Property News', }} />
    </NewsStack.Navigator>
);

const AboutStackScreen = ({ navigation }) => (
    <AboutStack.Navigator initialRouteName="About" screenOptions={{
        headerTintColor: 'white', headerStyle: { backgroundColor: 'red', },
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerRight: () => <HeaderRight />,
    }}>
        <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
);

const ContactStackScreen = ({ navigation }) => (
    <ContactStack.Navigator initialRouteName="Contact" screenOptions={{
        headerTintColor: 'white', headerStyle: { backgroundColor: 'red', },
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerRight: () => <HeaderRight />,
    }}>
        <ContactStack.Screen name="Contact" component={Contact} />
    </ContactStack.Navigator>
);

const SettingsStackScreen = ({ navigation }) => (
    <SettingsStack.Navigator initialRouteName="Settings" screenOptions={{
        headerTintColor: 'white', headerStyle: { backgroundColor: 'red', },
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerRight: () => <HeaderRight />,
    }}>
        <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator >
);

const SendFeedbackStackScreen = ({ navigation }) => (
    <SendFeedbackStack.Navigator initialRouteName="SendFeedback" screenOptions={{
        title: 'Send Feedback',
        headerTintColor: 'white', headerStyle: { backgroundColor: 'red', },
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerRight: () => <HeaderRight />,
    }}>
        <SendFeedbackStack.Screen name="SendFeedback" component={SendFeedback} />
    </SendFeedbackStack.Navigator >
);

export default function AuthScreen() {
    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                }
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                }
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                }
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                }
        }
    };
    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
    const authContext = React.useMemo(() => ({
        logIn: async (foundUser) => {
            const userToken = String(foundUser[0].userToken);
            const userName = String(foundUser[0].username);
            try {
                await AsyncStorage.setItem('userToken', userToken);
            } catch (e) {
                console.log(e);
            }
            // }
            // console.log('user token: ', userToken);
            dispatch({ type: 'LOGIN', id: userName, token: userToken })
        },
        logOut: async () => {
            try {
                await AsyncStorage.removeItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'LOGOUT' });

        },
        signUp: () => {
            setUserToken('asd');
            setIsLoading(false);
        },
    }), []);

    React.useEffect(() => {
        setTimeout(async () => {
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            }
            catch (e) {
                console.log(e);
            }
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);

    if (loginState.isLoading) {
        return <Splash />;
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {loginState.userToken !== null ? (
                    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                        <Drawer.Screen name="Home" component={TabsScreen} />
                        <Drawer.Screen name="News" component={NewsStackScreen} />
                        <Drawer.Screen name="About" component={AboutStackScreen} />
                        <Drawer.Screen name="Contact" component={ContactStackScreen} />
                        <Drawer.Screen name="Settings" component={SettingsStackScreen} />
                        <Drawer.Screen name="SendFeedback" component={SendFeedbackStackScreen} />
                    </Drawer.Navigator>
                ) :
                    <AuthStack.Navigator screenOptions={{ headerShown: false, }}>
                        <AuthStack.Screen name='Login' component={Login} />
                        <AuthStack.Screen name='Signup' component={Signup} />
                    </AuthStack.Navigator>
                }
            </NavigationContainer >
        </AuthContext.Provider>
    )
}