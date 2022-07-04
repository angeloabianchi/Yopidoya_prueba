import React from 'react';
import {useEffect, useState} from 'react';
import Results from './Results';

const Inputs = (props) => {
    const [username, setUsername] = useState('');
  const [repo, setRepo] = useState('');
  const [contributors, setContributors] = useState('');

  const url = `https://api.github.com/repos/${username}/${repo}/contributors`;

  const headers = {
    "Authorization": `Token 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`
  }

  useEffect(() => {
    fetch(url, {
      "method": "GET",
      "headers": headers
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setContributors(result);
          
        }, (error) => {
          console.log(error);
        }
      );
  }, [username, repo]);


  /* const handleClick = () => {
    console.log(contributors[0].login);
    for (let i = 0; i < contributors.length; i++) {
      console.log(contributors[i].login);
    }
  } */

  /* const handleClick = () => {
    console.log(contributors[0].login);
    for (let i = 0; i < contributors.length; i++) {
      //console.log(contributors[i].login);
      setLogin(`[${i}]: ` + contributors[i].login);
    }
    console.log(contributors.login);
  } */

  /* const handleClick = () => {
    console.log(contributors[0].login);
    for (let i = 0; i < contributors.length; i++) {
      //console.log(contributors[i].login);
      setLogin(contributors[i].login);
    }
  } */

  /* const handleClick = () => {
    Object.keys(contributors).map(key => {
      const value = contributors[key];
      console.log(value);
    })
  } */

    return (
        <div className="App">
            <div className="header">
                <div className="title">GITHUB API - Find Contributors</div>
                <div className="description">This webpage allow the user to list the Contributors of a given repository</div>
            </div>
        
            <div className="inputs">
                <form name="formulario" id="formulario" >
                    <input type="text" name="username" id="user" onChange={event => setUsername(event.target.value)} placeholder="   user name"/>
                    <input type="text" name="repo" id="repo" onChange={event => setRepo(event.target.value)} placeholder="   repository name" />
                </form>
            </div>

            <div className="results">
                <Results contributors={contributors}/>
            </div>

        </div>
    );
}


export default Inputs;