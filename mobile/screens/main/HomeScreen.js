import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Modal,
  SafeAreaView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addHeaderLeftNavigator } from '../../helpers';
import $t from 'i18n';
import { activeUserSelector, logout } from '../../store/auth';
import { Button, Text, Div } from 'react-native-magnus';


const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  const user = useSelector(activeUserSelector());

  const [modalVisible, setModalVisible] = useState(false);

  const _signOutAsync = async () => {
    handleLogout();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
        
          <Div {...profileStyle}> 
            <Image
                source={
                  __DEV__
                    ? require('../../assets/images/Anton.png')
                    : require('../../assets/images/Anton.png')
                }
                style={styles.welcomeImage}
              />
              <Text fontSize="4xl" textAlign="center" mb="lg">Антон Сидоров</Text>
              <Text>Волонтер</Text>
          </Div>
            
          <Div row {...infoStyle}>

            <Div >
              <Text fontSize="xl" fontWeight="bold" textAlign="center">4</Text>
              <Text>Пройдено</Text>
            </Div>

            <Div>
              <Text fontSize="xl" fontWeight="bold" textAlign="center">3</Text>
              <Text>Осталось</Text>
            </Div>

            <Div>
              <Text  fontSize="xl" fontWeight="bold" textAlign="center">7</Text>
              <Text>Всего</Text>
            </Div>
            
          </Div>
          

        </View>

      </ScrollView>

      <View style={styles.tabBarInfoContainer} />
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  const headerLeftNav = addHeaderLeftNavigator(navigation);
  return { ...headerLeftNav, title: 'Профиль' };
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 36,

  },
  contentContainer: {
    paddingTop: 30
  },

  tabBarInfoContainer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  welcomeImage: {
    height: 80,
    marginLeft: -10,
    marginTop: 3,
    resizeMode: 'contain',
    width: 100,
    borderRadius:20,
    marginBottom: 40,
  }
});

export const profileStyle = {
  w: '100%',
  flex: 1,
  alignItems: 'center',
  mb: 30
}
export const infoStyle = {
  w:'100%',
  justifyContent: 'space-between'
}
