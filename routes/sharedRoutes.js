import React from 'react';
import LikesScreen from '../screens/LikesScreen';
import CommentsScreen from '../screens/CommentsScreen';
import NavButton from '../components/NavButton';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import PhotoScreen from '../screens/PhotoScreen';

const sharedRoutes = {
  Likes: {
    screen: LikesScreen,
    navigationOptions: {
      headerTitle: 'Likes',
    },
  },
  Comments: {
    screen: CommentsScreen,
    navigationOptions: {
      headrTitle: 'Comments',
    },
  },
  ProfileDetail: {
    screen: ProfileDetailScreen,
  },
  Photo: {
    screen: PhotoScreen,
    navigationOptions: {
      headerTitle: 'Photo',
    },
  },
};

const sharedOptions = {
  navigationOptions: {
    headerLeft: props => <NavButton {...props} iconName={'ios-arrow-back'} />,
    headerStyle: {
      backgroundColor: '#FBFBFB',
    },
  },
};

export { sharedOptions };

export default sharedRoutes;
