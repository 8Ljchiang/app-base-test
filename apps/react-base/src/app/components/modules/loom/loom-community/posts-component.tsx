import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ConnectedCreatePostForm } from '../../../forms/create-post-form.component';
import { ItemCard } from '../../../units/ListItemCard';

const userPosts = [
  {
    time: Date.now(),
    author: 'user1',
    content: 'Looking to pair with someone on C# and graphql',
  },
  {
    time: Date.now(),
    author: 'user2',
    content: 'Starting a new project in haskell. Message me on slack if you want to pair.',
  },
  {
    time: Date.now(),
    author: 'user3',
    content: 'Does anyone have any cool projects that they would like to pair on.',
  },
  {
    time: Date.now(),
    author: 'user4',
    content: 'Free to pair for 30 mins today, come find me or message me on slack.',
  },
]

export class LoomCommunityPosts extends Component<any, any> {

  renderPost(post, index) {
    const { author, content, time } = post;
    return (
      // <div className="list-item-card" key={index}>
      //   <div style={styles.postHeadingContainer}>
      //     <h3>{author}: </h3>
      //     <p>{time}</p>
      //   </div>
      //   <p>{content}</p>
      // </div>
      <ItemCard
        key={index}
        title={`${author}: `}
        subTitle={content}
        titleTag={time}
        />
    );
  }

  renderPosts(posts) {
    return posts.map((p, index) => {
      return this.renderPost(p, index);
    });
  }

  render() {
    return (
      <>
        <p>Loom Community Posts: <Link to={'/pairing/community/dashboard'}>Return to Loom Community Dashboard</Link></p>
        <div style={styles.container}>
          <div style={styles.containerColumn}>
            <h2>Posts</h2>
            { this.renderPosts(userPosts) }
            <ConnectedCreatePostForm/>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    // height: '100%',
  },
  containerColumn: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    border: '2px gray dashed',
    margin: '20px',
    padding: '12px',
    background: 'rgb(34, 44, 56)'
    // height: '100%',
  },
  sectionContainer: {
    display: 'flex',
    flexFlow: 'column',
  },
  linkStyle: {
    color: 'black',
  },
  postContainer: {
    display: 'flex',
    flexFlow: 'column',
    marginBottom: '14px',
    border: '0 0 0 2px solid black',
    borderRadius: '3px',
  },
  postHeadingContainer: {
    display: 'flex',
    alignItems: 'end',
    // justifyContent: 'start',
  }

}
