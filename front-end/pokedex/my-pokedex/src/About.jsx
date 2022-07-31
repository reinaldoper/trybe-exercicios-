import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
        <div>
            <nav>
            <p>
            <Link to="/">Home</Link>
                </p>
            </nav>
            <h1>Informações</h1>
            The Catch A Million campaign to #ConquerKidsCancer in benefit of St. Baldrick’s Foundation is over, but you can still donate if you'd like to help the cause!
Pokémon Legends: Arceus has been officially released! Bulbapedia is currently being updated with the new information.
Do not copy information from other fansites without permission. Please remember to follow the manual of style and code of conduct at all times.
Check Bulbanews for up-to-date Pokémon news and discuss it on the forums or in the Bulbagarden Discord server.
        </div>
    )
  }
}
