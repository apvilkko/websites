import React from 'react';
import {List, TitleLink} from './Discography';

const mapType = {
  local: 'Download',
  proton: 'Proton',
  soundcloud: 'Soundcloud',
}

export default ({data}) => (
  <div>
    <h2>DJ Mixes</h2>
    <List data={data} renderItem={item => (
      <td>
        <TitleLink item={item} />
        {item.urls.length > 1 ? (
          <span className="info">
            {item.urls.map((url, i) => {
              if (i === 0) return null;
              return <a key={url.type} href={url.url}>{mapType[url.type]}</a>;
            })}
          </span>
        ): null}
      </td>
    )}/>
  </div>
);
