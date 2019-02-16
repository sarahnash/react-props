// Render the tweets using React!
const App = ({tweets}) => {
    // let { tweets } = props;
    return (
        <div className="d-flex flex-column justify-content-start align-items-center mt-5">
            {
                tweets.map(function (tweet, index) {
                    return (
                        <div className="bg-white p-2 m-2 w-50" key={index}>
                            <User
                                user={tweet.user}/>
                            <Tweet
                                tweet={tweet}/>
                            <hr />
                            <Metrics 
                                replies={tweet.replies}
                                retweets={tweet.retweets}
                                likes={tweet.likes}/>
                        </div>
                    )
            })}
        </div>
    )
}

const Tweet = ({tweet}) => {
    return (
        <h3>{tweet.text}</h3>
    )
};  // CHALLENGE: Write a separate Tweet component for use in the App component

const User = ({user}) => {
    return (
        <div className="d-flex align-items-center">
            <img width="50" src={user.profilePic} />
            <div className="mt-4 ml-2">
                <b>{user.username}</b>
                {user.isVerified ? <img width="15" src="twitterIcons/check-circle.svg" /> : ''}
                <p>{user.handle}</p>
            </div>
        </div>
    )
}  // CHALLENGE: Write a separate User component for use in the Tweet component

const Metrics = ({replies, retweets, likes}) => {
    return (
        <div className="d-flex text-secondary">
            <img style={{opacity: 0.62}} src="twitterIcons/message-circle.svg" />
            <b className="mr-3 ml-1">{replies}</b>
            <img style={{opacity: 0.62}} src="twitterIcons/repeat.svg" />
            <b className="mr-3 ml-1">{retweets}</b>
            <img style={{opacity: 0.62}} src="twitterIcons/heart.svg" />
            <b className="mr-3 ml-1">{likes}</b>
        </div>
    )
}  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly


// Render the tweets using React!
// const App = ({tweets}) => {
//     // let { tweets } = props;
//     return (
//         <div className="d-flex flex-column justify-content-start align-items-center mt-5">
//             {
//                 tweets.map(function (tweet, index) {
//                     return (
//                         <div className="bg-white p-2 m-2 w-50" key={index}>
//                             <div className="d-flex align-items-center">
//                                 <img width="50" src={tweet.user.profilePic} />
//                                 <div className="mt-4 ml-2">
//                                     <b>{tweet.user.username}</b>
//                                     {tweet.user.isVerified ? <img width="15" src="twitterIcons/check-circle.svg" /> : ''}
//                                     <p>{tweet.user.handle}</p>
//                                 </div>
//                             </div>
//                             <h3>{tweet.text}</h3>
//                             <hr />
//                             <div className="d-flex text-secondary">
//                                 <img style={{opacity: 0.62}} src="twitterIcons/message-circle.svg" />
//                                 <b className="mr-3 ml-1">{tweet.replies}</b>
//                                 <img style={{opacity: 0.62}} src="twitterIcons/repeat.svg" />
//                                 <b className="mr-3 ml-1">{tweet.retweets}</b>
//                                 <img style={{opacity: 0.62}} src="twitterIcons/heart.svg" />
//                                 <b className="mr-3 ml-1">{tweet.likes}</b>
//                             </div>
//                         </div>
//                     )
//             })}
//         </div>
//     )
// }