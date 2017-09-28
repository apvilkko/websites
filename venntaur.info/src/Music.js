import React from 'react';
import {Link} from 'react-router-dom';
import prefix from './prefix';

export default () => (
  <div>
    <h2>Music</h2>
    <p>Listen to originals, remixes and free downloads at
    {' '}<a href="//soundcloud.com/venntaur">Venntaur's Soundcloud page</a>{' '}
    or follow the links in the <Link to={prefix('discography')}>discography</Link>.</p>
    <p>Venntaur is also on <a href="//open.spotify.com/artist/5nt5GHo8ES0fnqtOwrocQo">Spotify</a> and various other digital music platforms.</p>
    <iframe
      title="soundcloud"
      width="100%" height="450" scrolling="no" frameBorder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/73990805&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
    >
    </iframe>
  </div>
);
