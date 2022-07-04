import React from 'react';

const Results = (props) => {
    const {contributors} = props;

    const listContributors = contributors.length !== 0
    ?
    Array.from(contributors).map(user => <li key={user.login}>{user.login}</li>)
    : 
    <li>No Contributors found</li>;

    return (
        <ul>
            {listContributors}
        </ul>
    );
}

export default Results;