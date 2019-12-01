import { Navigation } from 'react-native-navigation';
import {
    Splash_Screen,
    TAB1_SCREEN,
    TAB2_SCREEN,
    Sidebar_SCREEN
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
      sideMenu:{
        left: {
          component: {
            name: Sidebar_SCREEN,
            id: 'leftDrawer',
            options:{
              customTransition: {
                animations: [
                  { type: 'sharedElement', fromId: 'image1', toId: 'image2', startDelay: 0, springVelocity: 0.2, duration: 0.5 }
                ],
                duration: 0.8
              }
            }
          }
        },
        center: {
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
                          alignment:'center',
                          color: 'white',
                        },
                        background: {
                          color: '#039893'
                        },
                        leftButtons: [
                          {
                            id: 'sidebar_btn',
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
                          alignment:'center',
                          color: 'white',
                        },
                        background: {
                          color: '#039893'
                        },
                        leftButtons: [
                         
                        ],
                        rightButtons: [
                         
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
      },
    }
  });
}

  



