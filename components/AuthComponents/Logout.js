import React, { useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const Logout = ({ logoutUser: logout, navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      logout();
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
  return (
    <SafeAreaView>
      <Text>Thanks for using our App</Text>
    </SafeAreaView>
  );
};

export default connect(null, { logoutUser })(Logout);
