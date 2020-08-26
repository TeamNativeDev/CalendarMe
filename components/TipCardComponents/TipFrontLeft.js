import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { EditTip } from '../../actions/tipAction';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');
const TipFrontLeft = (props) => {
  const { user, by_username, more_info, votes, tip, jwt } = props;
  const [tipVotes, setTipVotes] = useState(votes);

  const handleUpVote = (currentUser) => {
    if (user.id) {
      let vote = tipVotes.find((voteId) => voteId === currentUser.id);
      if (vote) {
        setTipVotes((prev) => prev.filter((userVote) => userVote !== vote));
      } else {
        setTipVotes((prev) => [...prev, currentUser.id]);
      }
      props.EditTip(tip, jwt);
    } else {
      Alert.alert('Only Logged In Users can vote');
    }
  };

  return (
    <View style={leftViewStyle.left_side}>
      <View style={{ alignItems: 'center' }}>
        <Text>Tip By:</Text>
        <Text> {by_username}</Text>
      </View>

      <TouchableOpacity onPress={() => handleUpVote(user)}>
        <Text>
          <Entypo name="thumbs-up" size={30} color="black" />
          {tipVotes.length} Times
        </Text>
      </TouchableOpacity>

      <Text
        style={leftViewStyle.more_info}
        onPress={() => Linking.openURL(more_info)}
      >
        More Info
      </Text>
    </View>
  );
};

const leftViewStyle = StyleSheet.create({
  more_info: {
    color: 'blue',
    paddingTop: 10,
    textAlign: 'center',
  },
  left_side: {
    flex: 1,
    height: height / 3.2,
    width: width,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 8,
    backgroundColor: 'lightgreen',
  },
});

const mapStateToProps = ({ authStore }) => ({
  jwt: authStore.jwt,
});

export default connect(mapStateToProps, { EditTip })(TipFrontLeft);
