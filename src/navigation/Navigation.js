import { Navigation } from 'react-native-navigation';
import {
    Splash_Screen,
    TAB1_SCREEN,
    TAB2_SCREEN
  } from './screen';
import registerScreen from './registerscreen';
registerScreen();

export function MainScreen() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#039893'
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white'
      },
      buttonColor: 'white',
    },
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    // bottomTabs: {
    //   titleDisplayMode: 'alwaysShow'
    // },
    // bottomTab: {
    //   textColor: 'gray',
    //   selectedTextColor: 'black',
    //   iconColor: 'gray',
    //   selectedIconColor: 'black',
    // }
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: Splash_Screen,
            options: {
              topBar: {
                visible: false,
              },
              statusBar: {
                style: '#ffffff'
              }
            }
          }
        }]
      }
    }
  });
}

export function pushTabBasedApp() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
          stack: {
            children: [{
              component: {
                name: TAB1_SCREEN,
                options: {
                  topBar: {
                    title: {
                      text: 'Home',
                      alignment:'center'
                    },
                    leftButtons: [
                      {
                        id: 'nav_user_btn',
                        icon: require('assets/icons/ic_tab_menu.png'),
                        color: 'black'
                      }
                    ],
                    rightButtons: [
                    
                    ]
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                icon: require('assets/icons/ic_tab_home.png'),
                testID: 'FIRST_TAB_BAR_BUTTON',
                text: 'Home',
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: TAB2_SCREEN,
                options: {
                  topBar: {
                    title: {
                      text: 'Settings',
                      alignment:'center'
                    },
                    leftButtons: [
                      {
                        id: 'nav_user_btn',
                        icon: require('assets/icons/ic_nav_user.png'),
                        color: 'white'
                      }
                    ],
                    rightButtons: [
                      {
                        id: 'nav_logout_btn',
                        icon: require('assets/icons/ic_nav_logout.png'),
                        color: 'white'
                      }
                    ]
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                icon: require('assets/icons/ic_nav_user.png'),
                testID: 'SECOND_TAB_BAR_BUTTON',
                text: 'Settings',
                
              }
            }
          }
        }]
      }
    }
  });
}

  



